import React from "react";

export default function CTA() {
  return (
    <section className="py-24 bg-gray-800 text-center" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para transformar seu negócio com soluções de software?
        </h2>
        <p className="text-gray-300 mb-8">
          Junte-se a centenas de empresas que já contam com a Hodle para 
          desenvolver soluções de software personalizadas e inovadoras.
        </p>
        <a
          href="#register"
          className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-md"
        >
          Fale com um especialista
        </a>
      </div>
    </section>
  );
}