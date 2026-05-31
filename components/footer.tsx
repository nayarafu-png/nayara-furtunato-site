import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./icons";

export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl italic mb-1">Nayara Furtunato</p>
            <p className="text-sm text-background/60">
              Psicóloga Clínica | CRP 04/77570
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://www.instagram.com/nfurtunato/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </Link>
            <Link
              href="https://www.facebook.com/nayara.furtunatomtavares/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon size={20} />
            </Link>
            <Link
              href="https://linktr.ee/nfurtunato"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background transition-colors"
              aria-label="Linktree"
            >
              <ExternalLink size={20} />
            </Link>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Nayara Furtunato. Todos os direitos reservados.
          </p>
          <p className="text-xs text-background/40 mt-2">
            Atendimento Online
          </p>
        </div>
      </div>
    </footer>
  );
}
