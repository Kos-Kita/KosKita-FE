import { IKosType } from "@/utils/apis/kos/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface DataKosProps {
  register: UseFormRegister<IKosType>;
  errors: FieldErrors<IKosType>;
}

const DataKos = ({ register, errors }: DataKosProps) => {
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
        {errors.kos_name && <p className="text-red-500 text-sm">{errors.kos_name.message}</p>}
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
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
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
          <option value="putra">Putra</option>
          <option value="putri">Putri</option>
          <option value="campur">Campur</option>
        </select>
        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
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

          <option value="bebas">Bebas</option>
        </select>
        {errors.kos_rules && <p className="text-red-500 text-sm">{errors.kos_rules.message}</p>}
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

          <option value="banyak">banyak</option>
        </select>
        {errors.kos_facilities && (
          <p className="text-red-500 text-sm">{errors.kos_facilities.message}</p>
        )}
      </div>
    </div>
  );
};

export default DataKos;
