import {
	AlertCircle,
	ArrowRight,
	CheckCircle2,
	Database,
	Download,
	Globe,
	Info,
	Linkedin,
	Network,
	Share2,
	Target,
	TrendingUp,
	User,
	Users,
	Zap,
} from "lucide-react";
import type React from "react";
import "./App.css";

const App = () => {
	const nodes = {
		vias: {
			core: "Conectividad Global",
			resources: "Proveedores, Nube, APIs",
			kpis: "Uptime, % Entrega",
			risks: "Regulaciones",
		},
		valor: {
			core: "Monetización",
			resources: "Lógica, LCR, Facturación",
			kpis: "Margen, ROI",
			risks: "Costos variables",
		},
		ventaja: {
			core: "Experiencia CX",
			resources: "IA, Omnicanalidad, UX",
			kpis: "CSAT, Retención",
			risks: "Adopción",
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
			className={`relative flex items-center justify-center w-full h-24 mb-1 border-b-4 ${color.border} bg-white group transition-all`}
		>
			<div className="text-center">
				<span
					className={`text-[10px] font-black uppercase tracking-widest ${color.text} opacity-60`}
				>
					{label}
				</span>
				<h3 className="text-2xl font-black text-slate-800 leading-tight uppercase tracking-tighter">
					{title}
				</h3>
				<p className="text-[10px] text-slate-400 font-medium italic">
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
		<div className="flex-1 min-w-[200px] p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
			<div className="flex items-center gap-2 mb-3">
				<Icon size={14} className={color.text} />
				<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
					{title}
				</span>
			</div>
			<div className="w-full text-sm font-medium text-slate-700 min-h-[60px] leading-relaxed">
				{value}
			</div>
		</div>
	);

	return (
		<div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10 font-sans text-slate-900">
			<div className="max-w-6xl mx-auto border border-slate-200 p-6 md:p-10 bg-white shadow-xl rounded-[2.5rem] relative overflow-hidden">
				{/* Header Section */}
				<header className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
					<div className="space-y-1">
						<div className="flex items-center gap-2 text-blue-600 mb-1">
							<Globe size={18} />
							<span className="text-[10px] font-black uppercase tracking-[0.3em]">
								Public Strategy Framework
							</span>
						</div>
						<h1 className="text-4xl font-black tracking-tighter text-slate-900 leading-none uppercase">
							Lienzo Estratégico <span className="text-blue-600">3V</span>
						</h1>
						<p className="text-slate-500 font-medium text-base">
							Marco de alineación universal para infraestructuras digitales
							escalables.
						</p>
					</div>

					<div className="flex flex-col items-end gap-2">
						<div className="flex items-center gap-3">
							<div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shadow-sm">
								<User size={14} className="text-blue-600" />
								<span className="text-xs font-bold text-slate-600 tracking-tight">
									Autoría de Augusto Lozada
								</span>
							</div>
							<a
								href="https://www.linkedin.com/in/augustolzd/"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 bg-white border border-slate-200 rounded-full text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all shadow-sm"
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
					</div>
				</header>

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
								label="CAPA 03"
								title="VENTAJA"
								subtitle="Diferenciación & Innovación"
							/>
							<PyramidStep
								color={{ border: "border-green-500", text: "text-green-500" }}
								label="CAPA 02"
								title="VALOR"
								subtitle="Lógica & Rentabilidad"
							/>
							<PyramidStep
								color={{ border: "border-red-500", text: "text-red-500" }}
								label="CAPA 01"
								title="VÍAS"
								subtitle="Infraestructura & Canales"
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
									title="Recursos Técnicos"
									value={nodes.vias.resources}
									icon={Database}
									color={{ text: "text-red-400" }}
								/>
								<CanvasBlock
									title="KPIs Operativos"
									value={nodes.vias.kpis}
									icon={Target}
									color={{ text: "text-red-400" }}
								/>
								<CanvasBlock
									title="Barreras"
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
									title="Modelos de Valor"
									value={nodes.valor.resources}
									icon={Users}
									color={{ text: "text-green-400" }}
								/>
								<CanvasBlock
									title="Métricas Económicas"
									value={nodes.valor.kpis}
									icon={Target}
									color={{ text: "text-green-400" }}
								/>
								<CanvasBlock
									title="Mitigación"
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
									title="Integraciones Inteligentes"
									value={nodes.ventaja.resources}
									icon={Zap}
									color={{ text: "text-blue-400" }}
								/>
								<CanvasBlock
									title="Impacto en Usuario"
									value={nodes.ventaja.kpis}
									icon={Target}
									color={{ text: "text-blue-400" }}
								/>
								<CanvasBlock
									title="Escalabilidad"
									value={nodes.ventaja.risks}
									icon={ArrowRight}
									color={{ text: "text-blue-400" }}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Footer */}
				<footer className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-slate-400">
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
