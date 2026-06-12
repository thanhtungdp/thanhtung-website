import { useEffect, useRef } from 'react';
import {
	animate,
	motion,
	useInView,
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

export function X10Mark({ label = 'X10' }: { label?: string }) {
	const reduce = useReducedMotion();
	const value = useMotionValue(1);
	const text = useTransform(value, (latest) => `X${Math.round(latest)}`);

	useEffect(() => {
		if (reduce) {
			value.set(10);
			return;
		}
		const controls = animate(value, 10, { duration: 0.9, ease, delay: 0.55 });
		return () => controls.stop();
	}, [reduce, value]);

	return (
		<span className="x10-wrap" aria-label={label}>
			<motion.span className="x10-mark">{text}</motion.span>
		</span>
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
	const glow = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(251, 146, 60, 0.28), transparent 34%)`;

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
			className="profile-card surface-card"
			initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.75, delay: 0.35, ease }}
			style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
			onPointerMove={onPointerMove}
			onPointerLeave={onPointerLeave}
		>
			<motion.div className="profile-glow" style={{ background: glow }} aria-hidden="true" />
			<div className="profile-topline">
				<p>{name}</p>
				<span>{status}</span>
			</div>
			<h2>{title}</h2>
			<p className="profile-focus">{focus}</p>
			<div className="profile-meta">
				<span>{location} · {email}</span>
			</div>
		</motion.aside>
	);
}

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
	const reduce = useReducedMotion();
	return (
		<motion.div
			className={className}
			initial={reduce ? false : { opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.18 }}
			transition={{ duration: 0.65, ease }}
		>
			{children}
		</motion.div>
	);
}

export function MotionProjectGrid({ projects }: { projects: Project[] }) {
	const reduce = useReducedMotion();
	return (
		<div className="project-grid">
			{projects.map((project, index) => {
				const content = (
					<>
						<div className="thumb">
							<img src={project.imageSrc} width="640" height="360" alt={project.title} loading="lazy" />
						</div>
						<div className="project-body">
							<div className="project-kicker-row">
								<span>{project.meta}</span>
								<span>{project.role}</span>
							</div>
							<h3>{project.title}</h3>
							<p>{project.desc}</p>
							<div className="project-proof">
								<strong>{project.impact}</strong>
								<span>{project.domain}</span>
							</div>
							<div className="project-cta">{project.cta}<span aria-hidden="true">→</span></div>
						</div>
					</>
				);

				return (
					<motion.article
						className="project-card surface-card"
						key={project.title}
						initial={reduce ? false : { opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.24 }}
						transition={{ duration: 0.6, delay: index * 0.07, ease }}
					>
						{project.href ? <a className="project-link" href={project.href}>{content}</a> : content}
					</motion.article>
				);
			})}
		</div>
	);
}

function CountUp({ value }: { value: string }) {
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.8 });
	const reduce = useReducedMotion();
	const numeric = Number(value.replace(/[^0-9.]/g, '')) || 0;
	const suffix = value.replace(/[0-9.,]/g, '');
	const mv = useMotionValue(reduce ? numeric : 0);
	const display = useTransform(mv, (latest) => {
		const rounded = Math.round(latest).toLocaleString('en-US');
		return `${rounded}${suffix}`;
	});

	useEffect(() => {
		if (!inView) return;
		if (reduce) {
			mv.set(numeric);
			return;
		}
		const controls = animate(mv, numeric, { duration: 1.15, ease });
		return () => controls.stop();
	}, [inView, mv, numeric, reduce]);

	return <motion.span ref={ref}>{display}</motion.span>;
}

export function MotionStatsGrid({ stats }: { stats: Stat[] }) {
	const reduce = useReducedMotion();
	return (
		<div className="stats-grid">
			{stats.map((stat, index) => (
				<motion.div
					className="stat-card"
					key={stat.label}
					initial={reduce ? false : { opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.35 }}
					transition={{ duration: 0.55, delay: index * 0.06, ease }}
				>
					<strong><CountUp value={stat.value} /></strong>
					<span>{stat.label}</span>
				</motion.div>
			))}
		</div>
	);
}
