import { IKosDetail, IKosType } from "@/utils/apis/kos/types";
import { useEffect, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface FotoKosProps {
  register: UseFormRegister<IKosType>;
  errors: FieldErrors<IKosType>;
  dataKos?: IKosDetail;
}
interface DataImageInput {
  main_photo: string;
  front_photo: string;
  back_photo: string;
  frontRoom_photo: string;
  insideRoom_photo: string;
}
const FotoKos = ({ register, errors, dataKos }: FotoKosProps) => {
  const [image, setImage] = useState<Partial<DataImageInput>>();
  useEffect(() => {
    setImage({
      main_photo: dataKos?.photo_kos.main_kos_photo,
      front_photo: dataKos?.photo_kos.front_kos_photo,
      back_photo: dataKos?.photo_kos.back_kos_photo,
      frontRoom_photo: dataKos?.photo_kos.front_room_photo,
      insideRoom_photo: dataKos?.photo_kos.inside_room_photo,
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-y-[40px] p-3 ">
      <div className="flex items-center gap-x-16 ">
        <span className="w-40">Foto Kos Utama Anda</span>
        <label
          htmlFor="fotoUtama"
          className="bg-slate-100 rounded-2xl max-w-sm w-full cursor-pointer p-5 h-full flex items-center justify-center overflow-hidden"
        >
          {image?.main_photo || dataKos?.photo_kos.main_kos_photo ? (
            <img
              src={image?.main_photo ?? dataKos?.photo_kos.main_kos_photo}
              alt="main-photo"
              className="aspect-[2/2] object-fill"
            />
          ) : (
            <div className="border-dashed border-2 rounded-2xl p-8 text-sm text-center text-slate-500">
              Click to browse or drag and drop your files
            </div>
          )}
        </label>
        {errors.main_kos_photo && (
          <p className="text-red-500 text-sm">{errors.main_kos_photo.message as string}</p>
        )}
        <input
          id="fotoUtama"
          type="file"
          hidden
          {...register("main_kos_photo", {
            onChange: (e: any) => {
              setImage({ ...image, main_photo: URL.createObjectURL(e.target.files[0]) });
            },
          })}
        />
      </div>
      <div className="flex items-center gap-x-16 ">
        <span className="w-40">Foto Kos Depan Anda</span>
        <label
          htmlFor="fotoDepan"
          className="bg-slate-100 rounded-2xl max-w-sm w-full cursor-pointer p-5 h-full flex items-center justify-center"
        >
          {image?.front_photo || dataKos?.photo_kos.front_kos_photo ? (
            <img
              src={image?.front_photo ?? dataKos?.photo_kos.front_kos_photo}
              alt="main-photo"
              className="aspect-[2/2] object-fill"
            />
          ) : (
            <div className="border-dashed border-2 rounded-2xl p-8 text-sm text-center text-slate-500">
              Click to browse or drag and drop your files
            </div>
          )}
        </label>
        {errors.front_kos_photo && (
          <p className="text-red-500 text-sm">{errors.front_kos_photo.message as string}</p>
        )}
        <input
          id="fotoDepan"
          type="file"
          hidden
          {...register("front_kos_photo", {
            onChange: (e: any) => {
              setImage({ ...image, front_photo: URL.createObjectURL(e.target.files[0]) });
            },
          })}
        />
      </div>
      <div className="flex items-center gap-x-16 ">
        <span className="w-40">Foto Kos Belakang Anda</span>
        <label
          htmlFor="fotoBelakang"
          className="bg-slate-100 rounded-2xl max-w-sm w-full cursor-pointer p-5 h-full flex items-center justify-center"
        >
          {image?.back_photo || dataKos?.photo_kos.back_kos_photo ? (
            <img
              src={image?.back_photo ?? dataKos?.photo_kos.back_kos_photo}
              alt="main-photo"
              className="aspect-[2/2] object-fill"
            />
          ) : (
            <div className="border-dashed border-2 rounded-2xl p-8 text-sm text-center text-slate-500">
              Click to browse or drag and drop your files
            </div>
          )}
        </label>
        {errors.back_kos_photo && (
          <p className="text-red-500 text-sm">{errors.back_kos_photo.message as string}</p>
        )}
        <input
          id="fotoBelakang"
          type="file"
          hidden
          {...register("back_kos_photo", {
            onChange: (e: any) => {
              setImage({ ...image, back_photo: URL.createObjectURL(e.target.files[0]) });
            },
          })}
        />
      </div>
      <div className="flex items-center gap-x-16 ">
        <span className="w-40">Foto Kamar Depan Anda</span>
        <label
          htmlFor="kamarDepan"
          className="bg-slate-100 rounded-2xl max-w-sm w-full cursor-pointer p-5 h-full flex items-center justify-center"
        >
          {image?.frontRoom_photo || dataKos?.photo_kos.front_room_photo ? (
            <img
              src={image?.frontRoom_photo ?? dataKos?.photo_kos.front_room_photo}
              alt="main-photo"
              className="aspect-[2/2] object-fill"
            />
          ) : (
            <div className="border-dashed border-2 rounded-2xl p-8 text-sm text-center text-slate-500">
              Click to browse or drag and drop your files
            </div>
          )}
        </label>
        {errors.front_room_photo && (
          <p className="text-red-500 text-sm">{errors.front_room_photo.message as string}</p>
        )}
        <input
          id="kamarDepan"
          type="file"
          hidden
          {...register("front_room_photo", {
            onChange: (e: any) => {
              setImage({ ...image, frontRoom_photo: URL.createObjectURL(e.target.files[0]) });
            },
          })}
        />
      </div>
      <div className="flex items-center gap-x-16 ">
        <span className="w-40">Foto Dalam Kamar Anda</span>
        <label
          htmlFor="dalamKamar"
          className="bg-slate-100 rounded-2xl max-w-sm w-full cursor-pointer p-5 h-full flex items-center justify-center"
        >
          {image?.insideRoom_photo || dataKos?.photo_kos.inside_room_photo ? (
            <img
              src={image?.insideRoom_photo ?? dataKos?.photo_kos.inside_room_photo}
              alt="main-photo"
              className="aspect-[2/2] object-fill"
            />
          ) : (
            <div className="border-dashed border-2 rounded-2xl p-8 text-sm text-center text-slate-500">
              Click to browse or drag and drop your files
            </div>
          )}
        </label>
        {errors.inside_room_photo && (
          <p className="text-red-500 text-sm">{errors.inside_room_photo.message as string}</p>
        )}
        <input
          id="dalamKamar"
          type="file"
          hidden
          {...register("inside_room_photo", {
            onChange: (e: any) => {
              setImage({ ...image, insideRoom_photo: URL.createObjectURL(e.target.files[0]) });
            },
          })}
        />
      </div>
    </div>
  );
};

export default FotoKos;
