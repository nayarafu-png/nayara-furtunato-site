import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Psicóloga Clínica
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-tight text-balance">
              Nayara Furtunato
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              CRP 04/77570
            </p>
            <p className="text-xl text-secondary-foreground leading-relaxed mb-8 text-pretty max-w-lg mx-auto md:mx-0">
              Escuta ética, sigilosa e acolhedora para crianças, adolescentes e adultos em atendimento online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="https://wa.me/5533998218393"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-accent transition-all hover:scale-105 text-center"
              >
                Agendar Consulta
              </Link>
              <Link
                href="#sobre"
                className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors text-center"
              >
                Saiba Mais
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] rounded-[3rem] overflow-hidden border-4 border-card shadow-2xl">
                <Image
                  src="/foto-nayara.jpg"
                  alt="Nayara Furtunato - Psicóloga Clínica"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </div>
      </div>
    </section>
  );
}
