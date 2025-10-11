import { ArrowLeft, ArrowRight, QrCode, Copy, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface StepTwoProps {
  pixCopiaCola: string;
  lightningInvoice: string;
  paymentAmount: string;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  copyToClipboard: (text: string) => void;
}

export function StepTwo({ 
  pixCopiaCola,
  lightningInvoice,
  paymentAmount,
  goToNextStep, 
  goToPrevStep,
  copyToClipboard
}: StepTwoProps) {
  const [qrCodeImageUrl, setQrCodeImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (lightningInvoice) {
      QRCode.toDataURL(lightningInvoice.toUpperCase())
        .then(setQrCodeImageUrl)
        .catch((error) => {
          console.error('QR Code generation error:', error);
        });
    }
  }, [lightningInvoice]);

  const totalValueInReais = parseFloat(paymentAmount) || 0;
  const originalValueInReais = (totalValueInReais - 1.0) / 1.01; // Subtracting flat fee and percentage
  const feeInReais = totalValueInReais - originalValueInReais;
  const satoshis = Math.floor(totalValueInReais * 1500); // Mock conversion
  const btcQuote = 565893.55; // Example BTC quote

  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-orange-300">
        <div className="flex justify-center mb-4">
          <Image
            src="/hodlelogo.png"
            alt="Hodle"
            width={100}
            height={80}
          />
        </div>
        
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-500">
            {new Date().toLocaleString('pt-BR', {
              dateStyle: 'full',
              timeStyle: 'short',
            })}
          </p>

          <div className="flex items-center justify-between">
            <span className="font-bold">Valor Original</span>
            <p className="text-xl font-bold">
              R${originalValueInReais.toFixed(2)}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-bold">Taxa (R$1,00 + 1%)</span>
            <p className="text-xl font-bold">R${feeInReais.toFixed(2)}</p>
          </div>

          <div className="flex items-center justify-between border-t pt-2">
            <span className="font-bold">Total</span>
            <p className="text-xl font-bold">
              R${totalValueInReais.toFixed(2)}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-bold">Valor em satoshis</span>
            <p className="text-xl font-bold">{satoshis}</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-bold">Cotação BTC</span>
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold">
                R${btcQuote.toLocaleString('pt-BR')}
              </p>
            </div>
          </div>

          {qrCodeImageUrl && (
            <div className="flex flex-col items-center space-y-2 mt-6">
              <div className="border-2 border-yellow-300 rounded-md bg-yellow-50 p-4">
                <Image
                  src={qrCodeImageUrl}
                  width={250}
                  height={250}
                  alt="QR Code da Invoice Lightning"
                  className="mx-auto"
                  priority
                />
              </div>
              <p className="text-sm text-gray-500">
                Escaneie o QR Code com sua carteira Lightning
              </p>
              <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200">
                <Zap className="h-5 w-5 text-yellow-600 mr-2" />
                <span className="font-medium text-yellow-900">
                  Lightning Network
                </span>
              </div>

              <div className="w-full mt-4">
                <p className="text-sm text-gray-500 mb-2 text-center">
                  Lightning Invoice:
                </p>
                <div className="bg-yellow-50 p-3 rounded-md text-sm break-all border border-yellow-200">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs break-all mr-2">
                      {lightningInvoice}
                    </span>
                    <Button
                      variant="ghost"
                      className="p-2 h-auto flex-shrink-0"
                      onClick={() => copyToClipboard(lightningInvoice)}
                      title="Copiar invoice"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex justify-between mt-6">
          <Button 
            variant="outline" 
            onClick={goToPrevStep} 
            className="border-yellow-300 text-yellow-700 hover:bg-yellow-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <Button 
            onClick={goToNextStep}
            className="bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            Continuar
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
} 