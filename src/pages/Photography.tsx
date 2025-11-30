import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface Photo {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  created_at: string;
}

const Photography = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    try {
      const { data, error } = await supabase
        .from("photos")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPhotos(data || []);
    } catch (error) {
      console.error("Error loading photos:", error);
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
            Portfólio <span className="text-accent">Fotográfico</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Momentos capturados com sensibilidade artística e técnica profissional
          </p>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Loading skeletons
            Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))
          ) : photos.length === 0 ? (
            // Empty state
            <div className="col-span-full text-center py-20">
              <p className="text-muted-foreground text-lg">
                Nenhuma foto disponível no momento. Em breve novos trabalhos serão adicionados.
              </p>
            </div>
          ) : (
            // Photos
            photos.map((photo, index) => (
              <Card 
                key={photo.id} 
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={photo.image_url}
                    alt={photo.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-accent transition-colors">
                    {photo.title}
                  </h3>
                  {photo.description && (
                    <p className="text-muted-foreground line-clamp-2">
                      {photo.description}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">
                    {new Date(photo.created_at).toLocaleDateString('pt-BR')}
                  </p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Photography;
