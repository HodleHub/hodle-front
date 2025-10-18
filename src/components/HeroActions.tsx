"use client";

import React, { useState, useEffect } from "react";

// --- Discord Submission Logic ---
type DiscordLogOptions = {
  channel: string;
  name: string;
  email: string;
  description: string;
  error?: string;
};

type SendToDiscordResult = {
  error: string | null;
};

const discordWebhookLog: Record<string, string> = {
  logs: 'https://discord.com/api/webhooks/1347864758774267965/aAxTxL4EA8A3a7wlb-hDBh5OQWUN1_HWUvQDlxONnbQ7OsikVGwP9buFxNa0cE9ZnXwy',
};

const sendToDiscord = async ({
  channel,
  name,
  email,
  description,
  error,
}: DiscordLogOptions): Promise<SendToDiscordResult> => {
  const discordWebhookUrl = discordWebhookLog.logs;
  if (!discordWebhookUrl) {
    return { error: 'No Discord webhook URL found' };
  }

  const discordEmbedMessage = {
    embeds: [
      {
        title: channel,
        color: error ? 16711680 : 5814783, // Red for error, Blue for success
        fields: [
          { name: 'Nome', value: name, inline: true },
          { name: 'Email', value: email, inline: true },
          {
            name: 'Descrição',
            value: description || 'Nenhuma descrição fornecida',
            inline: false,
          },
        ],
        ...(error && { footer: { text: `Error: ${error}` } }),
      },
    ],
  };

  try {
    const discordResponse = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordEmbedMessage),
    });

    if (!discordResponse.ok) {
      const responseBody = await discordResponse.text();
      return {
        error: `Discord error: ${discordResponse.statusText}. Response: ${responseBody}`,
      };
    }
    return { error: null };
  } catch (err) {
    return { error: `Exception: ${err}` };
  }
};

// --- Contact Modal Component ---
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    if (!isOpen) {
      // Reset form on close
      setName('');
      setEmail('');
      setDescription('');
      setSubmitStatus(null);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const result = await sendToDiscord({
      channel: 'Novo Contato - Hodle Front',
      name,
      email,
      description,
    });

    if (result.error) {
      setSubmitStatus('error');
    } else {
      setSubmitStatus('success');
    }

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Obrigado!</h2>
            <p className="text-gray-600 mb-6">Sua mensagem foi enviada com sucesso.</p>
            <p className="text-gray-600 mb-6">Para acessar a plataforma, use o link abaixo:</p>
            <a href="https://hodle.com.br" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              Acessar Hodle
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fale Conosco</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" />
              <textarea placeholder="Como podemos te ajudar?" value={description} onChange={(e) => setDescription(e.target.value)} required rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"></textarea>
            </div>
            <div className="mt-6">
              <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/30 disabled:opacity-50">
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
            {submitStatus === 'error' && <p className="text-red-500 text-sm mt-4 text-center">Ocorreu um erro. Tente novamente.</p>}
             <p className="text-center text-sm text-gray-500 mt-6">
              Acesse a plataforma em <a href="https://hodle.com.br" target="_blank" rel="noopener noreferrer" className="font-semibold text-orange-600 hover:underline">hodle.com.br</a>.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default function HeroActions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/30">
        Fale conosco
      </button>
    </>
  );
}
