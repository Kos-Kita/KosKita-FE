import { IKosType } from "@/utils/apis/kos/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface HargaKosProps {
  register: UseFormRegister<IKosType>;
  errors: FieldErrors<IKosType>;
}
const HargaKos = ({ register, errors }: HargaKosProps) => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-y-[60px] px-3 pt-20 ">
      <div className="flex item-center gap-x-3">
        <label htmlFor="harga" className="w-52 whitespace-nowrap">
          Harga
        </label>
        <div className="flex flex-col gap-y-3 w-full">
          <input
            {...register("price", {
              valueAsNumber: true,
            })}
            type="text"
            id="harga"
            className="border px-4 py-2 rounded-lg w-full"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>
      </div>
      <div className="flex item-center gap-x-3">
        <label htmlFor="JumlahKos" className="w-52 whitespace-nowrap">
          Jumlah Ruangan Kos
        </label>
        <div className="flex flex-col gap-y-3 w-full">
          <input
            {...register("rooms", {
              valueAsNumber: true,
            })}
            type="text"
            id="JumlahKos"
            className="border px-4 py-2 rounded-lg w-full"
          />
          {errors.rooms && <p className="text-red-500 text-sm">{errors.rooms.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default HargaKos;
