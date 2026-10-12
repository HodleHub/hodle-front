import type { TopicPage } from '../../types/topic'

export const englishPixParaLlc: TopicPage = {
  slug: 'en/pix-for-llc',
  language: 'en',
  translations: {
    'pt-BR': '/pix-para-llc',
    en: '/en/pix-for-llc',
  },
  primaryKeyword: 'pix for llc',
  title: 'Pix for LLC: an account for your foreign company',
  h1: 'Pix for LLCs. Your structure, connected to Brazil.',
  description:
    'Use your LLC or offshore company to operate Pix with Hodle. See the account for foreign companies, the international documents and the KYB review steps.',
  keywords: [
    'pix for llc',
    'pix for foreign companies',
    'receive pix from abroad',
    'brazil pix for us llc',
    'llc account',
    'offshore company account',
    'documents for llc account',
  ],
  updatedAt: '2026-10-12T00:00:00-03:00',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'GLOBAL COMPANIES',
  subhead:
    'Pix for LLCs, with the structure you already have. Connect your company abroad to payments in Brazil, with international documentation and onboarding supported by Hodle.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/h-logo.svg', label: 'Hodle' },
  ],
  ctaSubhead:
    'Is your LLC or offshore company already incorporated? Tell us where it operates and how it needs to receive and pay. The team confirms the documents, eligibility and products available for your case.',
  ctaPrimary: {
    label: 'Connect my LLC',
    href: 'https://api.whatsapp.com/send?phone=5511960000445&text=I%20want%20to%20operate%20Pix%20with%20my%20LLC%20or%20offshore%20company.',
  },
  ctaSecondary: { label: 'Explore the Hodle account', href: 'https://app.hodle.com.br' },
  sections: [
    {
      id: 'your-structure',
      kind: 'PROSE',
      heading: 'Use the LLC or offshore company you already have',
      body: 'You have already formed the company, organized the members and chosen where to operate. The next step is connecting that structure to the customers and suppliers who use Pix in Brazil.\n\nHodle has a registration flow for foreign companies, with the legal name and EIN or Tax ID. You present the existing business for review and agree with the team on the collection and payment methods suited to the operation.',
      bullets: [
        'For software, services, commerce and other eligible businesses.',
        'Company registration with the tax document from the country of incorporation.',
        'Review of the company, its responsible persons and the flow of funds before activation.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
      links: [
        {
          label: 'Still setting up the company? Read the offshore and LLC guide (Português)',
          href: '/offshore',
        },
      ],
    },
    {
      id: 'account-for-llc',
      kind: 'PROSE',
      heading: 'An account for your LLC: the operation stays in the company',
      body: 'Registration identifies your LLC as a foreign company. During the review, you state whether you will move your own funds or receive payments from customers, which products you need and the expected volume. This allows the use of the account to be assessed based on the business’s actual activity.\n\nPix, stablecoins and the API are added according to approval and availability for your company. Collection details, limits and conditions are confirmed during onboarding.',
      bullets: [
        'The company’s legal name and EIN / Tax ID at registration.',
        'Collection profile and purpose of payments defined during the review.',
        'Products and limits enabled according to the approved operation.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
      links: [
        { label: 'See how the Hodle business account works (Português)', href: '/conta-digital-pj' },
      ],
    },
    {
      id: 'international-documents',
      kind: 'PROSE',
      heading: 'International documents for a global operation',
      body: 'Your company has documents issued outside Brazil. Onboarding considers the documentation from the jurisdiction of origin, with validation of the company and its responsible persons. For a US LLC, the EIN / Tax ID identifies the company at registration.\n\nHave the documents below ready to discuss with the team. The final list and acceptance depend on the country, the type of company and the KYB review; translations or additional proof may be requested.',
      bullets: [
        'Company formation: Certificate of Formation, Articles of Organization or an equivalent document.',
        'Tax identification: the US LLC’s EIN or the Tax ID from the jurisdiction of origin.',
        'Ownership structure: Operating Agreement or a document identifying members and responsible persons.',
        'Identification of responsible persons: passport or official document, according to the jurisdiction.',
        'Proof of operation: address, activity, source of funds and requested commercial documents.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'receive-pix-from-abroad',
      kind: 'PROSE',
      heading: 'Receive Pix from abroad, charging the way customers know',
      body: 'Your customer in Brazil pays in reais through the app they already use. For an eligible foreign company, Hodle connects that payment to the approved collection flow, with tracking in the dashboard or integration via API.\n\nPix collection, payment links and stablecoin receipt each have their own configuration. The team confirms which option suits your LLC, which asset will be delivered and where the funds go before you start charging.',
      bullets: [
        'Sell your own products or services to customers in Brazil.',
        'Offer Pix in the payment experience, according to the enabled features.',
        'Confirm currency, network, fees and settlement destination during onboarding.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
      links: [
        { label: 'Explore the Pix payment link (Português)', href: '/link-de-pagamento-pix' },
        {
          label: 'See the flow for receiving Pix in stablecoin (Português)',
          href: '/receber-pix-em-stablecoin',
        },
      ],
    },
    {
      id: 'pay-pix',
      kind: 'PROSE',
      heading: 'Pay suppliers in Brazil with stablecoins',
      body: 'A company abroad also has expenses in reais. In enabled products, Hodle lets you use stablecoins to make Pix payments to suppliers in Brazil. The recipient receives reais, according to the quote and the conditions of the operation.\n\nYou can organize payments in the dashboard or evaluate an API integration. Tell the team which assets you use, who receives the payments and the expected volume to confirm availability for your structure.',
      bullets: [],
      icons: [],
      comparison: null,
      code: null,
      image: null,
      links: [
        { label: 'See how to pay Pix with USDT (Português)', href: '/pagar-pix-com-usdt' },
        { label: 'Explore the Brazil Pix stablecoin API', href: '/en/pix-stablecoin-api' },
      ],
    },
    {
      id: 'how-to-start',
      kind: 'STEPS',
      heading: 'How to open your LLC account with Hodle',
      body: 'Start with the company you already have. The team supports the assessment of the structure and confirms what needs to be ready to operate. Account opening and real fund movement are available only in production, after registration approval and KYB.',
      bullets: [
        'Present the company. Provide the country of incorporation, legal name, EIN / Tax ID, activity and how you intend to use Pix.',
        'Send the documentation. Complete the company’s KYB review and the identification of responsible persons with the requested documents.',
        'Set up the approved operation. Confirm products, limits, fees and the destination of funds before you start receiving and making payments.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
  ],
  faqSubhead: 'What to know before connecting your LLC or offshore company to Pix.',
  faq: [
    {
      question: 'Can a US LLC receive Pix?',
      answer:
        'Hodle accepts requests from foreign companies, including LLCs, for review of a Pix operation. Activation depends on the activity, the documentation, the flow of funds and the approved products. Talk to the team before sharing collection details with your customers.',
    },
    {
      question: 'Do I need to open another company to use my LLC with Hodle?',
      answer:
        'The first step is presenting the LLC or offshore company you already have. Registration supports foreign companies with an EIN / Tax ID. The review confirms whether the structure is eligible and which requirements apply to your case.',
    },
    {
      question: 'Which documents are required to open an account for an LLC?',
      answer:
        'Prepare the formation document, the EIN / Tax ID, the corporate documents and the identification of the responsible persons. The team confirms the final list, including proof of activity, address and source of funds, according to the jurisdiction and the KYB review.',
    },
    {
      question: 'Are documents from any country accepted?',
      answer:
        'International documentation is assessed according to the issuing country, the company’s structure and partner requirements. Acceptance is neither automatic nor universal. Tell the team the jurisdiction to confirm eligibility and accepted documents before sending them.',
    },
    {
      question: 'Does the LLC’s EIN become a Pix key?',
      answer:
        'No. The EIN / Tax ID identifies the company at registration and in the KYB review. The details used to receive Pix are defined in the flow enabled for the account; the foreign tax document does not automatically become a Pix key.',
    },
    {
      question: 'Does Hodle form the LLC or offshore company for me?',
      answer:
        'Hodle provides the payment infrastructure for eligible companies. Forming the LLC or offshore company is done with specialized professionals. Hodle’s offshore guide covers that step and the legal structuring partner.',
    },
  ],
  related: [
    { label: 'Offshore and LLC: legal structuring (Português)', href: '/offshore' },
    { label: 'Business account for your company (Português)', href: '/conta-digital-pj' },
    { label: 'Pix for businesses (Português)', href: '/pix' },
    { label: 'Hodle pricing and fees (Português)', href: '/precos' },
    { label: 'Ler em português', href: '/pix-para-llc' },
  ],
  ogImage: '/og-image-v2.png',
}
