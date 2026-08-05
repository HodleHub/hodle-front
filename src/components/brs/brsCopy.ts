export type BrsCopy = {
  hero: {
    eyebrow: string
    titleSuffix: string
    description: string
    issuer: string
    buyCta: string
    apiCta: string
    mapLabel: string
  }
  valueProps: {
    eyebrow: string
    title: string
    items: readonly { title: string; desc: string }[]
  }
  howItWorks: {
    eyebrow: string
    title: string
    steps: readonly { number: string; title: string; desc: string }[]
  }
  useCases: {
    eyebrow: string
    title: string
    items: readonly { title: string; desc: string }[]
    closingLead: string
    closingHighlight: string
  }
  developer: {
    eyebrow: string
    title: string
    description: string
    items: readonly string[]
    docsCta: string
  }
  faq: {
    eyebrow: string
    title: string
    items: readonly { question: string; answer: string }[]
  }
  finalCta: {
    eyebrow: string
    title: string
    description: string
    buyCta: string
  }
  codeComment: string
}

export const brsCopy: Record<'pt' | 'en', BrsCopy> = {
  pt: {
    hero: {
      eyebrow: 'BRS na Hodle',
      titleSuffix: 'do Real',
      description:
        'BRS é o Real digital 1:1, emitido pela Nora Finance e disponível na Hodle. Entra e sai em Pix, 24 horas por dia, e circula on-chain na velocidade da internet.',
      issuer: 'Emitido pela Nora Finance',
      buyCta: 'Comprar BRS',
      apiCta: 'Ver a API',
      mapLabel: 'São Paulo',
    },
    valueProps: {
      eyebrow: 'Por que BRS',
      title: 'O Real que nunca dorme',
      items: [
        {
          title: '1:1 lastreado em Real',
          desc: 'Cada BRS em circulação é respaldado por reais em reserva, sem surpresas de paridade.',
        },
        {
          title: 'Liquidação instantânea via Pix',
          desc: 'Entrada e saída em Pix, 24 horas por dia, todos os dias — sem esperar horário bancário.',
        },
        {
          title: 'On-chain, na Solana',
          desc: 'BRS circula na rede Solana. Envie e receba direto na carteira, sem fronteiras.',
        },
        {
          title: 'Nora Finance, disponível na Hodle',
          desc: 'BRS é emitido pela Nora Finance. Na Hodle, você compra, guarda e movimenta com Pix.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'Como funciona',
      title: 'Do Pix ao on-chain, e de volta',
      steps: [
        {
          number: '01',
          title: 'Pix in',
          desc: 'Você paga um Pix na Hodle, do valor que quiser.',
        },
        {
          number: '02',
          title: 'BRS na carteira',
          desc: 'O Real vira BRS e cai na sua carteira auto-custodial.',
        },
        {
          number: '03',
          title: 'Envia e recebe on-chain',
          desc: 'Movimente BRS entre carteiras na rede Solana.',
        },
        {
          number: '04',
          title: 'Pix out',
          desc: 'Converta de volta para reais e saque via Pix quando quiser.',
        },
      ],
    },
    useCases: {
      eyebrow: 'Real programável',
      title: 'O que dá para construir com o Real programável',
      items: [
        {
          title: 'Contas em BRL com liquidação on-chain instantânea',
          desc: 'Saldo em Real que se move na velocidade da blockchain, sem D+1.',
        },
        {
          title: 'Contas com rendimento automático',
          desc: 'O saldo em BRS parado rende sozinho, sem produto financeiro à parte.',
        },
        {
          title: 'Folha de pagamento e pagamentos recorrentes',
          desc: 'Salários e assinaturas liquidados automaticamente, no dia certo.',
        },
        {
          title: 'Escrow programável e pagamentos por marcos',
          desc: 'Fundos retidos por contrato até a entrega ser confirmada.',
        },
        {
          title: 'Tesouraria em BRS para empresas globais',
          desc: 'Caixa em Real acessível de qualquer lugar, 24 horas por dia.',
        },
        {
          title: 'FX automatizado entre BRS, USDC e USDT',
          desc: 'Câmbio programático entre moedas digitais, liquidado em segundos.',
        },
      ],
      closingLead: 'Não é só colocar o Real on-chain.',
      closingHighlight: 'É transformar dinheiro em software.',
    },
    developer: {
      eyebrow: 'Developer',
      title: 'Uma API para mover BRS',
      description:
        'Envie um payout em BRS direto para uma carteira on-chain, ou receba via Pix e converta automaticamente. Tudo pela mesma API que já move Pix, dólar e stablecoins na Hodle.',
      items: [
        'API REST para enviar e receber BRS via Pix ou on-chain',
        'Webhooks em tempo real para cada movimentação',
        'Liquidação on-chain na rede Solana',
      ],
      docsCta: 'Ver documentação',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Perguntas frequentes',
      items: [
        {
          question: 'O que é o BRS?',
          answer:
            'BRS é uma stablecoin de Real, emitida pela Nora Finance. Cada BRS é lastreado 1:1 em reais mantidos em reserva, e você pode comprar, guardar e movimentar BRS na Hodle.',
        },
        {
          question: 'A Hodle emite o BRS?',
          answer:
            'Não. O BRS é emitido pela Nora Finance. A Hodle é a plataforma onde você compra, guarda em carteira auto-custodial e movimenta BRS via Pix ou on-chain.',
        },
        {
          question: 'Como eu compro e saco BRS?',
          answer:
            'Você paga um Pix na Hodle e recebe BRS na sua carteira. Para sacar, converte o BRS de volta para reais e recebe via Pix, 24 horas por dia.',
        },
        {
          question: 'Em quais redes o BRS existe?',
          answer:
            'BRS circula on-chain na rede Solana, onde você recebe e envia direto da sua carteira.',
        },
        {
          question: 'Quanto tempo leva a liquidação?',
          answer:
            'A entrada e a saída via Pix são praticamente instantâneas. Movimentações on-chain seguem o tempo de confirmação da rede escolhida.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Comece agora',
      title: 'O Real, do jeito que sempre devia ter sido',
      description:
        'Compre BRS em segundos com Pix, guarde em uma carteira auto-custodial e movimente on-chain sem fronteiras.',
      buyCta: 'Comprar BRS',
    },
    codeComment: '// Payout: BRS da sua conta -> carteira on-chain',
  },
  en: {
    hero: {
      eyebrow: 'BRS at Hodle',
      titleSuffix: 'for the Real',
      description:
        'BRS is the 1:1 digital Real, issued by Nora Finance and available on Hodle. Move in and out via Pix, 24 hours a day, and circulate on-chain at internet speed.',
      issuer: 'Issued by Nora Finance',
      buyCta: 'Buy BRS',
      apiCta: 'View the API',
      mapLabel: 'São Paulo',
    },
    valueProps: {
      eyebrow: 'Why BRS',
      title: 'The Real that never sleeps',
      items: [
        {
          title: '1:1 backed by the Real',
          desc: 'Every BRS in circulation is backed by reais held in reserve, with no parity surprises.',
        },
        {
          title: 'Instant settlement via Pix',
          desc: 'On-ramp and off-ramp via Pix, 24 hours a day, every day — no banking hours required.',
        },
        {
          title: 'On-chain on Solana',
          desc: 'BRS circulates on Solana. Send and receive directly from your wallet, without borders.',
        },
        {
          title: 'Nora Finance, available on Hodle',
          desc: 'BRS is issued by Nora Finance. On Hodle, buy, hold, and move it via Pix.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'How it works',
      title: 'From Pix to on-chain and back',
      steps: [
        {
          number: '01',
          title: 'Pix in',
          desc: 'Pay a Pix through Hodle for any amount.',
        },
        {
          number: '02',
          title: 'BRS in your wallet',
          desc: 'Your Real becomes BRS and lands in your self-custodial wallet.',
        },
        {
          number: '03',
          title: 'Send and receive on-chain',
          desc: 'Move BRS between wallets on Solana.',
        },
        {
          number: '04',
          title: 'Pix out',
          desc: 'Convert back to reais and cash out via Pix whenever you want.',
        },
      ],
    },
    useCases: {
      eyebrow: 'Programmable Real',
      title: 'What you can build with a programmable Real',
      items: [
        {
          title: 'BRL accounts with instant on-chain settlement',
          desc: 'A Real balance that moves at blockchain speed, with no D+1.',
        },
        {
          title: 'Accounts with automatic yield',
          desc: 'Idle BRS balances earn automatically, with no separate financial product.',
        },
        {
          title: 'Payroll and recurring payments',
          desc: 'Salaries and subscriptions settled automatically, on the right day.',
        },
        {
          title: 'Programmable escrow and milestone payments',
          desc: 'Funds held by contract until delivery is confirmed.',
        },
        {
          title: 'BRS treasury for global companies',
          desc: 'Real-denominated cash accessible from anywhere, 24 hours a day.',
        },
        {
          title: 'Automated FX between BRS, USDC, and USDT',
          desc: 'Programmatic currency conversion between digital assets, settled in seconds.',
        },
      ],
      closingLead: 'Putting the Real on-chain is only the beginning.',
      closingHighlight: "It's turning money into software.",
    },
    developer: {
      eyebrow: 'Developer',
      title: 'An API to move BRS',
      description:
        'Send a BRS payout directly to an on-chain wallet, or receive via Pix and convert automatically. All through the same API that already moves Pix, dollars, and stablecoins on Hodle.',
      items: [
        'REST API to send and receive BRS via Pix or on-chain',
        'Real-time webhooks for every movement',
        'On-chain settlement on Solana',
      ],
      docsCta: 'View documentation',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        {
          question: "What's BRS?",
          answer:
            'BRS is a Real-denominated stablecoin issued by Nora Finance. Each BRS is backed 1:1 by reais held in reserve, and you can buy, hold, and move BRS on Hodle.',
        },
        {
          question: 'Does Hodle issue BRS?',
          answer:
            'No. BRS is issued by Nora Finance. Hodle is the platform where you buy, hold BRS in a self-custodial wallet, and move it via Pix or on-chain.',
        },
        {
          question: 'How do I buy and cash out BRS?',
          answer:
            'Pay a Pix on Hodle and receive BRS in your wallet. To cash out, convert BRS back to reais and receive them via Pix, 24/7.',
        },
        {
          question: 'Which networks is BRS available on?',
          answer:
            'BRS circulates on-chain on Solana, where you can send and receive directly from your wallet.',
        },
        {
          question: 'How long does settlement take?',
          answer:
            'Pix deposits and withdrawals are practically instant. On-chain transfers follow the confirmation time of the selected network.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Start now',
      title: 'The Real, the way it should have always been',
      description:
        'Buy BRS in seconds with Pix, hold it in a self-custodial wallet, and move it on-chain without borders.',
      buyCta: 'Buy BRS',
    },
    codeComment: '// Payout: BRS from your account -> on-chain wallet',
  },
}
