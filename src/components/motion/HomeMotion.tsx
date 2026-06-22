import { type CSSProperties } from 'react';
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useReducedMotion,
	useTransform,
} from 'motion/react';

type ProfileProps = {
	name: string;
	title: string;
	location: string;
	email: string;
	focus: string;
	status: string;
};

type Project = {
	title: string;
	desc: string;
	imageSrc: string;
	meta: string;
	role: string;
	impact: string;
	domain: string;
	cta: string;
	href?: string;
};

type Stat = {
	value: string;
	label: string;
};

const ease = [0.16, 1, 0.3, 1] as const;

export function X10Mark({ label = 'X10', target = 10 }: { label?: string; target?: number }) {
	const reduce = useReducedMotion();
	void target;

	return (
		<span className="x10-wrap" aria-label={label}>
			<motion.span
				className="x10-mark magic-gradient-text"
				initial={reduce ? false : { y: 12, scale: 0.96 }}
				animate={reduce ? undefined : { y: 0, scale: 1 }}
				transition={{ duration: 0.55, ease, delay: 0.45 }}
			>
				{label}
			</motion.span>
		</span>
	);
}

export function SignalMarquee({ items }: { items: string[] }) {
	return (
		<div className="mt-4 flex w-full max-w-2xl min-w-0" aria-label="Focus areas">
			<div className="flex min-w-0 flex-wrap gap-2.5">
				{items.map((item) => (
					<span
						className="inline-flex min-h-8 items-center whitespace-nowrap rounded-full border border-neutral-200 bg-white/75 px-3 py-1.5 text-xs font-extrabold leading-none text-neutral-800"
						key={item}
					>
						{item}
					</span>
				))}
			</div>
		</div>
	);
}

function BorderBeam({ delay = 0, reverse = false }: { delay?: number; reverse?: boolean }) {
	const beamStyle = {
		offsetPath: 'rect(0 auto auto 0 round 1.5rem)',
	} as CSSProperties;

	return (
		<motion.span
			className="pointer-events-none absolute left-0 top-0 aspect-square w-48 rounded-full bg-gradient-to-r from-transparent via-orange-400 to-teal-400 opacity-90 blur-sm"
			aria-hidden="true"
			initial={{ offsetDistance: reverse ? '100%' : '0%' }}
			animate={{ offsetDistance: reverse ? '0%' : '100%' }}
			transition={{ duration: 7, delay, ease: 'linear', repeat: Infinity }}
			style={beamStyle}
		/>
	);
}

export function TiltProfileCard({ name, title, location, email, focus, status }: ProfileProps) {
	const reduce = useReducedMotion();
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useTransform(y, [-0.5, 0.5], [4, -4]);
	const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);
	const glowX = useTransform(x, [-0.5, 0.5], ['12%', '88%']);
	const glowY = useTransform(y, [-0.5, 0.5], ['10%', '90%']);
	const glow = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgb(var(--primary) / 0.24), transparent 34%)`;

	function onPointerMove(event: React.PointerEvent<HTMLElement>) {
		if (reduce) return;
		const rect = event.currentTarget.getBoundingClientRect();
		x.set((event.clientX - rect.left) / rect.width - 0.5);
		y.set((event.clientY - rect.top) / rect.height - 0.5);
	}

	function onPointerLeave() {
		x.set(0);
		y.set(0);
	}

	return (
		<motion.aside
			className="relative min-w-0 max-w-full overflow-hidden rounded-3xl border border-neutral-950 bg-neutral-950 p-5 text-white shadow-2xl shadow-neutral-950/20 backdrop-blur after:pointer-events-none after:absolute after:inset-px after:rounded-3xl after:border after:border-white/10 sm:p-8"
			initial={reduce ? false : { y: 24, scale: 0.98 }}
			animate={reduce ? undefined : { y: 0, scale: 1 }}
			transition={{ duration: 0.75, delay: 0.35, ease }}
			style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
			onPointerMove={onPointerMove}
			onPointerLeave={onPointerLeave}
		>
			<motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} aria-hidden="true" />
			<div className="relative z-10 mb-4 flex items-start justify-between gap-3 sm:mb-6 sm:items-center">
				<p className="m-0 text-sm font-extrabold text-orange-400">{name}</p>
				<span className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs font-extrabold leading-none text-neutral-100">{status}</span>
			</div>
			<h2 className="relative z-10 max-w-sm text-3xl leading-tight tracking-normal">
				<span className="text-white">{title}</span>
			</h2>
			<p className="relative z-10 mt-3 max-w-sm text-sm font-bold leading-6 text-neutral-200 sm:mt-4 sm:text-base">{focus}</p>
			<div className="relative z-10 mt-5 text-sm leading-6 text-neutral-300 sm:mt-8 sm:text-base">
				<span className="break-words">{location} · {email}</span>
			</div>
			{!reduce && (
				<>
					<BorderBeam />
					<BorderBeam delay={3.5} reverse />
				</>
			)}
		</motion.aside>
	);
}

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
	const reduce = useReducedMotion();
	return (
		<motion.div
			className={className}
			initial={reduce ? false : { y: 20 }}
			whileInView={{ y: 0 }}
			viewport={{ once: true, amount: 0.18 }}
			transition={{ duration: 0.65, ease }}
		>
			{children}
		</motion.div>
	);
}

export function MotionProjectGrid({ projects }: { projects: Project[] }) {
	return (
		<div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
			{projects.map((project, index) => {
				const isFeatured = index === 0;
				const articleClass = [
					'surface-card group relative h-full overflow-hidden bg-white/90 transition hover:-translate-y-1 hover:border-orange-200',
					isFeatured ? 'md:col-span-2 xl:col-span-3' : '',
				].join(' ');
				const linkClass = isFeatured
					? 'grid h-full text-inherit no-underline md:grid-cols-2'
					: 'flex h-full flex-col text-inherit no-underline';
				const imageClass = isFeatured
					? 'aspect-video overflow-hidden bg-neutral-950 p-2 md:aspect-auto md:min-h-72'
					: 'aspect-video overflow-hidden bg-neutral-950 p-2';
				const bodyClass = isFeatured ? 'grid content-center gap-4 p-5 sm:p-7' : 'grid content-between gap-3 p-4 sm:p-5';
				const titleClass = isFeatured ? 'm-0 text-3xl leading-tight sm:text-4xl' : 'm-0';
				const descClass = isFeatured ? 'm-0 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg' : 'm-0 line-clamp-3 text-base leading-7 text-neutral-600';
				const content = (
					<>
						<div className={imageClass}>
							<img
								className="block h-full w-full rounded-xl object-cover transition duration-300 ease-out group-hover:scale-105"
								src={project.imageSrc}
								width="640"
								height="360"
								alt={project.title}
								loading="lazy"
							/>
						</div>
						<div className={bodyClass}>
							<div className="flex flex-wrap gap-2">
								<span className="inline-flex min-h-7 items-center rounded-full border border-neutral-200 bg-orange-50 px-2.5 py-1 text-xs font-extrabold leading-none text-orange-700">{project.meta}</span>
								<span className="inline-flex min-h-7 items-center rounded-full border border-neutral-200 bg-orange-50 px-2.5 py-1 text-xs font-extrabold leading-none text-orange-700">{project.role}</span>
							</div>
							<h3 className={titleClass}>{project.title}</h3>
							<p className={descClass}>{project.desc}</p>
							<div className="grid grid-cols-2 gap-2 rounded-2xl bg-neutral-100/80 p-3">
								<strong className="block text-base leading-tight tracking-tight text-neutral-950">{project.impact}</strong>
								<span className="block text-sm font-extrabold leading-tight text-neutral-600">{project.domain}</span>
							</div>
							<div className="inline-flex w-fit items-center gap-1.5 text-sm font-black text-orange-700">{project.cta}<span className="transition group-hover:translate-x-1" aria-hidden="true">→</span></div>
						</div>
					</>
				);

				return (
					<motion.article
						className={articleClass}
						key={project.title}
					>
						{project.href ? <a className={linkClass} href={project.href}>{content}</a> : content}
					</motion.article>
				);
			})}
		</div>
	);
}

function CountUp({ value }: { value: string }) {
	return <span>{value}</span>;
}

export function MotionStatsGrid({ stats }: { stats: Stat[] }) {
	return (
		<div className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4 max-sm:mt-5">
			{stats.map((stat) => (
				<motion.div
					className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5"
					key={stat.label}
				>
					<strong className="block text-3xl leading-none tracking-tight text-orange-400 sm:text-5xl lg:text-6xl"><CountUp value={stat.value} /></strong>
					<span className="mt-2 block text-sm leading-tight text-neutral-200 sm:mt-3 sm:text-base sm:leading-6">{stat.label}</span>
				</motion.div>
			))}
		</div>
	);
}
