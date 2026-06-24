import { useEffect, useRef, useState } from 'react';
import { connect } from './hermesLandingContent';

// Draws animated cubic bezier paths from each tool node to the hub and from
// the hub to each outcome node. Re-measures on resize so it stays accurate.
export default function FlowDiagram() {
	const containerRef = useRef<HTMLDivElement>(null);
	const leftRef = useRef<HTMLDivElement>(null);
	const rightRef = useRef<HTMLDivElement>(null);
	const hubRef = useRef<HTMLDivElement>(null);
	const [paths, setPaths] = useState<{ d: string; id: string }[]>([]);
	const [size, setSize] = useState({ w: 0, h: 0 });

	const measure = () => {
		const fr = containerRef.current?.getBoundingClientRect();
		const hub = hubRef.current?.getBoundingClientRect();
		if (!fr || !hub || fr.width < 10) return;

		const hubL: [number, number] = [hub.left - fr.left, hub.top - fr.top + hub.height / 2];
		const hubR: [number, number] = [hub.right - fr.left, hub.top - fr.top + hub.height / 2];

		const newPaths: { d: string; id: string }[] = [];

		const addPath = (a: [number, number], b: [number, number], id: string) => {
			const dx = b[0] - a[0];
			const d = `M ${a[0]} ${a[1]} C ${a[0] + dx * 0.5} ${a[1]}, ${b[0] - dx * 0.5} ${b[1]}, ${b[0]} ${b[1]}`;
			newPaths.push({ d, id });
		};

		leftRef.current
			?.querySelectorAll<HTMLElement>('[data-node]')
			.forEach((node, i) => {
				const r = node.getBoundingClientRect();
				addPath([r.right - fr.left, r.top - fr.top + r.height / 2], hubL, `L${i}`);
			});

		rightRef.current
			?.querySelectorAll<HTMLElement>('[data-node]')
			.forEach((node, i) => {
				const r = node.getBoundingClientRect();
				addPath(hubR, [r.left - fr.left, r.top - fr.top + r.height / 2], `R${i}`);
			});

		setPaths(newPaths);
		setSize({ w: fr.width, h: fr.height });
	};

	useEffect(() => {
		const timer = setTimeout(measure, 350);
		window.addEventListener('resize', measure);
		return () => {
			clearTimeout(timer);
			window.removeEventListener('resize', measure);
		};
	}, []);

	const isMobile = size.w > 0 && size.w < 640;

	return (
		<div ref={containerRef} className="relative min-h-[480px] sm:min-h-[520px]">
			{/* SVG connector layer */}
			{!isMobile && size.w > 0 && (
				<svg
					viewBox={`0 0 ${size.w} ${size.h}`}
					width={size.w}
					height={size.h}
					className="pointer-events-none absolute inset-0 overflow-visible"
					aria-hidden="true"
				>
					{paths.map((p, i) => (
						<g key={p.id}>
							<path d={p.d} fill="none" stroke="#f26c2c" strokeWidth="1.5" opacity="0.35" />
							<circle r="3.6" fill="#f26c2c">
								<animateMotion
									dur={`${(2.3 + i * 0.22).toFixed(2)}s`}
									repeatCount="indefinite"
									begin={`${(i * 0.3).toFixed(2)}s`}
								>
									<mpath href={`#fp-${p.id}`} />
								</animateMotion>
							</circle>
							{/* hidden path with id for mpath reference */}
							<path id={`fp-${p.id}`} d={p.d} fill="none" stroke="none" />
						</g>
					))}
				</svg>
			)}

			{/* Layout grid */}
			<div className="relative grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_180px_1fr]">
				{/* Tools */}
				<div ref={leftRef} className="z-10 flex flex-col gap-3 sm:pr-10">
					<div className="font-hermes-mono text-[11px] uppercase tracking-[0.12em] text-hermes-muted">
						{connect.toolsLabel}
					</div>
					{connect.tools.map((tool) => (
						<div
							key={tool}
							data-node
							className="flex items-center gap-2.5 border-2 border-hermes-ink bg-hermes-card px-3.5 py-3 text-[14px] font-semibold leading-tight transition-shadow hover:shadow-[4px_4px_0_#f26c2c]"
						>
							<span className="h-2 w-2 shrink-0 bg-hermes-orange" />
							{tool}
						</div>
					))}
				</div>

				{/* Hub */}
				<div className="z-10 flex flex-col items-center sm:order-none order-first">
					<div
						ref={hubRef}
						className="flex h-[150px] w-[150px] flex-col items-center justify-center border-2 border-hermes-ink bg-hermes-orange text-white shadow-[8px_8px_0_#16140f]"
					>
						<span className="font-hermes-sans text-2xl font-bold tracking-tight">HERMES</span>
						<span className="font-hermes-mono mt-1 text-[11px] tracking-[0.14em] opacity-85">
							CORE
						</span>
					</div>
				</div>

				{/* Outcomes */}
				<div ref={rightRef} className="z-10 flex flex-col gap-3 sm:pl-10">
					<div className="font-hermes-mono text-[11px] uppercase tracking-[0.12em] text-hermes-muted">
						{connect.outcomeLabel}
					</div>
					{connect.outcomes.map((outcome) => (
						<div
							key={outcome}
							data-node
							className="flex items-center gap-2.5 border-2 border-hermes-ink bg-hermes-card px-3.5 py-3 text-[14px] font-semibold leading-tight transition-shadow hover:shadow-[4px_4px_0_#f26c2c]"
						>
							<span className="h-2 w-2 shrink-0 bg-hermes-orange" />
							{outcome}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
