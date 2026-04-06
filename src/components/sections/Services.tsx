import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Users, FileText, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Psicoterapia Individual",
      description: "Atendimento online ou presencial com profissionais que compreendem a rotina e os desafios emocionais da medicina veterinária.",
      icon: UserPlus,
      color: "text-brand-tiffany",
      bgColor: "bg-brand-tiffany/10"
    },
    {
      title: "Planos Corporativos",
      description: "Programas de psicoterapia voltados para clínicas e hospitais, cobrindo e oferecendo suporte a equipes de até 20 colaboradores mensais ou pacotes para grandes hospitais.",
      icon: Users,
      color: "text-brand-teal",
      bgColor: "bg-brand-teal/10"
    },
    {
      title: "Programa EAI Vet",
      description: "Escuta Ativa Individualizada: Um suporte emocional estruturado que inclui a geração de relatórios e insights estratégicos para a gestão de RH das empresas.",
      icon: FileText,
      color: "text-brand-amber",
      bgColor: "bg-brand-amber/10"
    },
    {
      title: "Consultoria de RH Especializada",
      description: "Projetos customizáveis de gestão de pessoas com foco direto em saúde mental, pertencimento das equipes e bem-estar organizacional dentro do hospital/clínica.",
      icon: CheckCircle2,
      color: "text-brand-navy",
      bgColor: "bg-brand-navy/10"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-teal uppercase mb-3 block">Nossas Soluções</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            Atendimento e Suporte Psicológico
          </h2>
          <p className="text-lg text-slate-600">
            A MentALL.Vet oferece diferentes modalidades de suporte consultivo e clínico para apoiar tanto a jornada do profissional autônomo quanto a rotina da corporação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${service.bgColor}`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <CardTitle className="text-xl md:text-2xl text-brand-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
