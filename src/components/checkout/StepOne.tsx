import { ArrowLeft, ArrowRight, Camera } from "lucide-react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { baseUrl } from '../../utils/baseUrl';
import { LightningPayment } from './LightningPayment';
import { LightningPaymentResult, LightningInvoiceData } from '../../types/lightning';

const schema = yup.object().shape({
  paymentCode: yup.string().required('O código de pagamento é obrigatório'),
});

interface StepOneProps {
  pixCopiaCola: string;
  setPixCopiaCola: (code: string) => void;
  paymentAmount: string;
  setPaymentAmount: (amount: string) => void;
  goToNextStep: () => void;
}

export function StepOne({ 
  pixCopiaCola, 
  setPixCopiaCola, 
  paymentAmount, 
  setPaymentAmount, 
  goToNextStep 
}: StepOneProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [lightningData, setLightningData] = useState<LightningInvoiceData | null>(null);
  const [originalValue, setOriginalValue] = useState<number>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handlePixInput = (value: string) => {
    setPixCopiaCola(value);
    setValue('paymentCode', value);
    // Extract amount from PIX code if possible
    if (value.includes('5204') && value.includes('5303986')) {
      setPaymentAmount("10.50");
    }
  };

  const handleLightningPayment = async (paymentCode: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/crypto-pix/lightning`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ qrcode: paymentCode }),
      });

      const responseData = await response.json();

      if (response.ok && responseData.data?.dataResponse?.success && responseData.data?.dataResponse?.data) {
        setLightningData(responseData.data.dataResponse.data);
        setPaymentAmount(responseData.data.value.toString());
        setOriginalValue(responseData.data.value);
      } else {
        throw new Error('Erro ao processar pagamento Lightning');
      }
    } catch (error) {
      console.error('Erro no processamento do pagamento:', error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: { paymentCode: string }) => {
    await handleLightningPayment(data.paymentCode);
  };

  const handleGoBack = () => {
    setLightningData(null);
    setPixCopiaCola('');
    setPaymentAmount('');
  };

  if (lightningData) {
    return (
      <LightningPayment 
        paymentData={lightningData} 
        goBack={handleGoBack}
        originalValue={originalValue}
      />
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-orange-300">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Tipo de Pagamento</h2>
            <p className="text-gray-600 text-sm mb-4">Selecione o método de pagamento</p>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium">Lightning Network</div>
                  <div className="text-sm text-gray-600">Pagamentos instantâneos</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Detalhes do Pagamento</h3>
            <p className="text-gray-600 text-sm mb-4">Cole o PIX COPIA E COLA</p>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                PIX Copia e Cola
              </label>
              <Input
                type="text"
                placeholder="Cole aqui o código PIX (00020126...)"
                className="w-full p-3 border border-orange-200 rounded-lg focus:border-orange-500 focus:ring-orange-500 text-sm font-mono"
                {...register('paymentCode')}
                onChange={(e) => handlePixInput(e.target.value)}
              />
              {errors.paymentCode && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.paymentCode.message}
                </p>
              )}
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full flex mt-2 items-center justify-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-50"
              onClick={() => setShowScanner(true)}
            >
              <Camera className="h-4 w-4" />
              Escanear QR Code
            </Button>

            {paymentAmount && parseFloat(paymentAmount) > 0 && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4 mt-4">
                <div className="text-sm text-gray-600 mb-1">Valor detectado:</div>
                <div className="text-lg font-bold text-orange-800">R$ {paymentAmount}</div>
              </div>
            )}
          </div>
          
          <div className="flex justify-between">
            <Link href="/">
              <Button type="button" variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <Button 
              type="submit"
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 text-white disabled:bg-gray-300 disabled:text-gray-500"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processando...
                </div>
              ) : (
                <>
                  Realizar Pagamento
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
} 