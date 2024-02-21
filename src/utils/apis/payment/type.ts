export interface detail {
  price: string;
}

export interface detailPayment {
  booking_code: string;
  virtual_number?: string;
  biller_code?: string;
  bill_key?: string;
  total: string;
}

export interface paymentType {
  payment_type: string;
  kos_id: number;
  bank: string;
  start_date?: string;
  end_date?: string;
}
