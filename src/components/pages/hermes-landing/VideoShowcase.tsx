import { useEffect, useRef, useState } from 'react';
import { videoShowcase } from './hermesLandingContent';

/**
 * Vertical-video (9:16) showcase strip for the Hermes landing page.
 *
 * Desktop: grid of cards. Mobile: horizontal snap-scroll. Clicking a card
 * opens a centred modal player with the full video and native controls.
 */
type Video = (typeof videoShowcase.videos)[number];

export default function VideoShowcase() {
	const [active, setActive] = useState<Video | null>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	// Lock body scroll + ESC-to-close while the player is open.
	useEffect(() => {
		if (!active) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
		window.addEventListener('keydown', onKey);
		return () => {
			document.body.style.overflow = prev;
			window.removeEventListener('keydown', onKey);
		};
	}, [active]);

	// Auto-play the video as soon as the modal mounts.
	useEffect(() => {
		if (active && videoRef.current) {
			videoRef.current.play().catch(() => {
				/* autoplay can be blocked — user can press play manually */
			});
		}
	}, [active]);

	return (
		<>
			{/* Strip: horizontal snap-scroll on mobile, grid on desktop. */}
			<div
				className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:thin] [scroll-snap-type:x_mandatory] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4"
			>
				{videoShowcase.videos.map((v) => (
					<button
						key={v.id}
						type="button"
						onClick={() => setActive(v)}
						className="hermes-press group relative w-[78vw] max-w-[280px] shrink-0 overflow-hidden border-2 border-hermes-ink bg-hermes-ink [scroll-snap-align:start] sm:w-auto sm:max-w-none"
						aria-label={`Play ${v.title}`}
					>
						<div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
							<video
								src={v.thumbnail}
								className="h-full w-full object-cover"
								preload="metadata"
								muted
								playsInline
							/>
							{/* Play overlay */}
							<div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/15">
								<div className="grid h-14 w-14 place-items-center border-2 border-white bg-hermes-orange text-white shadow-[4px_4px_0_#16140f] transition-transform group-hover:scale-110">
									<svg
										viewBox="0 0 24 24"
										fill="currentColor"
										className="ml-0.5 h-6 w-6"
										aria-hidden="true"
									>
										<path d="M8 5v14l11-7z" />
									</svg>
								</div>
							</div>
							{/* Title bar */}
							<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-3 py-2.5 text-left">
								<div className="font-hermes-mono text-[10px] uppercase tracking-[0.08em] text-hermes-orange">
									Hermes Visual
								</div>
								<div className="mt-0.5 font-hermes-sans text-[13px] font-bold text-white">
									{v.title}
								</div>
							</div>
						</div>
					</button>
				))}
			</div>

			{/* Modal player */}
			{active && (
				<div
					className="fixed inset-0 z-[70] flex items-center justify-center p-4"
					role="dialog"
					aria-modal="true"
					aria-label={active.title}
				>
					<div
						className="absolute inset-0 bg-hermes-ink/80 backdrop-blur-sm"
						onClick={() => setActive(null)}
					/>
					<div className="relative z-10 flex w-full max-w-[400px] flex-col">
						<button
							type="button"
							onClick={() => setActive(null)}
							aria-label="Đóng"
							className="mb-3 self-end font-hermes-mono text-xs font-bold uppercase tracking-[0.1em] text-white hover:text-hermes-orange"
						>
							✕ Đóng
						</button>
						<div className="border-2 border-hermes-orange bg-black shadow-[8px_8px_0_var(--color-hermes-ink)]">
							<video
								ref={videoRef}
								src={active.src}
								controls
								autoPlay
								playsInline
								className="aspect-[9/16] w-full bg-black"
							/>
						</div>
						<div className="mt-3 text-center font-hermes-mono text-xs text-white/70">
							{active.title}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
