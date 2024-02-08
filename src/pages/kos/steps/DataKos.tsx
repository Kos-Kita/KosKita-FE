import { IKosType } from "@/utils/apis/kos/types";
import { UseFormRegister } from "react-hook-form";

interface DataKosProps {
  register: UseFormRegister<IKosType>;
}

const DataKos = ({ register }: DataKosProps) => {
  return (
    <div className="max-w-6xl  mx-auto flex flex-col gap-y-[40px] p-3">
      <div className="flex item-center gap-x-3">
        <label htmlFor="namaKos" className="w-52 whitespace-nowrap">
          Nama Kos Anda
        </label>
        <input
          {...register("kos_name")}
          type="text"
          id="namakos"
          className="border px-4 py-2 rounded-lg w-full"
        />
      </div>
      <div className="flex item-center gap-x-3">
        <label htmlFor="deskripsi" className="w-52 whitespace-nowrap">
          Deskripsi Kos Anda
        </label>
        <textarea
          {...register("description")}
          id="deskripsi"
          rows={5}
          className="border px-4 py-2 rounded-lg w-full"
        ></textarea>
      </div>
      <div className="flex item-center gap-x-3">
        <label htmlFor="kategori" className="w-52 whitespace-nowrap">
          Kategori Kos Anda
        </label>
        <select
          {...register("category")}
          id="kategori"
          className="border px-4 py-2 rounded-lg w-full"
        >
          <option value="" hidden selected>
            Kategori
          </option>
          <option value="category1">category 1</option>
        </select>
      </div>
      <div className="flex item-center gap-x-3">
        <label htmlFor="peraturan" className="w-52 whitespace-nowrap">
          Peraturan Kos
        </label>
        <select
          {...register("kos_rules")}
          id="peraturan"
          className="border px-4 py-2 rounded-lg w-full"
        >
          <option value="" hidden selected>
            Kebijakan
          </option>

          <option value="category1">category 1</option>
        </select>
      </div>
      <div className="flex item-center gap-x-3">
        <label htmlFor="fasilitas" className="w-52 whitespace-nowrap">
          Fasilitas Kos
        </label>
        <select
          {...register("kos_facilities")}
          id="fasilitas"
          className="border px-4 py-2 rounded-lg w-full"
        >
          <option value="" hidden selected>
            Fasilitas
          </option>

          <option value="category1">category 1</option>
        </select>
      </div>
    </div>
  );
};

export default DataKos;
