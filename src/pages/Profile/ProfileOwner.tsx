import CardProduct from "@/components/CardProduct";
import Layout from "@/components/Layout";
import { toast } from "@/components/ui/use-toast";
import { getMyKos } from "@/utils/apis/user/api";
import { IMyKosType } from "@/utils/apis/user/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileOwner = () => {
  const navigate = useNavigate();

  const [dataKos, setDataKos] = useState<IMyKosType[]>();
  useEffect(() => {
    getDataKos();
  }, []);
  const getDataKos = async () => {
    try {
      const result = await getMyKos();
      setDataKos(result.data);
    } catch (error) {
      toast({
        description: (error as Error).message,
      });
    }
  };
  console.log(dataKos);
  return (
    <>
      <Layout>
        <div className="max-h-screen overflow-y-scroll kos ">
          <div className="flex flex-col px-8 pb-4 bg-white shadow-sm ">
            <div className="self-center w-full max-w-[1353px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full  py-10">
                  <div className="flex gap-4  items-center p-3  border-slate-300">
                    <img
                      src="https://source.unsplash.com/80x80?person"
                      alt="person"
                      className="rounded-full"
                    />
                    <span className="font-bold text-2xl">Junior</span>
                  </div>
                </div>

                <div className="flex flex-col ml-5 md:ml-0 w-[56%] max-md:ml-0 max-md:w-full  py-6">
                  {!dataKos ? (
                    <div className="flex flex-col grow items-center px-16 py-11 w-full text-sm bg-white rounded shadow-sm text-zinc-900 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                      <div className="flex items-center self-start gap-2 text-lg leading-7 max-md:max-w-full">
                        <img
                          src="https://img.icons8.com/windows/32/smart-home-2.png"
                          alt="home"
                          className="w-[20px]"
                        />
                        <span>Riwayat Kos</span>
                      </div>
                      <div className="w-full">
                        <div className="mt-16 md:text-2xl text-lg font-bold leading-9 whitespace-nowrap max-md:mt-10">
                          Kamu belum posting kos kosan kamu
                        </div>
                        <div className="mt-10 leading-6 md:w-[409px] w-full">
                          Kamu mempunyai kos-kosan? Yuk posting kos-kosan mu dan sewa kos-kosan mu
                          di KosKita.
                        </div>

                        <div className="flex flex-col justify-start w-full">
                          <div className="flex gap-4 mt-14 whitespace-nowrap leading-[157%] max-md:mt-10">
                            <img
                              loading="lazy"
                              srcSet="https://img.icons8.com/dotty/80/buy-for-coins--v2.png"
                              alt="buy-for-coins--v2"
                              className="aspect-[0.96] w-[52px]"
                            />
                            <div className="grow self-center md:text-base text-xs">
                              Tagihan dan kontrak sewa tercatat rapi
                            </div>
                          </div>
                          <div className="flex gap-5 mt-4 whitespace-nowrap leading-[171%]">
                            <img
                              loading="lazy"
                              srcSet="https://img.icons8.com/carbon-copy/100/money.png"
                              className="aspect-[0.96] w-[50px]"
                            />
                            <div className="grow self-start mt-4 md:text-base text-xs">
                              KosKita menjaga keamanan transaksi
                            </div>
                          </div>
                          <div className="flex justify-center items-center gap-5 mt-5 whitespace-nowrap leading-[157%]">
                            <img
                              loading="lazy"
                              srcSet="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/external-payment-method-shopping-and-commerce-smashingstocks-detailed-outline-smashing-stocks.png"
                              alt="external-payment-method-shopping-and-commerce-smashingstocks-detailed-outline-smashing-stocks"
                              className="w-[50px] h-[40px]"
                            />
                            <div className="grow self-center md:text-base text-xs">
                              Cashless, dengan beragam metode pembayaran
                            </div>
                          </div>
                          <div className="justify-center items-center self-end px-16 py-6 mt-7 mr-6 max-w-full text-center text-white whitespace-nowrap bg-lime-600 rounded-sm shadow-sm leading-[171%] w-[476px] max-md:px-5 max-md:mr-2.5">
                            Mulai Buat Kos
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={() => navigate("/buat-kos")}
                        className="justify-center items-center self-end px-16 py-6 mt-7 mr-6 max-w-full text-center text-white whitespace-nowrap bg-lime-600 rounded-sm shadow-sm leading-[171%] w-[476px] max-md:px-5 max-md:mr-2.5"
                      >
                        Mulai Buat Kos
                      </div>
                    </div>
                  ) : (
                    <>
                      {dataKos.map((item) => (
                        <CardProduct
                          id={item.id}
                          kos_name={item.kos_name}
                          rating={`${item.rating}`}
                          address={item.address}
                          kos_facilities={item.kos_facilities}
                          photo_kos={item.photo_kos.main_kos_photo}
                          hidden={true}
                          price={item.price}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProfileOwner;
