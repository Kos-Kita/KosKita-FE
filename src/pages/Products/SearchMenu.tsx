import { useState } from "react";

const SearchMenu = () => {
  const [showCheckboxes, setShowCheckboxes] = useState(false);

  const handleMoreFilterClick = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  return (
    <div className="flex flex-col justify-center items-center pt-12 bg-white">
      <div className="flex gap-5 justify-between px-20  w-full text-lg leading-6 whitespace-nowrap max-w-[1320px] text-neutral-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" srcSet="..." className="max-w-full aspect-[2.22] w-[130px]" />
        <div className="flex gap-5 justify-between items-center pr-20 my-auto max-md:flex-wrap max-md:max-w-full">
          <div className="grow self-stretch my-auto">Beranda</div>
          <div className="self-stretch my-auto">Kontak</div>
          <div className="self-stretch my-auto">Tentang</div>
          <div className="self-stretch my-auto text-green-900">Login</div>
          <img loading="lazy" srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSkX1yki5JoFlmjWL-QcWA72BbKCtzotuYIxJ2L1D_VA&s" className="rounded-full self-stretch w-10 aspect-square" />
        </div>
      </div>
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
            <div className="checkbox-container flex flex-col ml-3">
              <label>
                <input type="checkbox" value="putra" /> Putra
              </label>
              <label>
                <input type="checkbox" value="putri" /> Putri
              </label>
              <label>
                <input type="checkbox" value="putri" /> Harga Range 1.000.000 - 2.000.000
              </label>
              <label>
                <input type="checkbox" value="campur" /> Campur
              </label>
            </div>
          )}
          <div className="mt-7 ml-3 text-base leading-5 whitespace-nowrap text-neutral-900 max-md:ml-2.5">
            <span className="text-lg font-bold leading-6">2 results</span> untuk kosan di area Jakarta Barat
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-16 pb-12 mt-3 w-full max-w-[1300px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mb-10 w-full max-w-[995px] max-md:max-w-full">
          <div className="pr-20 mt-11 bg-zinc-100 rounded-[60px_60px_60px_12px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                <img loading="lazy" srcSet="https://awsimages.detik.net.id/visual/2021/09/10/ilustrasi-kos-kosan-cnbc-indonesiamuhammad-sabki-4_169.jpeg?w=650" className="grow self-stretch w-full aspect-[0.96]" />
              </div>
              <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-8 py-11 max-md:px-5">
                  <div className="mt-8 text-sm leading-4 whitespace-nowrap text-neutral-900">K.Mandi Dalam · Wifi · AC · Kasur</div>
                  <div className="justify-center self-start py-4 pr-4 pl-2 mt-2 text-lg font-bold leading-6 text-black whitespace-nowrap rounded-xl border border-black border-solid bg-white bg-opacity-20">Campur</div>
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

          <div className="pr-20 mt-11 bg-zinc-100 rounded-[60px_60px_60px_12px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                <img loading="lazy" srcSet="https://www.pajak.com/storage/2022/08/indekos-758x490.png" className="grow self-stretch w-full aspect-[0.96]" />
              </div>
              <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-8 py-11 max-md:px-5">
                  <div className="mt-8 text-sm leading-4 whitespace-nowrap text-neutral-900">K.Mandi Dalam · Wifi · AC · Kasur</div>
                  <div className="justify-center self-start py-4 pr-4 pl-2 mt-2 text-lg font-bold leading-6 text-black whitespace-nowrap rounded-xl border border-black border-solid bg-white bg-opacity-20">Campur</div>
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

      <footer className="mt-7 md:py-8 py-5  max-w-full relative bottom-0  border-slate-400 bg-slate-50 shadow-lg w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center px-5 max-md:mt-10">
              <img loading="lazy" srcSet="" className="self-center aspect-[2.22] w-[130px]" />
              <div className="flex gap-3 pr-5 mt-6 max-md:pr-5">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f910ec3e4385de6fea63bc8a586a8b8873bb6dfb0e294c6ad69c5fac1ccf8e9?" className="w-6 aspect-square" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0204845964c28dbc98a55a23ff3098fccfb21d8d2c7567f21fdad24ae3842055?" className="w-6 aspect-square" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9f06e4d00ba166e1598d83fbf0e4362ff98cbe217b8e0508e18fec5ba9ad00b?" className="w-6 aspect-square" />
              </div>
              <div className="mt-3 text-base whitespace-nowrap text-neutral-900">© 2024 Kos Kita</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
            <div className="grow px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-lg leading-6 whitespace-nowrap text-neutral-900 max-md:mt-10">
                    <div className="font-bold">Perusahaan</div>
                    <div className="mt-4">Beranda</div>
                    <div className="mt-4">Tentang</div>
                    <div className="mt-4">Tim Support</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-lg leading-6 whitespace-nowrap text-neutral-900 max-md:mt-10">
                    <div className="font-bold">Penyewa</div>
                    <div className="mt-4">Blog</div>
                    <div className="mt-4">FAQ</div>
                    <div className="mt-4">Karir</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-lg leading-6 whitespace-nowrap text-neutral-900 max-md:mt-10">
                    <div className="font-bold">Privasi</div>
                    <div className="mt-4">Aturan & Ketentuan</div>
                    <div className="mt-4">Kebijakan Privasi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SearchMenu;
