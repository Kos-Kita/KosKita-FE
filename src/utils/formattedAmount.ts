export const formattedAmount = (amount: number): string =>
  amount?.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
