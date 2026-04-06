import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Training = () => {
  return (
    <section id="training" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <span className="text-sm font-bold tracking-widest text-brand-teal uppercase mb-3 block">Capacitação</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Programas de Treinamento
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Acreditamos que líderes bem preparados formam clínicas mais saudáveis. Nossa estrutura de treinamentos é dividida em dois pilares principais, com foco na geração de resultados sustentáveis e bem-estar ocupacional.
            </p>

            <div className="p-8 bg-brand-navy text-white rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-tiffany/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
              <h3 className="text-2xl font-bold mb-4">Metodologia Exclusiva</h3>
              <p className="text-slate-300 mb-6">
                Todos os nossos programas são embasados nas mais recentes pesquisas de psicologia organizacional e adaptados diretamente à realidade intensa da rotina clínica veterinária.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-tiffany"></div>
                  <span>Práticas baseadas em evidências</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-tiffany"></div>
                  <span>Facilitadores especializados no setor</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-tiffany"></div>
                  <span>Exercícios imersivos de rotina real</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-12">
            {/* Lideranças */}
            <div>
              <div className="flex items-center gap-4 mb-6 pb-2 border-b border-slate-100">
                <div className="p-2 bg-brand-tiffany/20 text-brand-tiffany rounded-lg font-bold">01</div>
                <h3 className="text-2xl font-semibold text-brand-navy">Para Lideranças</h3>
              </div>
              <span className="text-sm font-medium text-slate-500 mb-4 block">Foco em Gestão Humanizada</span>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="lideranca-cuida" className="border-slate-100">
                  <AccordionTrigger className="text-lg font-medium text-brand-navy hover:text-brand-teal">
                    Liderança que Cuida (Workshop de 8h)
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base">
                    Um mergulho de 8 horas focado no aprimoramento da empatia, escuta qualificada e estratégias de comunicação assertiva para gestores lidando com equipes em exaustão.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ie-lideres" className="border-slate-100">
                  <AccordionTrigger className="text-lg font-medium text-brand-navy hover:text-brand-teal">
                    Inteligência Emocional para Líderes
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base">
                    Treinamento direcionado para gerenciar pessoas, mediar conflitos e tomar decisões equilibradas num ambiente estressante e sob forte pressão de tutores e rotina.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ambiente-seguro" className="border-slate-100">
                  <AccordionTrigger className="text-lg font-medium text-brand-navy hover:text-brand-teal">
                    Criando Ambientes Seguros
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base">
                    Psicologia organizacional aplicada. Ensina metodologias corporativas para gerar confiança estrutural, reduzindo a cultura punitiva e promovendo a segurança psicológica da equipe.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Equipes */}
            <div>
              <div className="flex items-center gap-4 mb-6 pb-2 border-b border-slate-100">
                <div className="p-2 bg-brand-teal/20 text-brand-teal rounded-lg font-bold">02</div>
                <h3 className="text-2xl font-semibold text-brand-navy">Para Equipes</h3>
              </div>
              <span className="text-sm font-medium text-slate-500 mb-4 block">Foco em Coesão e Engajamento</span>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="cuidar-quem-cuida" className="border-slate-100">
                  <AccordionTrigger className="text-lg font-medium text-brand-navy hover:text-brand-teal">
                    Cuidar de Quem Cuida (Workshop de 6h)
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base">
                    Direcionado a veterinários, auxiliares e recepcionistas. Foco no desenvolvimento de inteligência emocional para manter relacionamentos saudáveis com tutores e colegas de clínica.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="falar-sem-medo" className="border-slate-100">
                  <AccordionTrigger className="text-lg font-medium text-brand-navy hover:text-brand-teal">
                    Falar Sem Medo
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base">
                    Treinamento para a base da cultura corporativa: como se expressar abertamente, oferecer críticas construtivas e criar uma unidade de confiança em equipe.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="nossa-cultura" className="border-slate-100">
                  <AccordionTrigger className="text-lg font-medium text-brand-navy hover:text-brand-teal">
                    Nossa Cultura, Nossa Clínica
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base">
                    Programa de fortalecimento do sentimento de pertencimento e identidade coletiva. Reduz conflitos internos através do alinhamento do propósito da clínica ao propósito do colaborador.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
