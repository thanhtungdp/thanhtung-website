import { OrbitingCircles } from '../../ui/OrbitingCircles';

type TechItem = {
	label: string;
	shortLabel: string;
	icon: (props: { className?: string }) => JSX.Element;
	className: string;
};

const outerItems: TechItem[] = [
	{
		label: 'Node.js',
		shortLabel: 'JS',
		icon: NodeIcon,
		className: 'border-emerald-200 bg-emerald-50 text-emerald-700',
	},
	{
		label: 'Tailwind',
		shortLabel: 'TW',
		icon: TailwindIcon,
		className: 'border-cyan-200 bg-cyan-50 text-cyan-700',
	},
	{
		label: 'React',
		shortLabel: 'R',
		icon: ReactIcon,
		className: 'border-sky-200 bg-sky-50 text-sky-700',
	},
	{
		label: 'React Native',
		shortLabel: 'RN',
		icon: ReactNativeIcon,
		className: 'border-indigo-200 bg-indigo-50 text-indigo-700',
	},
	{
		label: 'AWS Service',
		shortLabel: 'AWS',
		icon: AwsIcon,
		className: 'border-orange-200 bg-orange-50 text-orange-700',
	},
];

const innerItems: TechItem[] = [
	{
		label: 'AI',
		shortLabel: 'AI',
		icon: AiIcon,
		className: 'border-neutral-300 bg-neutral-950 text-white',
	},
	{
		label: 'Micro service',
		shortLabel: 'MS',
		icon: MicroServiceIcon,
		className: 'border-neutral-200 bg-white text-neutral-900',
	},
	{
		label: 'OpenAI',
		shortLabel: 'OA',
		icon: OpenAiIcon,
		className: 'border-neutral-200 bg-white text-neutral-900',
	},
	{
		label: 'Anthropic',
		shortLabel: 'A',
		icon: AnthropicIcon,
		className: 'border-amber-200 bg-amber-50 text-amber-700',
	},
];

export default function ServicesOrbitingStack() {
	return (
		<div className="mt-7">
			<OrbitCanvas compact className="sm:hidden" />
			<OrbitCanvas className="hidden sm:block" />
		</div>
	);
}

function OrbitCanvas({ compact = false, className = '' }: { compact?: boolean; className?: string }) {
	const outerRadius = compact ? 98 : 134;
	const innerRadius = compact ? 62 : 84;
	const outerIconSize = compact ? 44 : 54;
	const innerIconSize = compact ? 42 : 48;

	return (
		<div
			className={[
				'relative mx-auto w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white/75 lg:mx-0',
				compact ? 'h-72' : 'h-96 max-w-md',
				className,
			]
				.filter(Boolean)
				.join(' ')}
		>
			<div className="pointer-events-none absolute inset-5 rounded-full border border-dashed border-neutral-200" aria-hidden="true"></div>
			<div className="absolute left-1/2 top-1/2 z-10 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-neutral-950 bg-neutral-950 text-white sm:h-24 sm:w-24">
				<div className="text-center">
					<span className="block text-xl font-black leading-none sm:text-2xl">X10</span>
					<span className="mt-1 block text-xs font-extrabold leading-none text-orange-200">AI stack</span>
				</div>
			</div>
			<OrbitingCircles
				className="z-20 border shadow-sm shadow-neutral-950/5"
				duration={28}
				radius={outerRadius}
				iconSize={outerIconSize}
				speed={1}
			>
				{outerItems.map((item) => (
					<TechOrb item={item} key={item.label} />
				))}
			</OrbitingCircles>
			<OrbitingCircles
				className="z-30 border shadow-sm shadow-neutral-950/5"
				duration={22}
				radius={innerRadius}
				iconSize={innerIconSize}
				reverse
				speed={1}
			>
				{innerItems.map((item) => (
					<TechOrb item={item} key={item.label} />
				))}
			</OrbitingCircles>
			<div className="pointer-events-none absolute inset-x-8 bottom-5 h-px bg-neutral-200" aria-hidden="true"></div>
		</div>
	);
}

function TechOrb({ item }: { item: TechItem }) {
	const Icon = item.icon;

	return (
		<div
			className={[
				'grid h-full w-full place-items-center rounded-full border transition duration-200 ease-out hover:scale-105',
				item.className,
			].join(' ')}
			title={item.label}
			aria-label={item.label}
		>
			<Icon className="h-6 w-6" />
			<span className="sr-only">{item.shortLabel}</span>
		</div>
	);
}

function AiIcon({ className = '' }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M12 3l1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
			<path d="M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14zM19 13l.7 1.9 1.9.7-1.9.7L19 19l-.7-1.7-1.9-.7 1.9-.7L19 13z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
		</svg>
	);
}

function NodeIcon({ className = '' }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M12 2.8l7.7 4.4v9.6L12 21.2l-7.7-4.4V7.2L12 2.8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
			<path d="M8.1 14.8V9.2h1.4l2.1 3.3V9.2H13v5.6h-1.4l-2.1-3.3v3.3H8.1zM15 14.8c-.7 0-1.3-.2-1.8-.6l.6-1.1c.4.3.8.4 1.2.4.5 0 .7-.2.7-.6V9.2h1.4v3.7c0 1.2-.8 1.9-2.1 1.9z" fill="currentColor" />
		</svg>
	);
}

function TailwindIcon({ className = '' }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M4 10.7c1.7-3.3 4.1-4.7 7.2-4.1 1.9.3 3.2 1.5 4.2 2.4 1 .9 1.8 1.5 3.6.8-1.7 3.3-4.1 4.7-7.2 4.1-1.9-.3-3.2-1.5-4.2-2.4-1-.9-1.8-1.5-3.6-.8z" fill="currentColor" opacity="0.85" />
			<path d="M6.1 15.8c1.7-3.2 4.1-4.5 7.1-4 1.8.3 3.1 1.4 4.1 2.3 1 .9 1.9 1.5 3.7.8-1.7 3.2-4.1 4.5-7.1 4-1.8-.3-3.1-1.4-4.1-2.3-1-.9-1.9-1.5-3.7-.8z" fill="currentColor" opacity="0.55" />
		</svg>
	);
}

function ReactIcon({ className = '' }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<circle cx="12" cy="12" r="1.9" fill="currentColor" />
			<ellipse cx="12" cy="12" rx="8.6" ry="3.4" stroke="currentColor" strokeWidth="1.5" />
			<ellipse cx="12" cy="12" rx="8.6" ry="3.4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
			<ellipse cx="12" cy="12" rx="8.6" ry="3.4" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
		</svg>
	);
}

function ReactNativeIcon({ className = '' }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<rect x="6.2" y="2.8" width="11.6" height="18.4" rx="2.3" stroke="currentColor" strokeWidth="1.6" />
			<circle cx="12" cy="12" r="1.35" fill="currentColor" />
			<ellipse cx="12" cy="12" rx="5" ry="2" stroke="currentColor" strokeWidth="1.2" />
			<ellipse cx="12" cy="12" rx="5" ry="2" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
			<ellipse cx="12" cy="12" rx="5" ry="2" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
		</svg>
	);
}

function AwsIcon({ className = '' }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M7.8 16.8H18a3.5 3.5 0 0 0 .6-7 5.4 5.4 0 0 0-10.2-1.6A4.4 4.4 0 0 0 7.8 16.8z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M6.5 19c3.6 1.9 7.4 1.9 11.1 0M16.5 18.1l1.3.9-1.3.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

function MicroServiceIcon({ className = '' }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M8 8h8M8 16h8M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			<circle cx="6" cy="6" r="2.4" fill="currentColor" />
			<circle cx="18" cy="6" r="2.4" fill="currentColor" />
			<circle cx="6" cy="18" r="2.4" fill="currentColor" />
			<circle cx="18" cy="18" r="2.4" fill="currentColor" />
		</svg>
	);
}

function OpenAiIcon({ className = '' }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M12 3.2a4.1 4.1 0 0 1 3.7 2.3 4.1 4.1 0 0 1 4.8 4 4.1 4.1 0 0 1-1.1 2.8 4.1 4.1 0 0 1-1.9 5.7 4.1 4.1 0 0 1-5.5 2 4.1 4.1 0 0 1-5.7-1.6 4.1 4.1 0 0 1-2.8-5.1 4.1 4.1 0 0 1 .9-6.2 4.1 4.1 0 0 1 7.6-3.9z" stroke="currentColor" strokeWidth="1.45" strokeLinejoin="round" />
			<path d="M8 8.7l4-2.3 4 2.3v4.6l-4 2.3-4-2.3V8.7z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
		</svg>
	);
}

function AnthropicIcon({ className = '' }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M4.2 19.5L10.4 4.5h3.2l6.2 15h-3.2l-1.2-3.1H8.6l-1.2 3.1H4.2z" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round" />
			<path d="M9.7 13.7h4.6L12 7.8l-2.3 5.9z" fill="currentColor" />
		</svg>
	);
}
