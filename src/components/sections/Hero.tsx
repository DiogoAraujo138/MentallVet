import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-brand-navy"
    >
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-teal/20 blur-[120px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-brand-tiffany/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-tiffany text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-tiffany opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-tiffany"></span>
          </span>
          Do ecossistema Chordata Consultoria
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl mx-auto mb-6 leading-tight">
          Mais do que uma plataforma: somos um <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-tiffany to-brand-teal">movimento pela saúde mental</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          A unidade do Ecossistema Chordata dedicada exclusivamente à saúde mental e ao bem-estar de médicos-veterinários, estudantes e equipes do setor.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto bg-brand-tiffany hover:bg-brand-teal text-slate-900 font-semibold rounded-full px-8 h-14 text-lg">
            <a href="https://mentallvet.web.app/landing-page" target="_blank" rel="noopener noreferrer">
              Agendar Atendimento
            </a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-14 text-lg bg-transparent">
            <a href="#services">
              Conhecer Soluções Corporativas
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
