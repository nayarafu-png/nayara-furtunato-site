import { CheckCircle2, Monitor, Users, Shield } from "lucide-react";

const objectives = [
  "Fortalecimento da autoestima",
  "Estímulo ao amadurecimento emocional",
  "Reorganização interna diante de conflitos e desafios",
  "Promoção de relações mais saudáveis",
  "Desenvolvimento de habilidades emocionais e comportamentais",
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Atuação Clínica
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            Como posso ajudar
          </h2>
          <p className="text-secondary-foreground max-w-2xl mx-auto leading-relaxed">
            Realizo atendimentos online para crianças, adolescentes e adultos, 
            proporcionando um espaço seguro, sigiloso e acolhedor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <div className="space-y-6">
            <div className="flex gap-4 p-5 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Monitor className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Atendimento Online</h3>
                <p className="text-sm text-muted-foreground">
                  Sessões por videochamada, com todo o conforto e privacidade do seu espaço.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Todas as Idades</h3>
                <p className="text-sm text-muted-foreground">
                  Atendimento especializado para crianças, adolescentes e adultos.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Sigilo e Ética</h3>
                <p className="text-sm text-muted-foreground">
                  Ambiente seguro com total confidencialidade e respeito.
                </p>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="bg-primary rounded-3xl p-8 lg:p-10 text-primary-foreground">
            <h3 className="font-serif text-2xl font-medium mb-6">
              Objetivos Terapêuticos
            </h3>
            <ul className="space-y-4">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="shrink-0 mt-0.5" size={20} />
                  <span className="leading-relaxed">{objective}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-primary-foreground/80 text-sm leading-relaxed">
              Conduzo cada processo com responsabilidade, sensibilidade e respeito ao ritmo individual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
