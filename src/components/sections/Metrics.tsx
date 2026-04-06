import { ArrowDownRight, ArrowUpRight, CheckCircle } from "lucide-react";

const Metrics = () => {
  return (
    <section id="metrics" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Decoração bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-tiffany/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Ecosystem / Parcerias */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Apoiado por um Ecossistema Sólido
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              A MentALL.Vet não atua de forma isolada. Integramos o cuidado humano aos maiores players de gestão veterinária para garantir que a transformação seja estrutural e sustentável.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <CheckCircle className="w-6 h-6 text-brand-tiffany shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Sinergia com Chordata Consultoria</h4>
                  <p className="text-slate-400">Enquanto a Chordata estrutura seus processos e estratégias financeiras, a MentALL.Vet cuida do fator humano de quem opera e viabiliza a estratégia na linha de frente.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <CheckCircle className="w-6 h-6 text-brand-tiffany shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Parceria Oficial Vet Family Brasil</h4>
                  <p className="text-slate-400">Integrados à maior comunidade veterinária do país, oferecendo condições especiais para os membros em programas corporativos e psicoterapia.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div>
            <div className="mb-10 text-center lg:text-left">
              <span className="text-brand-tiffany font-bold tracking-widest uppercase mb-2 block">O Impacto do Cuidado</span>
              <h3 className="text-3xl font-semibold">Geração de Valor Mensurável</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col justify-center shadow-lg">
                <div className="flex items-center gap-2 text-brand-tiffany mb-2">
                  <ArrowDownRight className="w-6 h-6" />
                  <span className="text-4xl font-bold">60%</span>
                </div>
                <h4 className="text-lg font-medium text-white mb-1">Redução de Turnover</h4>
                <p className="text-sm text-slate-400">Queda no número de desligamentos motivados por exaustão.</p>
              </div>

              <div className="p-8 rounded-2xl border border-brand-tiffany/30 bg-brand-tiffany/10 flex flex-col justify-center shadow-lg">
                <div className="flex items-center gap-2 text-brand-tiffany mb-2">
                  <ArrowDownRight className="w-6 h-6" />
                  <span className="text-4xl font-bold">45%</span>
                </div>
                <h4 className="text-lg font-medium text-white mb-1">Queda de Absenteísmo</h4>
                <p className="text-sm text-slate-400">Redução em faltas e atestados motivados por causas emocionais.</p>
              </div>

              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col justify-center shadow-lg sm:col-span-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div>
                  <div className="flex items-center gap-2 text-brand-amber mb-2">
                    <ArrowUpRight className="w-6 h-6" />
                    <span className="text-4xl font-bold">+ 40 pts</span>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-1">Aumento no NPS Interno</h4>
                </div>
                <p className="text-sm text-slate-400 sm:w-1/2 mt-4 sm:mt-0 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
                  Melhora massiva na avaliação do clima organizacional na clínica/hospital como um bom lugar para se trabalhar.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
