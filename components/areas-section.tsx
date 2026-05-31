const areas = [
  {
    title: "Ansiedade e Estresse",
    description: "Manejo de sintomas e desenvolvimento de estratégias de enfrentamento",
  },
  {
    title: "Depressão",
    description: "Acompanhamento para recuperação do bem-estar emocional",
  },
  {
    title: "Dificuldades na Infância",
    description: "Suporte para questões emocionais e comportamentais infantis",
  },
  {
    title: "Baixa Autoestima",
    description: "Trabalho de fortalecimento da autoimagem e autoconfiança",
  },
  {
    title: "Conflitos nos Relacionamentos",
    description: "Desenvolvimento de habilidades para relações mais saudáveis",
  },
  {
    title: "Luto",
    description: "Acolhimento e suporte no processo de elaboração da perda",
  },
  {
    title: "Autoconhecimento",
    description: "Exploração da identidade e dos padrões de comportamento",
  },
  {
    title: "Desenvolvimento Pessoal",
    description: "Acompanhamento para crescimento e realização de objetivos",
  },
];

export function AreasSection() {
  return (
    <section id="areas" className="py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
            Áreas de Atuação
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            Demandas Atendidas
          </h2>
          <p className="text-secondary-foreground max-w-2xl mx-auto leading-relaxed">
            Atuo no acompanhamento de diversas questões emocionais e comportamentais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-2 h-2 bg-primary rounded-full mb-4 group-hover:scale-150 transition-transform" />
              <h3 className="font-medium text-foreground mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
