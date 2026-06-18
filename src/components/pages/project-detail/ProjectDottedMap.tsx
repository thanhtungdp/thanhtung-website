import type { ProjectMapMarker } from './types';

type Point = {
	x: number;
	y: number;
};

const regions = [
	{ cx: 24, cy: 29, rx: 13, ry: 18 },
	{ cx: 42, cy: 26, rx: 12, ry: 10 },
	{ cx: 52, cy: 32, rx: 18, ry: 14 },
	{ cx: 66, cy: 38, rx: 12, ry: 18 },
	{ cx: 77, cy: 48, rx: 9, ry: 9 },
	{ cx: 83, cy: 58, rx: 13, ry: 7 },
	{ cx: 33, cy: 56, rx: 8, ry: 12 },
];

function isOnLand(x: number, y: number) {
	return regions.some((region) => {
		const dx = (x - region.cx) / region.rx;
		const dy = (y - region.cy) / region.ry;
		return dx * dx + dy * dy <= 1;
	});
}

function project(lng: number, lat: number) {
	return {
		x: ((lng + 180) / 360) * 100,
		y: ((90 - lat) / 180) * 64,
	};
}

const points: Point[] = [];

for (let y = 8; y <= 62; y += 2) {
	for (let x = 6; x <= 96; x += 2) {
		const offset = Math.floor(y) % 4 === 0 ? 1 : 0;
		if (isOnLand(x + offset, y)) {
			points.push({ x: x + offset, y });
		}
	}
}

export default function ProjectDottedMap({ markers }: { markers: ProjectMapMarker[] }) {
	return (
		<div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-950 via-neutral-900 to-teal-950 p-4 shadow-2xl shadow-neutral-950/15">
			<svg viewBox="0 0 100 64" className="relative z-10 h-full w-full text-white" role="img" aria-label="Project deployment footprint map">
				{points.map((point) => (
					<circle key={`${point.x}-${point.y}`} cx={point.x} cy={point.y} r="0.16" fill="currentColor" opacity="0.3" />
				))}
				{markers.map((marker) => {
					const point = project(marker.lng, marker.lat);
					const isRightEdge = point.x > 76;
					const labelOffsetY = marker.label === 'Vietnam' ? -1.8 : marker.label === 'Philippines' ? 3.2 : -1;
					return (
						<g key={marker.label}>
							{marker.pulse !== false ? (
								<>
									<circle cx={point.x} cy={point.y} r="1.2" fill="none" stroke="rgb(249 115 22)" strokeWidth="0.25" opacity="0.75">
										<animate attributeName="r" values="1.2;4.4" dur="1.6s" repeatCount="indefinite" />
										<animate attributeName="opacity" values="0.75;0" dur="1.6s" repeatCount="indefinite" />
									</circle>
									<circle cx={point.x} cy={point.y} r="1.2" fill="none" stroke="rgb(45 212 191)" strokeWidth="0.2" opacity="0.65">
										<animate attributeName="r" values="1.2;3.6" dur="1.6s" begin="0.8s" repeatCount="indefinite" />
										<animate attributeName="opacity" values="0.65;0" dur="1.6s" begin="0.8s" repeatCount="indefinite" />
									</circle>
								</>
							) : null}
							<circle cx={point.x} cy={point.y} r="0.75" fill="rgb(249 115 22)" />
							<text
								x={isRightEdge ? point.x - 1.6 : point.x + 1.5}
								y={point.y + labelOffsetY}
								fill="white"
								fontSize="2.5"
								fontWeight="800"
								textAnchor={isRightEdge ? 'end' : 'start'}
							>
								{marker.label}
							</text>
						</g>
					);
				})}
			</svg>
		</div>
	);
}
