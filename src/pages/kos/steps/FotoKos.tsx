const FotoKos = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-y-[40px] p-3 ">
      <div className="flex items-center gap-x-16 ">
        <span className="w-40">Foto Kos Utama Anda</span>
        <label
          htmlFor="fotoUtama"
          className="bg-slate-100 rounded-2xl max-w-sm w-full cursor-pointer p-5 h-40 flex items-center justify-center"
        >
          <div className="border-dashed border-2 rounded-2xl p-8 text-sm text-center text-slate-500">
            Click to browse or drag and drop your files
          </div>
        </label>
        <input id="fotoUtama" type="file" hidden />
      </div>
      <div className="flex items-center gap-x-16 ">
        <span className="w-40">Foto Kos Depan Anda</span>
        <label
          htmlFor="fotoDepan"
          className="bg-slate-100 rounded-2xl max-w-sm w-full cursor-pointer p-5 h-40 flex items-center justify-center"
        >
          <div className="border-dashed border-2 rounded-2xl p-8 text-sm text-center text-slate-500">
            Click to browse or drag and drop your files
          </div>
        </label>
        <input id="fotoDepan" type="file" hidden />
      </div>
      <div className="flex items-center gap-x-16 ">
        <span className="w-40">Foto Kos Belakang Anda</span>
        <label
          htmlFor="fotoBelakang"
          className="bg-slate-100 rounded-2xl max-w-sm w-full cursor-pointer p-5 h-40 flex items-center justify-center"
        >
          <div className="border-dashed border-2 rounded-2xl p-8 text-sm text-center text-slate-500">
            Click to browse or drag and drop your files
          </div>
        </label>
        <input id="fotoBelakang" type="file" hidden />
      </div>
      <div className="flex items-center gap-x-16 ">
        <span className="w-40">Foto Kos Belakang Anda</span>
        <label
          htmlFor="fotoBelakang"
          className="bg-slate-100 rounded-2xl max-w-sm w-full cursor-pointer p-5 h-40 flex items-center justify-center"
        >
          <div className="border-dashed border-2 rounded-2xl p-8 text-sm text-center text-slate-500">
            Click to browse or drag and drop your files
          </div>
        </label>
        <input id="fotoBelakang" type="file" hidden />
      </div>
      <div className="flex items-center gap-x-16 ">
        <span className="w-40">Foto Kamar Depan Anda</span>
        <label
          htmlFor="kamarDepan"
          className="bg-slate-100 rounded-2xl max-w-sm w-full cursor-pointer p-5 h-40 flex items-center justify-center"
        >
          <div className="border-dashed border-2 rounded-2xl p-8 text-sm text-center text-slate-500">
            Click to browse or drag and drop your files
          </div>
        </label>
        <input id="kamarDepan" type="file" hidden />
      </div>
      <div className="flex items-center gap-x-16 ">
        <span className="w-40">Foto Dalam Kamar Anda</span>
        <label
          htmlFor="dalamKamar"
          className="bg-slate-100 rounded-2xl max-w-sm w-full cursor-pointer p-5 h-40 flex items-center justify-center"
        >
          <div className="border-dashed border-2 rounded-2xl p-8 text-sm text-center text-slate-500">
            Click to browse or drag and drop your files
          </div>
        </label>
        <input id="dalamKamar" type="file" hidden />
      </div>
    </div>
  );
};

export default FotoKos;
