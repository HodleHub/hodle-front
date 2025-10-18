"use client"
import React from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Crie sua wallet",
      description:
        "Ao entrar na hodle sua wallet é criada automaticamente",
    },
    {
      number: 2,
      title: "Deposito",
      description:
        "Faça o deposito de USDT",
    },
    {
      number: 3,
      title: "Realize pagamentos",
      description:
        "De forma simplificada, realize pagamentos PIX utilizando o saldo das suas stablecoins",
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden" id="how-it-works">
      {/* Background gradient / glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100 opacity-70 blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Como funciona?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Começar na hodle leva segundos
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className="bg-white flex items-center flex-col rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-tr from-orange-500 to-orange-400 text-white w-16 h-16 flex items-center justify-center rounded-full mb-6 text-2xl font-extrabold shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
