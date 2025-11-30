import { Check } from "lucide-react"

interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    "PIX Copia e Cola",
    "Lightning Invoice", 
    "Pagamento Realizado"
  ];

  return (
    <div className="flex items-center justify-center space-x-2 mb-8">
      {[1, 2, 3].map((step) => (
        <div
          key={step}
          className={`flex items-center ${step < currentStep ? 'text-yellow-500' : step === currentStep ? 'text-yellow-500' : 'text-gray-300'}`}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
            step < currentStep ? 'border-yellow-500 bg-yellow-50' : 
            step === currentStep ? 'border-yellow-500 bg-white' : 
            'border-gray-200 bg-white'
          }`}>
            {step < currentStep ? (
              <Check className="h-4 w-4" />
            ) : (
              <span className="text-sm font-semibold">{step}</span>
            )}
          </div>
          {step < 3 && (
            <div className={`w-12 h-0.5 ${step < currentStep ? 'bg-yellow-500' : 'bg-gray-200'}`}></div>
          )}
        </div>
      ))}
    </div>
  )
} 