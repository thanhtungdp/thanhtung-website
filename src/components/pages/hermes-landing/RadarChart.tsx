import { useEffect, useRef, useState } from 'react';
import { radar } from './hermesLandingContent';

const CX = 200;
const CY = 200;
const R = 150;
const MAX = 10;
const RINGS = [2, 4, 6, 8, 10];

function point(idx: number, val: number, total: number): [number, number] {
	const a = (Math.PI * 2 * idx) / total - Math.PI / 2;
	const r = (R * val) / MAX;
	return [CX + r * Math.cos(a), CY + r * Math.sin(a)];
}

function polyPoints(vals: number[]): string {
	return vals.map((v, i) => point(i, v, vals.length).join(',')).join(' ');
}

// Animated before→after radar. Loops between the two states so the visitor
// sees the lift from AI-aware to AI-operator without interacting.
export default function RadarChart() {
	const { axes, before, after } = radar;
	const [phase, setPhase] = useState<'before' | 'after'>('before');
	const reduced = useRef(false);

	useEffect(() => {
		reduced.current =
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced.current) {
			setPhase('after');
			return;
		}
		const id = setInterval(() => {
			setPhase((p) => (p === 'before' ? 'after' : 'before'));
		}, 2600);
		return () => clearInterval(id);
	}, []);

	const ringMax = axes.map(() => MAX);
	const current = phase === 'before' ? before : after;

	return (
		<svg
			viewBox="0 0 400 400"
			className="h-auto w-full max-w-[420px]"
			role="img"
			aria-label="Biểu đồ radar so sánh trước và sau Hermes"
		>
			{RINGS.map((v) => (
				<polygon
					key={v}
					points={polyPoints(ringMax.map(() => v))}
					fill="none"
					stroke="#16140f"
					strokeOpacity="0.12"
					strokeWidth="1"
				/>
			))}
			{axes.map((label, i) => {
				const [x, y] = point(i, MAX, axes.length);
				const [lx, ly] = point(i, MAX + 1.1, axes.length);
				return (
					<g key={label}>
						<line x1={CX} y1={CY} x2={x} y2={y} stroke="#16140f" strokeOpacity="0.12" />
						<text
							x={lx}
							y={ly}
							textAnchor="middle"
							dominantBaseline="middle"
							className="font-hermes-mono"
							fontSize="11"
							fill="#6f685d"
						>
							{label}
						</text>
					</g>
				);
			})}
			{/* before (static reference) */}
			<polygon
				points={polyPoints(before)}
				fill="#16140f"
				fillOpacity="0.06"
				stroke="#16140f"
				strokeOpacity="0.45"
				strokeWidth="1.5"
				strokeDasharray="4 4"
			/>
			{/* animated active polygon */}
			<polygon
				points={polyPoints(current)}
				fill="#f26c2c"
				fillOpacity="0.16"
				stroke="#f26c2c"
				strokeWidth="2.5"
				style={{ transition: 'all 1.1s cubic-bezier(0.4,0,0.2,1)' }}
			/>
			{current.map((v, i) => {
				const [x, y] = point(i, v, current.length);
				return (
					<circle
						key={i}
						cx={x}
						cy={y}
						r="3.6"
						fill="#f26c2c"
						style={{ transition: 'all 1.1s cubic-bezier(0.4,0,0.2,1)' }}
					/>
				);
			})}
		</svg>
	);
}
