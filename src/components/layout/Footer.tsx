const Footer = () => {
  return (
    <footer className="bg-brand-navy pt-16 pb-8 border-t border-white/10 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img src="/logo.png" alt="MentAll.Vet Logo" className="h-10 mb-6 brightness-0 invert" />
            <p className="text-slate-400 max-w-sm mb-6">
              A MentALL.Vet é a unidade de saúde mental do Ecossistema Chordata, combatendo o burnout e fortalecendo líderes no setor de medicina veterinária.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#problem" className="text-slate-400 hover:text-brand-tiffany transition-colors">O Problema</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-brand-tiffany transition-colors">Serviços</a></li>
              <li><a href="#training" className="text-slate-400 hover:text-brand-tiffany transition-colors">Treinamentos</a></li>
              <li><a href="#metrics" className="text-slate-400 hover:text-brand-tiffany transition-colors">Resultados</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="text-slate-400">contato@mentall.vet</li>
              <li>
                <a href="https://mentallvet.web.app" target="_blank" className="text-brand-tiffany hover:underline">
                  Agendar Consulta
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MentAll.Vet. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Uma iniciativa Chordata Consultoria</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
