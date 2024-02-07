import Layout from "@/components/Layout";
import { useState } from "react";

const SearchMenu = () => {
  const [showCheckboxes, setShowCheckboxes] = useState(false);

  const handleMoreFilterClick = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center border-t-2 border-b-slate-50 bg-white">
        <div className="flex flex-col items-center self-stretch px-16 pt-5 pb-10 mt-2.5 w-full text-lg font-bold leading-6 bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-start w-full max-w-[1064px] max-md:max-w-full">
            <div className="flex gap-5 justify-between self-stretch py-1.5 pr-1.5 pl-10 w-full whitespace-nowrap bg-white border-4 border-solid border-[color:var(--Green,#4CA02E)] rounded-[40px] max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
              <div className="flex gap-3 my-auto text-neutral-900">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b47326f4402e3d3079778f9715c62d6008fc9e571445de53fc761fb2497a593?" className="my-auto w-5 aspect-square" />
                <input type="text" placeholder="Cari Kota" className="grow border-none focus:outline-none w-[60vw]" />
              </div>
              <button className="cursor-pointer justify-center px-10 py-3 text-white bg-lime-600 rounded-[40px] max-md:px-5">Search</button>
            </div>

            <button onClick={handleMoreFilterClick} className="flex gap-5 justify-center items-center p-3 w-1/6 my-4 border-[0.5px] text-white rounded-full bg-lime-600">
              <span>More Filters</span>
              <img width="20" height="20" src="https://img.icons8.com/badges/48/sort-down.png" alt="sort-down" />
            </button>

            {showCheckboxes && (
              <div className="checkbox-container flex flex-col ml-3 shadow-md p-3 rounded-md">
                <label className="font-medium">
                  <input type="checkbox" value="putra" /> Putra
                </label>
                <label className="font-medium">
                  <input type="checkbox" value="putri" /> Putri
                </label>
                <label className="font-medium">
                  <input type="checkbox" value="1.000.000" /> Harga Range 1.000.000 - 2.000.000
                </label>
                <label className="font-medium">
                  <input type="checkbox" value="campur" /> Campur
                </label>
              </div>
            )}
            <div className="mt-7 ml-3 text-base leading-5 whitespace-nowrap text-neutral-900 max-md:ml-2.5">
              <span className="text-lg font-bold leading-6">1 results</span> untuk kosan di area Jakarta Barat
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center px-16 pb-12 mt-3 w-full max-w-[1300px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mb-10 w-full max-w-[995px] max-md:max-w-full">
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

            <div className="flex gap-1.5 self-center mt-11 text-sm font-semibold whitespace-nowrap text-zinc-800 max-md:mt-10">
              <div className="justify-center px-1 py-2 bg-white rounded-lg aspect-[1.16] text-stone-300">Prev</div>
              <div className="justify-center items-center px-3 h-8 text-white bg-lime-600 rounded-lg aspect-square">1</div>
              <div className="justify-center items-center px-3 h-8 bg-white rounded-lg border border-solid aspect-square border-zinc-100">2</div>
              <div className="justify-center items-center px-3 h-8 bg-white rounded-lg border border-solid aspect-square border-zinc-100">3</div>
              <div className="justify-center items-center px-2.5 h-8 bg-white rounded-lg aspect-square">...</div>
              <div className="justify-center items-center px-2 h-8 bg-white rounded-lg border border-solid aspect-square border-zinc-100">10</div>
              <div className="justify-center px-1 py-2 bg-white rounded-lg aspect-[1.19]">Next</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchMenu;
