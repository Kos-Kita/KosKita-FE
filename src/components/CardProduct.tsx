const CardProduct = () => {
  return (
    <>
      <div className="pr-20 mt-11 bg-zinc-100 rounded-[60px_60px_60px_12px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" srcSet="https://www.pajak.com/storage/2022/08/indekos-758x490.png" className="grow self-stretch w-full " />
          </div>
          <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-8 py-11 max-md:px-5">
              <h2 className="font-bold text-xl">Kostan Rame Agung</h2>
              <div className="flex items-center w-full gap-8 mt-8">
                <div className="text-sm leading-4 gap-5 whitespace-nowrap text-neutral-900">K.Mandi Dalam · Wifi · AC · Kasur</div>
                <div className="text-sm leading-4 gap-5 whitespace-nowrap text-neutral-900">tipe kost: campur</div>
              </div>
              <div className="flex gap-3 justify-between mt-3.5 text-base whitespace-nowrap">
                <div className="grow justify-center px-5 py-1 text-white bg-lime-600 rounded-[30px]">AVAILABLE</div>
                <div className="grow my-auto text-neutral-900">from Rp. 1.500.000 /bulan</div>
              </div>
              <div className="mt-6  text-base whitespace-nowrap text-neutral-900 max-md:ml-2.5 flex justify-star items-center">
                <img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" /> <span>** Lokasi kos kosannya**</span>
              </div>
              <div className="flex gap-5 justify-between mt-8 text-xs font-bold leading-5">
                <div className="flex gap-2 justify-between whitespace-nowrap text-stone-950">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3064243ec75f1730094f8347466f60fab0cc73015f1520a7cd67831cd2fbc934?" className="w-5 aspect-square" />
                  <div className="my-auto">5.0</div>
                </div>
                <div className="flex-auto text-black">Tersisa : 2 kamar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
