const HargaKos = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-y-[60px] px-3 py-20">
      <div className="flex item-center gap-x-3">
        <label htmlFor="harga" className="w-52 whitespace-nowrap">
          Harga
        </label>
        <input type="text" id="harga" className="border px-4 py-2 rounded-lg w-full" />
      </div>
      <div className="flex item-center gap-x-3">
        <label htmlFor="JumlahKos" className="w-52 whitespace-nowrap">
          Jumlah Kos
        </label>
        <input type="text" id="JumlahKos" className="border px-4 py-2 rounded-lg w-full" />
      </div>
    </div>
  );
};

export default HargaKos;
