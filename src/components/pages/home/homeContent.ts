import ILotusLandImage from '../../../assets/projects/ilotusland/featured.webp';
import SaleAIImage from '../../../assets/projects/sale-ai/sale-featured.png';
import SimplamoImage from '../../../assets/projects/simplamo/featured.png';
import TeachingImage from '../../../assets/projects/teaching/featured.png';
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
					title: 'Đào tạo',
					desc: 'Biến một chủ đề khô thành trải nghiệm học cuốn hút, đạt hơn 1 triệu lượt xem và tiếp cận học sinh quy mô lớn.',
					image: TeachingImage,
					meta: 'Education',
					role: 'Educator',
					impact: '1M+ lượt xem',
					domain: 'Learning at scale',
					cta: 'Xem hành trình',
				},
			]
		: [
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
					title: 'Pascal to 1M learners',
					desc: 'Turned a dry technical subject into engaging lessons that reached more than one million views.',
					image: TeachingImage,
					meta: 'Education',
					role: 'Educator',
					impact: '1M+ views',
					domain: 'Learning at scale',
					cta: 'View journey',
				},
			];

	return {
		isVi,
		projects,
		projectCards: projects.map((project) => ({ ...project, imageSrc: project.image.src })),
		services: isVi
			? [
					'Thiết kế nhịp vận hành bằng OKRs, BSC/KPI, 4DX và dashboard.',
					'Biến sales, vận hành và dữ liệu thành AI agents chạy trong quy trình thật.',
					'Coaching lãnh đạo và product team ra quyết định nhanh hơn với AI.',
					'Đồng hành triển khai mục tiêu, nhịp họp, owner và chỉ số rõ ràng.',
				]
			: [
					'Design operating rhythms with OKRs, BSC/KPI, 4DX, and dashboards.',
					'Turn sales, operations, and data into AI agents inside real workflows.',
					'Coach leaders and product teams to decide faster with AI.',
					'Move from strategy to execution with clear goals, owners, and metrics.',
				],
		stats: [
			{ value: '1M+', label: isVi ? 'học sinh đã tiếp cận' : 'learners reached' },
			{ value: '1,000+', label: isVi ? 'trạm quan trắc' : 'monitoring stations' },
			{ value: '600+', label: isVi ? 'nhà máy FDI phục vụ' : 'FDI factories served' },
			{ value: '100+', label: isVi ? 'tổ chức dùng Simplamo' : 'organizations using Simplamo' },
		] satisfies Stat[],
		proofStats: isVi
			? [
					{ value: '1M+', label: 'học sinh' },
					{ value: '1,000+', label: 'trạm IoT' },
					{ value: '100+', label: 'B2B' },
					{ value: 'AI/SaaS', label: '2.000 đại lý' },
				]
			: [
					{ value: '1M+', label: 'learners reached' },
					{ value: '1,000+', label: 'IoT stations' },
					{ value: '100+', label: 'Simplamo organizations' },
					{ value: 'AI/SaaS', label: 'real products' },
				],
		focusSignals: ['AI Agents', 'SaaS', 'Industrial IoT', 'OKRs', 'BSC/KPI', 'Education', 'Product Architecture', 'Strategy Execution'],
		profileCard: {
			name: isVi ? 'Operator / Builder' : 'Operator / Builder',
			title: isVi ? 'David Tung Phan' : 'David Tung Phan',
			location: 'Ho Chi Minh City',
			email: 'thanhtung@simplamo.com',
			focus: isVi ? 'AI, sản phẩm và hệ thống vận hành cho đội ngũ tăng trưởng' : 'AI, product, and operating systems for growth teams',
			status: isVi ? 'Nhận trao đổi' : 'Open to advisory',
		},
	};
}
