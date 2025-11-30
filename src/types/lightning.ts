export interface LightningInvoiceData {
  id: string;
  description: string;
  desc_hash: boolean;
  created_at: number;
  status: string;
  amount: number;
  callback_url: string;
  success_url: string | null;
  hosted_checkout_url: string;
  order_id: string | null;
  currency: string;
  source_fiat_value: number;
  fiat_value: number;
  auto_settle: boolean;
  notif_email: string | null;
  address: string;
  metadata: Record<string, any>;
  chain_invoice: {
    address: string;
  };
  uri: string;
  ttl: number;
  lightning_invoice: {
    expires_at: number;
    payreq: string;
  };
}

export interface LightningPaymentResponse {
  data: {
    dataResponse: {
      success: boolean;
      data: LightningInvoiceData;
    };
    pixKey: string;
    payCryptoPixId: string;
    value: number;
    valueInSatoshis: number;
  };
}

export interface LightningPaymentArgs {
  qrcode: string;
}

export interface LightningPaymentResultSuccess {
  success: true;
  data: LightningPaymentResponse;
}

export interface LightningPaymentResultError {
  success: false;
  error: string;
}

export type LightningPaymentResult = LightningPaymentResultSuccess | LightningPaymentResultError; 