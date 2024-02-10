import { IKosType } from "@/utils/apis/kos/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface DataKosProps {
  register: UseFormRegister<IKosType>;
  errors: FieldErrors<IKosType>;
}

const DataKos = ({ register, errors }: DataKosProps) => {
  const categoryKos = ["putra", "putri", "campur"];
  const peraturanKos = [
    "24 JAM",
    "TIDAK BOLEH MEROKOK",
    "TIDAK BOLEH PETS",
    "TIDAK BOLEH PESTA/EVENTS",
    "TIDAK BOLEH PASUTRI",
    "HANYA BISA MAKS. 1 ORANG/ KAMAR",
    "TIDAK BOLEH BAWA ANAK",
    "ADA JAM MALAM UNTUK TAMU",
    "KHUSUS MAHASISWA",
    "KHUSUS KARYAWAN",
    "TAMU BEBAS BERKUNJUNG",
    "TAMU BOLEH MENGINAP",
    "TAMU DILARANG MENGINAP",
    "DENDA KERUSAKAN BARANG KOS",
    "TAMU MENGINAP DIKENAKAN BIAYA",
    "TERMASUK LISTRIK",
  ];
  const fasilitasKos = [
    "WIFI",
    "AC",
    "MEJA DAN KURSI",
    "KASUR",
    "LEMARI",
    "K.MANDI DALAM",
    "KULKAS",
  ];
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
          {categoryKos.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
      </div>
      <div className="flex item-center gap-x-3">
        <label htmlFor="peraturan" className="w-52 whitespace-nowrap">
          Peraturan Kos
        </label>
        <div className="grid grid-cols-4 w-full gap-3">
          {peraturanKos.map((rule) => (
            <div className="flex gap-x-2 items-center text-sm text-slate-600 ">
              <input type="checkbox" {...register("kos_rules")} value={rule} id={rule} />
              <label htmlFor={rule}>{rule}</label>
            </div>
          ))}
        </div>
        {errors.kos_rules && <p className="text-red-500 text-sm">{errors.kos_rules.message}</p>}
      </div>
      <div className="flex item-center gap-x-3">
        <label htmlFor="fasilitas" className="w-52 whitespace-nowrap">
          Fasilitas Kos
        </label>
        <div className="grid grid-cols-4 w-full gap-3">
          {fasilitasKos.map((fasilitas) => (
            <div className="flex gap-x-2 items-center text-sm text-slate-600">
              <input
                type="checkbox"
                {...register("kos_facilities")}
                value={fasilitas}
                id={fasilitas}
              />
              <label htmlFor={fasilitas}>{fasilitas}</label>
            </div>
          ))}
        </div>
        {errors.kos_facilities && (
          <p className="text-red-500 text-sm">{errors.kos_facilities.message}</p>
        )}
      </div>
    </div>
  );
};

export default DataKos;
