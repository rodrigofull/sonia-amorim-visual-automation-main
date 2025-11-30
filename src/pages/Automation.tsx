import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface Automation {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  tools: string[] | null;
  created_at: string;
}

const Automation = () => {
  const [automations, setAutomations] = useState<Automation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAutomations();
  }, []);

  const loadAutomations = async () => {
    try {
      const { data, error } = await supabase
        .from("automations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setAutomations(data || []);
    } catch (error) {
      console.error("Error loading automations:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Automações <span className="text-accent">n8n</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fluxos automatizados e integrações inteligentes que transformam processos
          </p>
        </div>

        {/* Automations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {loading ? (
            // Loading skeletons
            Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-80 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : automations.length === 0 ? (
            // Empty state
            <div className="col-span-full text-center py-20">
              <p className="text-muted-foreground text-lg">
                Nenhuma automação disponível no momento. Em breve novos projetos serão adicionados.
              </p>
            </div>
          ) : (
            // Automations
            automations.map((automation, index) => (
              <Card 
                key={automation.id} 
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={automation.image_url}
                    alt={automation.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <CardContent className="p-6 -mt-24 relative z-10">
                  <div className="bg-card/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <h3 className="text-2xl font-bold mb-3 text-card-foreground group-hover:text-accent transition-colors">
                      {automation.title}
                    </h3>
                    {automation.description && (
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {automation.description}
                      </p>
                    )}
                    {automation.tools && automation.tools.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-accent">Ferramentas integradas:</p>
                        <div className="flex flex-wrap gap-2">
                          {automation.tools.map((tool, idx) => (
                            <Badge 
                              key={idx} 
                              variant="secondary"
                              className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground mt-4">
                      {new Date(automation.created_at).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Automation;
