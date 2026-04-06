import { HeartPulse, BrainCircuit, Activity } from "lucide-react";

const Problem = () => {
  return (
    <section id="problem" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            O Custo Invisível da Medicina Veterinária
          </h2>
          <p className="text-lg text-slate-600">
            Com mais de 1 milhão de profissionais e estudantes no Brasil, a medicina veterinária enfrenta uma crise silenciosa. A rotina exaustiva, a fadiga por compaixão e o estresse ocupacional não são apenas desafios individuais — são riscos para todo o negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-all hover:shadow-lg">
            <div className="w-16 h-16 rounded-full bg-brand-navy/5 flex items-center justify-center mb-6">
              <Activity className="w-8 h-8 text-brand-navy" />
            </div>
            <h3 className="text-5xl font-bold text-brand-navy mb-2">72%</h3>
            <p className="text-sm font-semibold text-brand-teal uppercase tracking-wider mb-3">Índice de Burnout</p>
            <p className="text-slate-600">
              Dos profissionais do setor são afetados pela Síndrome de Burnout, comprometendo a saúde e a qualidade técnica.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-all hover:shadow-lg">
            <div className="w-16 h-16 rounded-full bg-brand-tiffany/10 flex items-center justify-center mb-6">
              <HeartPulse className="w-8 h-8 text-brand-tiffany" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3 mt-4">Fadiga por Compaixão</h3>
            <p className="text-slate-600">
              O vínculo diário com a dor animal e o sofrimento dos tutores gera um esgotamento emocional severo nas equipes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-all hover:shadow-lg">
            <div className="w-16 h-16 rounded-full bg-brand-amber/10 flex items-center justify-center mb-6">
              <BrainCircuit className="w-8 h-8 text-brand-amber" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3 mt-4">Riscos Corporativos</h3>
            <p className="text-slate-600">
              O desgaste mental resulta em altos índices de turnover (rotatividade), absenteísmo e queda direta na satisfação dos clientes (NPS).
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="inline-block px-6 py-3 rounded-full bg-slate-100 text-brand-navy font-medium">
            Nossa missão é combater essas estatísticas através de suporte especializado e treinamentos de liderança.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
