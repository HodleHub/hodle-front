import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Consultoria Inicial",
      description:
        "Realizamos uma análise detalhada das necessidades do seu negócio para entender seus desafios e objetivos tecnológicos.",
    },
    {
      number: 2,
      title: "Planejamento e Design",
      description:
        "Elaboramos um plano estratégico e arquitetura de software personalizada para atender às suas necessidades específicas.",
    },
    {
      number: 3,
      title: "Desenvolvimento",
      description:
        "Nossa equipe implementa a solução utilizando as tecnologias mais avançadas e metodologias ágeis de desenvolvimento.",
    },
    {
      number: 4,
      title: "Implementação e Suporte",
      description:
        "Realizamos a implementação da solução em seu ambiente e oferecemos suporte contínuo para garantir o funcionamento ideal.",
    },
  ];

  return (
    <section className="py-24" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Como trabalhamos</h2>
          <p className="text-gray-300 mt-4">
            Conheça nosso processo de desenvolvimento de soluções de software
            personalizadas para o seu negócio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="bg-orange-500 text-black w-12 h-12 flex items-center justify-center rounded-full mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}