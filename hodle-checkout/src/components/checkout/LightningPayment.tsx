import { ArrowLeft, Copy, Zap, Share, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LightningPaymentData {
  id: string;
  description: string;
  created_at: number;
  status: string;
  amount: number;
  currency: string;
  source_fiat_value: number;
  fiat_value: number;
  lightning_invoice: {
    expires_at: number;
    payreq: string;
  };
}

interface LightningPaymentProps {
  paymentData: LightningPaymentData;
  originalValue: number;
  goBack: () => void;
}

export const LightningPayment = ({ paymentData, originalValue, goBack }: LightningPaymentProps) => {
  const [qrCodeImageUrl, setQrCodeImageUrl] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    if (paymentData.lightning_invoice?.payreq) {
      QRCode.toDataURL(paymentData.lightning_invoice.payreq)
        .then(setQrCodeImageUrl)
        .catch((error) => {
          console.error('QR Code generation error:', error);
        });
    }
  }, [paymentData.lightning_invoice?.payreq]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const sharePayment = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Pagamento Lightning - CryptoUse',
          text: `Pagamento de R$${paymentData.fiat_value.toFixed(2)} via Lightning Network`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      copyToClipboard(window.location.href);
    }
  };

  const openInLightningWallet = () => {
    const lightningInvoice = paymentData.lightning_invoice.payreq;
    const lightningUrl = `lightning:${lightningInvoice}`;
    
    try {
      window.location.href = lightningUrl;
    } catch (error) {
      console.error('Error opening Lightning wallet:', error);
      copyToClipboard(lightningInvoice);
    }
  };

  const totalValue = paymentData.fiat_value;
  const flatFee = 1.0;
  const percentageFee = originalValue * 0.02;
  const feeAmount = flatFee + percentageFee;
  const satoshis = paymentData.amount;

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString('pt-BR', {
      dateStyle: 'full',
      timeStyle: 'short',
    });
  };

  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-orange-300">
        <div className="flex justify-center mb-4">
          <Image
            src="/hodlelogo.png"
            alt="HODLE"
            width={100}
            height={80}
            className="mx-auto"
          />
        </div>
        
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500">
            {formatDate(paymentData.created_at)}
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="font-bold">Valor Original</span>
            <span className="text-xl font-bold">R${originalValue.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-bold">Taxa (R$1,00 + 2%)</span>
            <span className="text-xl font-bold">R${feeAmount.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-between border-t pt-2">
            <span className="font-bold">Total</span>
            <span className="text-xl font-bold">R${totalValue.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-bold">Valor em satoshis</span>
            <span className="text-xl font-bold">{satoshis}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-bold">Cotação BTC</span>
          </div>
        </div>

        {qrCodeImageUrl && (
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="border-2 border-yellow-300 rounded-md bg-white p-4">
              <Image
                src={qrCodeImageUrl}
                width={250}
                height={250}
                alt="QR Code da Invoice Lightning"
                className="mx-auto"
                priority
              />
            </div>
            
            <p className="text-sm text-gray-500 text-center">
              Escaneie o QR Code com sua carteira Lightning
            </p>
            
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg flex items-center gap-2"
            >
              <Zap className="h-4 w-4" />
              Lightning Network
            </Button>

            <div className="w-full">
              <p className="text-sm text-gray-500 mb-2 text-center">Lightning Invoice:</p>
              <div className="bg-yellow-50 p-3 rounded-md text-sm border border-yellow-200 relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs break-all mr-2">
                    {paymentData.lightning_invoice.payreq}
                  </span>
                  <Button
                    variant="ghost"
                    className="p-2 h-auto flex-shrink-0"
                    onClick={() => copyToClipboard(paymentData.lightning_invoice.payreq)}
                    title="Copiar invoice"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 w-full"
              onClick={openInLightningWallet}
            >
              <Zap className="h-4 w-4" />
              Abrir em Carteira Lightning
            </Button>
          </div>
        )}

        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
            onClick={goBack}
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Refazer pagamento
          </Button>
          
          <Button
            type="button"
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
            onClick={sharePayment}
          >
            <Share className="h-4 w-4 mr-2" />
            Compartilhar
          </Button>
        </div>
      </div>
    </div>
  );
}; 