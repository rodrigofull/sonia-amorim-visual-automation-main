import { Instagram, MessageCircle, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span>Sonia</span>
              <span className="text-accent"> Amorim</span>
            </h3>
            <p className="text-muted-foreground">
              Fotografia Profissional & Automações Inteligentes
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/fotografia" className="hover:text-accent transition-colors">
                  Portfólio Fotográfico
                </a>
              </li>
              <li>
                <a href="/automacoes" className="hover:text-accent transition-colors">
                  Automações n8n
                </a>
              </li>
              <li>
                <a href="/servicos" className="hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/contato" className="hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors p-2 hover:scale-110 transform duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors p-2 hover:scale-110 transform duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors p-2 hover:scale-110 transform duration-300"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sonia Amorim. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
