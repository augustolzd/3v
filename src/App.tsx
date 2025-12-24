import {
	AlertCircle,
	ArrowRight,
	CheckCircle2,
	ChevronDown,
	Database,
	Download,
	Globe,
	Info,
	Languages,
	Linkedin,
	Moon,
	Network,
	Share2,
	Sun,
	Target,
	TrendingUp,
	User,
	Users,
	Zap,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import "./App.css";
import { useLanguage } from "./contexts/LanguageContext";
import { useTheme } from "./contexts/ThemeContext";

const App = () => {
	const { t, language, toggleLanguage } = useLanguage();
	const { theme, toggleTheme } = useTheme();
	const [showFramework, setShowFramework] = useState(false);

	const nodes = {
		vias: {
			core: "Conectividad Global",
			resources: t.content.viasResources,
			kpis: t.content.viasKpis,
			risks: t.content.viasRisks,
		},
		valor: {
			core: "Monetización",
			resources: t.content.valorResources,
			kpis: t.content.valorKpis,
			risks: t.content.valorRisks,
		},
		ventaja: {
			core: "Experiencia CX",
			resources: t.content.ventajaResources,
			kpis: t.content.ventajaKpis,
			risks: t.content.ventajaRisks,
		},
	};

	const PyramidStep = ({
		color,
		title,
		label,
		subtitle,
	}: {
		color: { border: string; text: string };
		title: string;
		label: string;
		subtitle: string;
	}) => (
		<div
			className={`relative flex items-center justify-center w-full h-24 mb-1 border-b-4 ${color.border} bg-secondary group transition-all`}
		>
			<div className="text-center">
				<span
					className={`text-[10px] font-black uppercase tracking-widest ${color.text} opacity-60`}
				>
					{label}
				</span>
				<h3 className="text-2xl font-black text-primary leading-tight uppercase tracking-tighter">
					{title}
				</h3>
				<p className="text-[10px] text-tertiary font-medium italic">
					{subtitle}
				</p>
			</div>
		</div>
	);

	const CanvasBlock = ({
		icon: Icon,
		title,
		value,
		color,
	}: {
		icon: React.ElementType;
		title: string;
		value: string;
		color: { text: string };
	}) => (
		<div className="flex-1 min-w-[200px] p-4 bg-secondary border border-default rounded-xl shadow-sm">
			<div className="flex items-center gap-2 mb-3">
				<Icon size={14} className={color.text} />
				<span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">
					{title}
				</span>
			</div>
			<div className="w-full text-sm font-medium text-primary min-h-[60px] leading-relaxed">
				{value}
			</div>
		</div>
	);

	return (
		<div className="min-h-screen bg-primary p-4 md:p-10 font-sans text-primary">
			<div className="max-w-6xl mx-auto border border-default p-6 md:p-10 bg-secondary shadow-xl rounded-[2.5rem] relative overflow-hidden">
				{/* Header Section */}
				<header className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
					<div className="space-y-1">
						<div className="flex items-center gap-2 text-blue-600 mb-1">
							<Globe size={18} />
							<span className="text-[10px] font-black uppercase tracking-[0.3em]">
								Public Strategy Framework
							</span>
						</div>
						<h1 className="text-4xl font-black tracking-tighter text-primary leading-none uppercase">
							Lienzo Estratégico <span className="text-blue-600">3V</span>
						</h1>
						<p className="text-secondary font-medium text-base">
							Marco de alineación universal para infraestructuras digitales
							escalables.
						</p>
					</div>

					<div className="flex flex-col items-end gap-2">
						<div className="flex items-center gap-3">
							<div className="flex items-center gap-2 bg-tertiary px-4 py-2 rounded-full border border-default shadow-sm">
								<User size={14} className="text-blue-600" />
								<span className="text-xs font-bold text-secondary tracking-tight">
									Autoría de Augusto Lozada
								</span>
							</div>
							<a
								href="https://www.linkedin.com/in/augustolzd/"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 bg-secondary border border-default rounded-full text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all shadow-sm"
								title="LinkedIn Profile"
							>
								<Linkedin size={16} />
							</a>
						</div>
						<button
							type="button"
							onClick={() => window.print()}
							className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-blue-600 transition-all shadow-md active:scale-95"
						>
							<Download size={14} /> Descargar PDF
						</button>
						{/* Language Toggle */}
						<button
							type="button"
							onClick={toggleLanguage}
							className="flex items-center gap-2 bg-tertiary text-primary px-4 py-2 rounded-full text-xs font-bold hover:bg-tertiary transition-all shadow-sm active:scale-95"
						>
							<Languages size={14} /> {language === 'en' ? 'English' : 'Español'}
						</button>
						{/* Theme Toggle */}
						<button
							type="button"
							onClick={toggleTheme}
							className="flex items-center gap-2 bg-tertiary text-primary px-4 py-2 rounded-full text-xs font-bold hover:bg-tertiary transition-all shadow-sm active:scale-95"
						>
							{theme === 'light' ? <Sun size={14} /> : <Moon size={14} />} {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
						</button>
					</div>
				</header>

				{/* Framework Explanation Section */}
				<div className="mb-8">
					<button
						type="button"
						onClick={() => setShowFramework(!showFramework)}
						className="w-full flex items-center justify-between p-4 bg-secondary border border-default rounded-xl hover:bg-tertiary transition-all"
					>
						<div className="flex items-center gap-3">
							<Info className="text-blue-600" size={20} />
							<span className="text-sm font-bold text-primary">{t.framework.title}</span>
						</div>
						<ChevronDown
							size={20}
							className={`text-secondary transition-transform ${showFramework ? 'rotate-180' : ''}`}
						/>
					</button>

					{showFramework && (
						<div className="mt-4 p-6 bg-secondary border border-default rounded-xl space-y-6">
							<p className="text-sm text-primary leading-relaxed">{t.framework.intro}</p>

							<div className="space-y-3">
								<h3 className="text-base font-bold text-red-600 flex items-center gap-2">
									<Network size={18} />
									{t.framework.viasTitle}
								</h3>
								<p className="text-sm text-primary italic">{t.framework.viasDesc}</p>
								<ul className="space-y-2 ml-4">
									<li className="text-sm text-secondary flex gap-2"><span className="text-red-600">•</span><span>{t.framework.viasPoint1}</span></li>
									<li className="text-sm text-secondary flex gap-2"><span className="text-red-600">•</span><span>{t.framework.viasPoint2}</span></li>
									<li className="text-sm text-secondary flex gap-2"><span className="text-red-600">•</span><span className="font-semibold italic">{t.framework.viasPoint3}</span></li>
								</ul>
							</div>

							<div className="space-y-3">
								<h3 className="text-base font-bold text-green-600 flex items-center gap-2">
									<TrendingUp size={18} />
									{t.framework.valorTitle}
								</h3>
								<p className="text-sm text-primary italic">{t.framework.valorDesc}</p>
								<ul className="space-y-2 ml-4">
									<li className="text-sm text-secondary flex gap-2"><span className="text-green-600">•</span><span>{t.framework.valorPoint1}</span></li>
									<li className="text-sm text-secondary flex gap-2"><span className="text-green-600">•</span><span>{t.framework.valorPoint2}</span></li>
									<li className="text-sm text-secondary flex gap-2"><span className="text-green-600">•</span><span className="font-semibold italic">{t.framework.valorPoint3}</span></li>
								</ul>
							</div>

							<div className="space-y-3">
								<h3 className="text-base font-bold text-blue-600 flex items-center gap-2">
									<Zap size={18} />
									{t.framework.ventajaTitle}
								</h3>
								<p className="text-sm text-primary italic">{t.framework.ventajaDesc}</p>
								<ul className="space-y-2 ml-4">
									<li className="text-sm text-secondary flex gap-2"><span className="text-blue-600">•</span><span>{t.framework.ventajaPoint1}</span></li>
									<li className="text-sm text-secondary flex gap-2"><span className="text-blue-600">•</span><span>{t.framework.ventajaPoint2}</span></li>
									<li className="text-sm text-secondary flex gap-2"><span className="text-blue-600">•</span><span className="font-semibold italic">{t.framework.ventajaPoint3}</span></li>
								</ul>
							</div>
						</div>
					)}
				</div>


				{/* Instructions / How to Use */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
					<div className="bg-blue-50/50 p-4 rounded-2xl flex gap-3 items-start border border-blue-100">
						<Info className="text-blue-500 shrink-0 mt-1" size={16} />
						<div>
							<p className="text-[11px] font-bold text-blue-800 uppercase mb-1">
								1. Definir la Base (Vías)
							</p>
							<p className="text-[10px] text-blue-600 leading-tight">
								Infraestructura y canales que permiten que la operación exista.
							</p>
						</div>
					</div>
					<div className="bg-green-50/50 p-4 rounded-2xl flex gap-3 items-start border border-green-100">
						<TrendingUp className="text-green-500 shrink-0 mt-1" size={16} />
						<div>
							<p className="text-[11px] font-bold text-green-800 uppercase mb-1">
								2. Orquestar el Valor
							</p>
							<p className="text-[10px] text-green-600 leading-tight">
								Lógica de monetización y rentabilidad del flujo de datos.
							</p>
						</div>
					</div>
					<div className="bg-red-50/50 p-4 rounded-2xl flex gap-3 items-start border border-red-100">
						<Zap className="text-red-500 shrink-0 mt-1" size={16} />
						<div>
							<p className="text-[11px] font-bold text-red-800 uppercase mb-1">
								3. Escalar la Ventaja
							</p>
							<p className="text-[10px] text-red-600 leading-tight">
								Propuesta de valor final e integraciones inteligentes con IA.
							</p>
						</div>
					</div>
				</div>

				<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* Visual Pyramid */}
					<div className="lg:col-span-4 flex flex-col justify-end">
						<div className="space-y-1">
							<PyramidStep
								color={{ border: "border-blue-500", text: "text-blue-500" }}
								label={t.pyramid.layer03Label}
								title={t.pyramid.layer03Title}
								subtitle={t.pyramid.layer03Subtitle}
							/>
							<PyramidStep
								color={{ border: "border-green-500", text: "text-green-500" }}
								label={t.pyramid.layer02Label}
								title={t.pyramid.layer02Title}
								subtitle={t.pyramid.layer02Subtitle}
							/>
							<PyramidStep
								color={{ border: "border-red-500", text: "text-red-500" }}
								label={t.pyramid.layer01Label}
								title={t.pyramid.layer01Title}
								subtitle={t.pyramid.layer01Subtitle}
							/>
						</div>
						<div className="mt-8 flex justify-end items-center px-2">
							<div className="flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-widest">
								<Share2 size={12} /> Public Strategy Framework
							</div>
						</div>
					</div>

					{/* Canvas Grid */}
					<div className="lg:col-span-8 space-y-8">
						{/* Vias Section */}
						<div className="space-y-3">
							<div className="flex items-center gap-2 border-b-2 border-red-500 pb-2 w-fit">
								<Network size={16} className="text-red-500" />
								<h4 className="text-sm font-black uppercase tracking-widest text-red-500">
									INFRAESTRUCTURA (VÍAS)
								</h4>
							</div>
							<div className="flex flex-wrap gap-4">
								<CanvasBlock
									title={t.sections.viasResources}
									value={nodes.vias.resources}
									icon={Database}
									color={{ text: "text-red-400" }}
								/>
								<CanvasBlock
									title={t.sections.viasKpis}
									value={nodes.vias.kpis}
									icon={Target}
									color={{ text: "text-red-400" }}
								/>
								<CanvasBlock
									title={t.sections.viasRisks}
									value={nodes.vias.risks}
									icon={AlertCircle}
									color={{ text: "text-red-400" }}
								/>
							</div>
						</div>

						{/* Valor Section */}
						<div className="space-y-3">
							<div className="flex items-center gap-2 border-b-2 border-green-500 pb-2 w-fit">
								<TrendingUp size={16} className="text-green-500" />
								<h4 className="text-sm font-black uppercase tracking-widest text-green-500">
									NEGOCIO (VALOR)
								</h4>
							</div>
							<div className="flex flex-wrap gap-4">
								<CanvasBlock
									title={t.sections.valorResources}
									value={nodes.valor.resources}
									icon={Users}
									color={{ text: "text-green-400" }}
								/>
								<CanvasBlock
									title={t.sections.valorKpis}
									value={nodes.valor.kpis}
									icon={Target}
									color={{ text: "text-green-400" }}
								/>
								<CanvasBlock
									title={t.sections.valorRisks}
									value={nodes.valor.risks}
									icon={CheckCircle2}
									color={{ text: "text-green-400" }}
								/>
							</div>
						</div>

						{/* Ventaja Section */}
						<div className="space-y-3">
							<div className="flex items-center gap-2 border-b-2 border-blue-500 pb-2 w-fit">
								<Zap size={16} className="text-blue-500" />
								<h4 className="text-sm font-black uppercase tracking-widest text-blue-500">
									INNOVACIÓN (VENTAJA)
								</h4>
							</div>
							<div className="flex flex-wrap gap-4">
								<CanvasBlock
									title={t.sections.ventajaResources}
									value={nodes.ventaja.resources}
									icon={Zap}
									color={{ text: "text-blue-400" }}
								/>
								<CanvasBlock
									title={t.sections.ventajaKpis}
									value={nodes.ventaja.kpis}
									icon={Target}
									color={{ text: "text-blue-400" }}
								/>
								<CanvasBlock
									title={t.sections.ventajaRisks}
									value={nodes.ventaja.risks}
									icon={ArrowRight}
									color={{ text: "text-blue-400" }}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Footer */}
				<footer className="mt-16 pt-8 border-t border-default flex flex-col md:flex-row justify-between items-center text-tertiary">
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white font-black text-xs">
							3V
						</div>
						<p className="text-[9px] font-bold tracking-[0.2em] uppercase">
							Creative Commons BY-NC 4.0 <span className="mx-2">|</span> 2024
						</p>
					</div>
					<div className="text-[10px] font-black uppercase tracking-[0.2em] mt-4 md:mt-0 italic">
						Metodología Original de{" "}
						<a
							href="https://www.linkedin.com/in/augustolzd/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-blue-600 transition-colors"
						>
							Augusto Lozada
						</a>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default App;
