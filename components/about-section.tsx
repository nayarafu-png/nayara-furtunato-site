import { GraduationCap, Heart, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Sobre Mim
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground text-balance">
              Conheça minha trajetória
            </h2>
          </div>

          <div className="space-y-6 text-secondary-foreground leading-relaxed">
            <p>
              Sou psicóloga formada pela Faculdade Anhanguera de Governador Valadares/MG, 
              com pós-graduação em <strong className="text-foreground">Psicologia Infantil</strong> e 
              MBA em <strong className="text-foreground">Gestão de Recursos Humanos e Departamento Pessoal</strong> pela 
              Universidade Pitágoras Unopar Anhanguera.
            </p>
            <p>
              Minha prática clínica é sustentada por diversas formações de extensão que 
              ampliam minha atuação e fortalecem a condução do processo terapêutico. 
              Minha abordagem une ética, escuta ativa e intencionalidade para oferecer 
              um suporte terapêutico personalizado.
            </p>
            <p>
              Longe de modelos engessados, adapto o processo à realidade de cada pessoa, 
              priorizando resultados reais e o respeito à sua subjetividade.
            </p>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-3 gap-6 mt-16">
            <div className="text-center p-6 rounded-2xl bg-background border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="font-medium text-foreground mb-2">Formação Sólida</h3>
              <p className="text-sm text-muted-foreground">
                Especializações e formações continuadas
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={24} />
              </div>
              <h3 className="font-medium text-foreground mb-2">Escuta Acolhedora</h3>
              <p className="text-sm text-muted-foreground">
                Ambiente seguro e sem julgamentos
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-primary" size={24} />
              </div>
              <h3 className="font-medium text-foreground mb-2">Abordagem Flexível</h3>
              <p className="text-sm text-muted-foreground">
                Processo adaptado a cada pessoa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
