'use client'

import { LightningPayment } from '../../components/checkout/LightningPayment';
import { LightningInvoiceData } from '../../types/lightning';

export default function TestLightningPage() {
  const mockPaymentData: LightningInvoiceData = {
    id: "9e6d5c90-7d1e-4eef-a79b-dbe16e90ce41",
    description: "Invoice Hodle via whatsapp",
    desc_hash: false,
    created_at: 1753788126,
    status: "unpaid",
    amount: 165,
    callback_url: "http://localhost:3001/webhook/opennode",
    success_url: null,
    hosted_checkout_url: "https://checkout.opennode.com/9e6d5c90-7d1e-4eef-a79b-dbe16e90ce41",
    order_id: null,
    currency: "BRL",
    source_fiat_value: 0.1,
    fiat_value: 1.1,
    auto_settle: false,
    notif_email: null,
    address: "39sPshRJezPmnww3EWPm7MNhdCWDmeJphU",
    metadata: {},
    chain_invoice: {
      address: "39sPshRJezPmnww3EWPm7MNhdCWDmeJphU"
    },
    uri: "bitcoin:39sPshRJezPmnww3EWPm7MNhdCWDmeJphU?amount=0.00000165&label=Invoice+Hodle+via+whatsapp&lightning=lnbc1650n1p5g3tk7pp5duusn9cvlrzlxghe546xk48qexdwjv0kcpsjlm06j7gvn7sa9eusdpjf9h8vmmfvdjjqsmj09c8gmeqw4ek2grkd9sjqamgv968xctswqcqzzsxqzjhsp59unckzdxrqkms8806c0r0v0t6n5eq6kr0geqw8wgmrz9ghjnxq9q9qxpqysgq0jyhx9ze50nfgj3glsp5u3wkamnxk997ak3jaegqr5dsmsvlxkfj08c7s94vqdkwfzk6gczlnyfxka0xcrz9984m5jsxg44q8zypwvsp74zt6d",
    ttl: 10,
    lightning_invoice: {
      expires_at: 1753788725,
      payreq: "lnbc1650n1p5g3tk7pp5duusn9cvlrzlxghe546xk48qexdwjv0kcpsjlm06j7gvn7sa9eusdpjf9h8vmmfvdjjqsmj09c8gmeqw4ek2grkd9sjqamgv968xctswqcqzzsxqzjhsp59unckzdxrqkms8806c0r0v0t6n5eq6kr0geqw8wgmrz9ghjnxq9q9qxpqysgq0jyhx9ze50nfgj3glsp5u3wkamnxk997ak3jaegqr5dsmsvlxkfj08c7s94vqdkwfzk6gczlnyfxka0xcrz9984m5jsxg44q8zypwvsp74zt6d"
    }
  };

  const handleGoBack = () => {
    console.log('Go back clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto">
        <LightningPayment 
          paymentData={mockPaymentData} 
          originalValue={0.1}
          goBack={handleGoBack}
        />
      </div>
    </div>
  );
} 