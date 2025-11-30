import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Workflow, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const photographyServices = [
    "Ensaios profissionais",
    "Cobertura de eventos",
    "Fotografia de produtos",
    "Trabalhos autorais",
    "Edição e pós-produção",
  ];

  const automationServices = [
    "Criação de fluxos completos no n8n",
    "Integrações de APIs",
    "Bots automáticos",
    "Automação de vendas",
    "Assistentes digitais",
    "Integração com WhatsApp, Drive, Notion e mais",
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="text-accent">Serviços</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções profissionais em fotografia e automação para transformar suas ideias em realidade
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Photography Services */}
          <Card className="border-2 hover:border-accent transition-all duration-300 animate-fade-in">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Camera className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-3xl mb-2">Fotografia</CardTitle>
              <CardDescription className="text-base">
                Capturando momentos com arte e profissionalismo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {photographyServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contato" className="block">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Solicitar Atendimento
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Automation Services */}
          <Card className="border-2 hover:border-accent transition-all duration-300 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Workflow className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-3xl mb-2">Automações n8n</CardTitle>
              <CardDescription className="text-base">
                Inteligência e eficiência para seu negócio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {automationServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contato" className="block">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Solicitar Atendimento
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="bg-secondary rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato e vamos conversar sobre como posso ajudar a transformar suas ideias em realidade
            </p>
            <Link to="/contato">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                Falar com Sonia →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
