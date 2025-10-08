import React from "react";

export default function Hero() {
  return (
    <section className="py-24 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Revolucione seus pagamentos com Bitcoin e Depix
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          Hodle é o seu gateway de pagamentos focado em Bitcoin, oferecendo
          Depix - um ativo líquido com valor 1:1 para o Real Brasileiro,
          descentralizando o sistema PIX.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-md"
          >
            Comece agora
          </a>
          <a
            href="#demo"
            className="border border-gray-700 hover:bg-gray-800 px-6 py-3 rounded-md"
          >
            Ver demonstração
          </a>
        </div>
        <div className="max-w-4xl mx-auto">
          <svg
            width="100%"
            height="300"
            viewBox="0 0 800 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="800" height="400" rx="16" fill="#1E293B" />
            <circle cx="400" cy="200" r="120" fill="#334155" />
            <path
              d="M400 80C353.333 80 310 97.3333 280 128C250 158.667 235 200 235 250C235 300 250 341.333 280 372C310 402.667 353.333 420 400 420C446.667 420 490 402.667 520 372C550 341.333 565 300 565 250C565 200 550 158.667 520 128C490 97.3333 446.667 80 400 80ZM400 100C440 100 475 115 500 140C525 165 540 200 540 250C540 300 525 335 500 360C475 385 440 400 400 400C360 400 325 385 300 360C275 335 260 300 260 250C260 200 275 165 300 140C325 115 360 100 400 100Z"
              fill="#F7931A"
            />
            <path
              d="M410 160L365 160L365 340L410 340C430 340 445 335 455 325C465 315 470 300 470 280L470 220C470 200 465 185 455 175C445 165 430 160 410 160ZM410 320L385 320L385 180L410 180C423.333 180 433.333 183.333 440 190C446.667 196.667 450 207.5 450 222.5L450 277.5C450 292.5 446.667 303.333 440 310C433.333 316.667 423.333 320 410 320Z"
              fill="#F7931A"
            />
            <circle cx="335" cy="250" r="25" fill="#F7931A" />
          </svg>
        </div>
      </div>
    </section>
  );
}