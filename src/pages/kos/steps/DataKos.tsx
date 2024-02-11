import Checkbox from "@/components/Checkbox";
import { IKosType, fasilitasKos, peraturanKos } from "@/utils/apis/kos/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface DataKosProps {
  register: UseFormRegister<IKosType>;
  errors: FieldErrors<IKosType>;
}

const DataKos = ({ register, errors }: DataKosProps) => {
  const categoryKos = ["putra", "putri", "campur"];

  return (
    <div className="max-w-6xl  mx-auto flex flex-col gap-y-[40px] p-3">
      <div className="flex items-center gap-x-3">
        <label htmlFor="namaKos" className="w-52 whitespace-nowrap">
          Nama Kos Anda
        </label>
        <input
          {...register("kos_name")}
          type="text"
          id="namakos"
          className="border px-4 py-2 rounded-lg w-full"
        />
        {errors.kos_name && (
          <p className="text-red-500 text-sm whitespace-nowrap ">{errors.kos_name.message}</p>
        )}
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
        {errors.description && (
          <p className="text-red-500 text-sm whitespace-nowrap">{errors.description.message}</p>
        )}
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
          {categoryKos.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm whitespace-nowrap">{errors.category.message}</p>
        )}
      </div>
      <div className="flex item-center gap-x-3">
        <label htmlFor="peraturan" className="w-52 whitespace-nowrap">
          Peraturan Kos
        </label>
        <div className="grid grid-cols-4 w-full gap-3">
          {peraturanKos.map((rule) => (
            <Checkbox type="rule" label={rule} register={register} />
          ))}
        </div>
        {errors.kos_rules && (
          <p className="text-red-500 text-sm whitespace-nowrap">{errors.kos_rules.message}</p>
        )}
      </div>
      <div className="flex item-center gap-x-3">
        <label htmlFor="fasilitas" className="w-52 whitespace-nowrap">
          Fasilitas Kos
        </label>
        <div className="grid grid-cols-4 w-full gap-3">
          {fasilitasKos.map((fasilitas) => (
            <Checkbox type="facility" label={fasilitas} register={register} />
          ))}
        </div>
        {errors.kos_facilities && (
          <p className="text-red-500 text-sm whitespace-nowrap">{errors.kos_facilities.message}</p>
        )}
      </div>
    </div>
  );
};

export default DataKos;
