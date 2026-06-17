import ILotusLandImage from '../../../assets/projects/ilotusland/featured.webp';
import SaleAIImage from '../../../assets/projects/sale-ai/sale-featured.png';
import SimplamoImage from '../../../assets/projects/simplamo/featured.png';
import TeachingImage from '../../../assets/projects/teaching-scale.png';
import { localizePath, type Locale } from '../../../i18n';

type Project = {
	title: string;
	desc: string;
	image: ImageMetadata;
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

export function getHomeContent(locale: Locale) {
	const isVi = locale === 'vi';

	const projects: Project[] = isVi
		? [
				{
					title: 'iLotusLand IoT',
					desc: 'Nền tảng quan trắc công nghiệp với hơn 1.000 trạm, phục vụ FDI, nhà máy và cơ quan nhà nước.',
					image: ILotusLandImage,
					meta: 'IoT Platform',
					role: 'Founder',
					impact: '1,000+ trạm',
					domain: 'Industrial IoT',
					cta: 'Xem case study',
					href: localizePath('/projects/ilotusland', locale),
				},
				{
					title: 'Simplamo OS',
					desc: 'Hệ điều hành quản trị giúp HĐQT và Ban điều hành đồng bộ OGSM/BSC/KPI/OKRs, dashboard, nhịp họp và AI.',
					image: SimplamoImage,
					meta: 'SaaS Platform',
					role: 'Founder',
					impact: '200K users',
					domain: 'Strategy Execution',
					cta: 'Xem case study',
					href: localizePath('/projects/simplamo', locale),
				},
				{
					title: 'Sale AI',
					desc: 'AI Agent cho mạng lưới 2.000 đại lý, giúp tư vấn từ hình ảnh, tạo báo giá và đơn hàng dưới 60 giây.',
					image: SaleAIImage,
					meta: 'AI Agent',
					role: 'Product Architect',
					impact: '<60s báo giá',
					domain: 'Sales AI / Distribution',
					cta: 'Xem case study',
					href: localizePath('/projects/sale-ai', locale),
				},
				{
					title: 'Đào tạo',
					desc: 'Biến một chủ đề khô thành trải nghiệm học cuốn hút, đạt hơn 1 triệu lượt xem và tiếp cận học sinh quy mô lớn.',
					image: TeachingImage,
					meta: 'Education',
					role: 'Educator',
					impact: '1M+ lượt xem',
					domain: 'Learning at scale',
					cta: 'Xem hành trình',
				}
			,
			]
		: [
				{
					title: 'iLotusLand Industrial IoT',
					desc: 'An industrial monitoring platform with 1,000+ stations serving FDI factories and public agencies.',
					image: ILotusLandImage,
					meta: 'IoT Platform',
					role: 'Founder / Architect',
					impact: '1,000+ stations',
					domain: 'Industrial IoT',
					cta: 'View case study',
					href: localizePath('/projects/ilotusland', locale),
				},
				{
					title: 'Simplamo Management OS',
					desc: 'A management operating system for boards and executives to align OGSM/BSC/KPI/OKRs, dashboards, meeting rhythm, and AI.',
					image: SimplamoImage,
					meta: 'SaaS Platform',
					role: 'Founder / CEO / Product Architect',
					impact: '200K users',
					domain: 'Strategy Execution',
					cta: 'View case study',
					href: localizePath('/projects/simplamo', locale),
				},
				{
					title: 'Pascal to 1M learners',
					desc: 'Turned a dry technical subject into engaging lessons that reached more than one million views.',
					image: TeachingImage,
					meta: 'Education',
					role: 'Educator',
					impact: '1M+ views',
					domain: 'Learning at scale',
					cta: 'View journey',
				},
				{
					title: 'ADG Sale AI',
					desc: 'An AI Agent for a 2,000-dealer network, enabling image-based consultation, quotes, and orders in under 60 seconds.',
					image: SaleAIImage,
					meta: 'AI Agent',
					role: 'Product Architect',
					impact: '<60s quotes',
					domain: 'Sales AI / Distribution',
					cta: 'View case study',
					href: localizePath('/projects/sale-ai', locale),
				},
			];

	return {
		isVi,
		projects,
		projectCards: projects.map((project) => ({ ...project, imageSrc: project.image.src })),
		services: isVi
			? [
					'Tư vấn chiến lược, OKRs, BSC, KPI và 4DX cho doanh nghiệp đang tăng trưởng.',
					'Thiết kế hệ thống AI agent từ bài toán kinh doanh tới sản phẩm chạy thật.',
					'Đào tạo AI product, web, mobile, backend và tư duy sản phẩm cho đội ngũ.',
					'Cố vấn vận hành để biến mục tiêu thành nhịp họp, dashboard và trách nhiệm rõ ràng.',
				]
			: [
					'Advise on strategy, OKRs, BSC, KPI, and 4DX for growing companies.',
					'Design AI agent systems from business problem to working product.',
					'Train teams in AI products, web, mobile, backend, and product thinking.',
					'Help leaders turn goals into meeting rhythm, dashboards, and clear ownership.',
				],
		stats: [
			{ value: '1M+', label: isVi ? 'học sinh đã tiếp cận' : 'learners reached' },
			{ value: '1,000+', label: isVi ? 'trạm quan trắc' : 'monitoring stations' },
			{ value: '600+', label: isVi ? 'nhà máy FDI phục vụ' : 'FDI factories served' },
			{ value: '100+', label: isVi ? 'tổ chức dùng Simplamo' : 'organizations using Simplamo' },
		] satisfies Stat[],
		proofStats: isVi
			? [
					{ value: '1M+', label: 'học sinh tiếp cận' },
					{ value: '1,000+', label: 'trạm IoT' },
					{ value: '100+', label: 'tổ chức dùng Simplamo' },
					{ value: 'AI/SaaS', label: 'sản phẩm thật' },
				]
			: [
					{ value: '1M+', label: 'learners reached' },
					{ value: '1,000+', label: 'IoT stations' },
					{ value: '100+', label: 'Simplamo organizations' },
					{ value: 'AI/SaaS', label: 'real products' },
				],
		focusSignals: ['AI Agents', 'SaaS', 'Industrial IoT', 'OKRs', 'BSC/KPI', 'Education', 'Product Architecture', 'Strategy Execution'],
		profileCard: {
			name: 'Phan Thanh Tung',
			title: isVi ? 'Tech Visionary' : 'Tech Visionary.',
			location: 'Ho Chi Minh City',
			email: 'thanhtung@simplamo.com',
			focus: isVi ? 'Đang xây Simplamo, AI agents và chương trình đào tạo sản phẩm AI.' : 'Building Simplamo, AI agents, and practical AI product training.',
			status: isVi ? 'Đang xây Simplamo' : 'Building Simplamo',
		},
	};
}
