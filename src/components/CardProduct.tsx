import { FC, ReactEventHandler } from "react";
import NumberFormatter from "./NumberFormatter";

export interface searchKos {
  hidden: boolean;
  kos_name: string | undefined;
  rating: string | undefined;
  price: number | undefined;
  rooms?: string | undefined;
  category: string | undefined;
  address?: string | undefined;
  kos_facilities?: string | undefined;
  photo_kos: string | any | undefined;
  direct?: ReactEventHandler | undefined;
  id?: any | undefined;
}

const getSentencesAfterNCommas = (text: string | any, n: number) => {
  const sentences = text.split(". "); // Pisahkan kalimat
  const resultSentences = sentences.map((sentence: any) => {
    const commaIndex = [];
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === ",") {
        commaIndex.push(i);
      }
      if (commaIndex.length === n) {
        break;
      }
    }
    const result = commaIndex.length >= n ? sentence.slice(commaIndex[n - 1] + 1) : sentence;
    return result.trim();
  });

  return resultSentences;
};

const CardProduct: FC<searchKos> = (props: searchKos) => {
  const { hidden, kos_name, rating, category, price, rooms, address, kos_facilities, photo_kos, direct } = props;
  return (
    <>
      <div className=" md:pr-20 mt-11 overflow-hidden bg-zinc-100 rounded-[60px_60px_60px_12px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-3 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full overflow-hidden">
            <img loading="lazy" srcSet={photo_kos} className="w-full md:h-[20rem] h-[12rem]  border-2 border-slate-100 " />
          </div>
          <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-5 md:py-11 max-md:px-5">
              <h2 onClick={direct} className="cursor-pointer font-bold text-xl hover:text-2xl">
                {kos_name}
              </h2>
              <div className="flex items-center w-full gap-5 mt-4 md:mt-8 flex-wrap">
                <div className="text-sm leading-4 gap-5 whitespace-nowrap text-neutral-900">{kos_facilities}</div>
                {!hidden && <div className="text-sm leading-4 gap-5 whitespace-nowrap text-neutral-900">tipe kost: {category}</div>}
              </div>
              <div>
                <div className="flex gap-3 justify-between mt-3.5 text-base whitespace-nowrap">
                  {!hidden && <div className=" justify-center px-5 py-1 text-white bg-lime-600 rounded-[30px]">AVAILABLE</div>}
                  <div className="grow my-auto text-neutral-900">
                    dari <NumberFormatter value={price} /> /bulan
                  </div>
                </div>
              </div>

              <div className="mt-6  text-base whitespace-nowrap text-neutral-900 max-md:ml-2.5 flex gap-3 justify-start items-center">
                <img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" /> <span className="text-xs w-full ">{getSentencesAfterNCommas(address, 4)}</span>
              </div>
              <div className="flex gap-5 justify-between mt-8 text-xs font-bold leading-5">
                <div className="flex gap-2 justify-between whitespace-nowrap text-stone-950">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3064243ec75f1730094f8347466f60fab0cc73015f1520a7cd67831cd2fbc934?" className="w-5 aspect-square" />
                  <div className="my-auto">{rating}</div>
                </div>
                {!hidden && <div className="flex-auto text-black">Tersisa : {rooms} kamar</div>}
              </div>
              {hidden && <span className="text-red-500 mt-3">Kadaluarsa</span>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
