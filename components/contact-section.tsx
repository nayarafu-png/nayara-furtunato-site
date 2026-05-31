import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";

const socialLinks = [
  {
    href: "https://wa.me/5533998218393",
    icon: MessageCircle,
    label: "WhatsApp",
    color: "hover:bg-green-600",
  },
  {
    href: "https://www.instagram.com/nfurtunato/",
    icon: Instagram,
    label: "Instagram",
    color: "hover:bg-pink-600",
  },
  {
    href: "https://www.facebook.com/nayara.furtunatomtavares/",
    icon: Facebook,
    label: "Facebook",
    color: "hover:bg-blue-600",
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Contato
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
              Vamos conversar?
            </h2>
            <p className="text-secondary-foreground leading-relaxed">
              Entre em contato para agendar sua consulta ou tirar dúvidas.
              Estou aqui para ajudar.
            </p>
          </div>

          {/* Main CTA */}
          <div className="bg-primary rounded-3xl p-8 lg:p-12 text-center mb-12">
            <h3 className="font-serif text-2xl lg:text-3xl font-medium text-primary-foreground mb-4">
              Pronta para começar sua jornada?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
              A mudança é possível quando há espaço para ser ouvido, compreendido e acolhido.
            </p>
            <Link
              href="https://wa.me/5533998218393"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-card text-foreground font-medium rounded-full hover:bg-background transition-colors"
            >
              <MessageCircle size={20} />
              Agendar pelo WhatsApp
            </Link>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Link
              href="tel:5533998218393"
              className="flex items-center gap-4 p-5 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefone</p>
                <p className="font-medium text-foreground">(33) 99821-8393</p>
              </div>
            </Link>
            <Link
              href="mailto:nayarafu@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">E-mail</p>
                <p className="font-medium text-foreground">nayarafu@gmail.com</p>
              </div>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-10">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-foreground text-background transition-colors ${social.color}`}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
