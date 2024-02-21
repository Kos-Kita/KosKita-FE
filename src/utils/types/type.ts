export interface Response<T = any> {
  message: string;
  data: T;
}

export interface bookingChartProps {
  data: number[];
}
