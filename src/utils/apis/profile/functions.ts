import { calculateEndDate } from "../payment/functions";
import { IMyKosType } from "../user/types";

export const calculateParsedDates = (dataKos: IMyKosType[]): Date => {
  const endDate = dataKos?.map((item: any) => item.start_date);
  const splitDates = endDate?.map((date: string) => date.split("/"));
  const parsedDates = splitDates?.map((dateParts: string[]) => {
    const [day, month, year] = dateParts;
    return { day: parseInt(day), month: parseInt(month) - 1, year: parseInt(year) };
  });
  const startDate = parsedDates && parsedDates.length > 0 ? new Date(parsedDates[0].year, parsedDates[0].month, parsedDates[0].day) : new Date();
  return startDate;
};

export const calculateResultEndDate = (startDate: Date): string => {
  const resultEndDate = `${new Date(calculateEndDate(startDate)).toLocaleDateString()}`;
  return resultEndDate;
};
