import { toast } from "@/components/ui/use-toast";

export const formatTime = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export const calculateEndDate = (startDate: Date) => {
  const thirtyDaysLater = new Date(startDate);
  thirtyDaysLater.setDate(thirtyDaysLater.getDate() + 30);
  return thirtyDaysLater;
};

export const copyToClipboard = (vaNumber: string | any) => {
  const vaCodeInput = document.createElement("input");
  let valueToCopy = "";
  if (vaNumber) {
    valueToCopy = vaNumber;
  }
  vaCodeInput.value = valueToCopy;
  document.body.appendChild(vaCodeInput);
  vaCodeInput.select();
  document.execCommand("copy");
  document.body.removeChild(vaCodeInput);

  toast({
    description: "Berhasil disalin",
  });
};
