import { Button } from "@/components/ui/button";
import { Camera, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--accent))_0%,_transparent_50%)] opacity-10"></div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-foreground"></span>
              <span className="text-accent"> </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Fotografia Profissional & Automações Inteligentes com n8n
            </p>

            {/* Imagem com moldura profissional */}
<div className="relative mt-12 w-full flex justify-center">
  {/* Moldura com luz animada */}
  <div className="relative p-[4px] rounded-2xl overflow-hidden shadow-xl">

    {/* Glow animado */}
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-500 animate-glow rounded-2xl opacity-70 blur"></div>

    {/* Fundo da moldura */}
    <div className="relative bg-white rounded-2xl overflow-hidden">
      <img
        src="https://i.imgur.com/slCXLMD.jpeg"
        alt="Foto de apresentação"
        className="w-[200px] max-w-full rounded-2xl object-cover"
      />
    </div>
  </div>
</div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/fotografia">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
                >
                  <Camera className="mr-2 group-hover:scale-110 transition-transform" />
                  Portfólio Fotográfico
                </Button>
              </Link>
              
              <Link to="/automacoes">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg group"
                >
                  <Workflow className="mr-2 group-hover:scale-110 transition-transform" />
                  Automações n8n
                </Button>
              </Link>
            </div>
            
            <div className="pt-8">
              <Link to="/contato">
                <Button 
                  variant="ghost" 
                  className="text-accent hover:text-accent-foreground hover:bg-accent/20"
                >
                  Solicitar Orçamento →
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Photography */}
            <div className="group cursor-pointer" onClick={() => window.location.href = '/fotografia'}>
              <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Camera className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Fotografia</h3>
                <p className="text-muted-foreground mb-6">
                  Ensaios profissionais, cobertura de eventos e trabalhos autorais que capturam momentos únicos com sensibilidade artística.
                </p>
                <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  Ver Portfólio →
                </Button>
              </div>
            </div>

            {/* Automation */}
            <div className="group cursor-pointer" onClick={() => window.location.href = '/automacoes'}>
              <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Workflow className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Automações n8n</h3>
                <p className="text-muted-foreground mb-6">
                  Fluxos automatizados personalizados, integrações de APIs e soluções inteligentes que otimizam seus processos de negócio.
                </p>
                <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  Ver Projetos →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
