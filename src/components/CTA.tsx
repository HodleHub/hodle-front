import React from "react";

export default function CTA() {
  const testimonials = [
    {
      quote: 'Hodle revolutionized our cross-border payments. Transparent and reliable!',
      author: 'Ana O., Fintech CEO'
    },
    {
      quote: 'Effortless stablecoin management with top-tier security. Highly recommend.',
      author: 'Thiago S., Investor'
    }
  ];

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/80 p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.quote}"</p>
                <p className="text-orange-600 font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-4 text-center bg-orange-500/20 rounded-2xl">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Hodle Your Stablecoins?</h2>
            <p className="text-xl text-gray-700 mb-8">Join thousands managing their digital assets securely.</p>
            <a
              href="#register"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}