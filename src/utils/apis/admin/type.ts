export interface dataBookType {
  total_user: string;
  total_booking: string;
  total_kos: string;
  total_booking_per_month:
    | any
    | [
        {
          Januari: string;
          Februari: string;
          Maret: string;
          April: string;
          Mei: string;
          Juni: string;
          Juli: string;
          Agustus: string;
          September: string;
          Oktober: string;
          November: string;
          Desember: string;
        }
      ];
}
