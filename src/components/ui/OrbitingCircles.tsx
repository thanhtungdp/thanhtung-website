import { Children, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react';

export interface OrbitingCirclesProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	reverse?: boolean;
	duration?: number;
	delay?: number;
	radius?: number;
	path?: boolean;
	iconSize?: number;
	speed?: number;
}

export function OrbitingCircles({
	className = '',
	children,
	reverse = false,
	duration = 20,
	delay = 0,
	radius = 160,
	path = true,
	iconSize = 30,
	speed = 1,
	style,
	...props
}: OrbitingCirclesProps) {
	const childCount = Children.count(children);
	const calculatedDuration = duration / speed;

	if (!childCount) return null;

	return (
		<>
			{path && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					className="pointer-events-none absolute inset-0 size-full"
					aria-hidden="true"
				>
					<circle className="stroke-neutral-950/10" cx="50%" cy="50%" r={radius} fill="none" strokeWidth="1" />
				</svg>
			)}
			{Children.map(children, (child, index) => {
				const angle = (360 / childCount) * index;
				const startTransform = `translate(-50%, -50%) rotate(${angle}deg) translateY(${radius}px) rotate(${-angle}deg)`;
				const orbitStyle = {
					'--duration': calculatedDuration,
					'--radius': radius,
					'--angle': angle,
					'--icon-size': `${iconSize}px`,
					animationDelay: `${delay}s`,
					transform: startTransform,
					...style,
				} as CSSProperties;

				return (
					<div
						style={orbitStyle}
						className={[
							'animate-orbit absolute left-1/2 top-1/2 flex h-[var(--icon-size)] w-[var(--icon-size)] transform-gpu items-center justify-center rounded-full motion-reduce:animate-none',
							reverse ? '[animation-direction:reverse]' : '',
							className,
						]
							.filter(Boolean)
							.join(' ')}
						{...props}
					>
						{child}
					</div>
				);
			})}
		</>
	);
}
