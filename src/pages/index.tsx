import Layout from "@/components/Layout";
import imageBackround from "@/assets/image-home.png";
import { MapPin, Search, Star } from "lucide-react";
import carbonClean from "@/assets/carbon_clean.png";
import tag from "@/assets/tag.png";
import signal from "@/assets/signal.png";
import message from "@/assets/message.png";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/utils/context/auth";

const App = () => {
  const navigate = useNavigate();
  const { user, token } = useAuth();
  console.log(user);
  console.log(token);
  return (
    <Layout>
      <div className="min-h-screen">
        <section
          className="w-full h-[767px] bg-no-repeat bg-cover bg-center relative bg-black/10 bg-blend-soft-light"
          style={{
            backgroundImage: `url(${imageBackround})`,
          }}
        >
          <div className="bg-white/85 shadow rounded-tr-3xl rounded-tl-3xl rounded-br-3xl rounded absolute top-48 left-20 p-8 space-y-10 max-w-lg w-full ">
            <h1 className="text-4xl font-semibold">Anda Cari Kost?</h1>
            <p className="text-lg font-medium text-[#181A18]">Cari disini aja dah</p>
            <label
              htmlFor="search"
              className="bg-white/95 p-1 rounded-2xl flex items-center gap-x-3 overflow-hidden"
            >
              <Search className="size-10" />
              <input
                type="text"
                id="search"
                placeholder="Select a address"
                className="w-full h-full outline-none bg-transparent border-none"
              />
              <button className="py-4 px-8 bg-[#4CA02E]  text-white rounded-xl">Search</button>
            </label>
          </div>
        </section>

        <section className="flex flex-col gap-y-3 items-center justify-center py-20">
          <h1 className="text-4xl font-medium">Pilihan Lokasi</h1>
          <div className="grid grid-cols-5 gap-x-16 pt-10">
            {Array.from({ length: 5 }, (_, index) => (
              <div className="flex flex-col items-center gap-y-3" key={index}>
                <span className="font-medium">
                  {index === 0
                    ? "Jakarta Barat"
                    : index === 1
                    ? "Jakarta Utara"
                    : index === 2
                    ? "Jakarta Pusat"
                    : index === 3
                    ? "Jakarta Timur"
                    : "Jakarta Selatan"}
                </span>
                <img
                  src={`/src/assets/jakarta${index + 1}.png`}
                  alt="jakarta"
                  className="rounded-[30px]"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-y-[60px] items-center justify-center py-20">
          <h1 className="text-4xl font-medium">Rekomendasi Kos</h1>
          <Carousel
            className="p-5"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="gap-x-10">
              {Array.from({ length: 8 }, (_, index) => (
                <>
                  <CarouselItem className="basis-1/4" key={index}>
                    <div
                      className="flex flex-col items-center gap-y-1 rounded-3xl overflow-hidden bg-[#F2F0F2] cursor-pointer "
                      key={index}
                      onClick={() => navigate(`/kos/${index + 1}`)}
                    >
                      <img
                        src={`https://source.unsplash.com/300x30${index}?rented-house`}
                        alt="interior"
                        className="w-full h-[300px] object-cover"
                      />
                      <div className="flex flex-col items-center w-full p-4 gap-y-3">
                        <div className="flex items-center justify-between w-full">
                          <h3 className="font-semibold text-xl ">Kostan {index + 1}</h3>
                          <span className="text-xs">Tipe Kost : Putri</span>
                        </div>
                        <div className="flex items-center w-full gap-x-3 text-sm">
                          <div className="flex item-center gap-x-1">
                            <MapPin size={16} />
                            <span>Jakarta</span>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <Star
                              color="yellow"
                              fill={"yellow"}
                              className="stroke-slate-100 drop-shadow-sm"
                              size={20}
                            />
                            <span>{index + 1}.0</span>
                          </div>
                        </div>
                        <div className="flex items-center w-full">
                          <div className="flex flex-col gap-y-2 ">
                            <span className="text-xs">Wc Gratis, Makan Gratis, Minum Bayar</span>

                            <span className="text-sm font-medium text-[#4CA02E]">
                              Rp. 140.000/perbulan
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        <section className="flex flex-col gap-y-3 items-center justify-center py-20">
          <div className="container flex flex-col gap-y-12 items-center justify-center">
            <div className="gap-y-5 flex flex-col items-center">
              <h1 className="text-4xl font-medium text-[#181A18]">Alasan Kenapa KosKita !!!</h1>
              <p className="text-sm text-center max-w-4xl leading-relaxed tracking-wide">
                Koskita adalah platform inovatif yang dirancang khusus untuk memudahkan pencarian
                dan penyewaan kos bagi semua kalangan. Dengan antarmuka yang ramah pengguna dan
                fitur canggih, Koskita membantu Anda menemukan tempat tinggal yang sempurna sesuai
                dengan kebutuhan dan preferensi Anda.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-5">
              {Array.from({ length: 4 }, (_, index) => (
                <div className="bg-[#E2F1E8] rounded-xl flex flex-col gap-y-4 p-10" key={index}>
                  <img
                    src={
                      index === 0 ? carbonClean : index === 1 ? tag : index === 2 ? signal : message
                    }
                    alt="carbohidrat"
                    className="size-14 object-contain"
                  />
                  <h3 className="font-semibold text-xl">
                    {index === 0
                      ? "Hygiene maintained"
                      : index === 1
                      ? "Low price offered"
                      : index === 2
                      ? "High-speed Wi-Fi"
                      : "24/7 support"}
                  </h3>
                  <p className="text-sm">
                    {index === 0
                      ? "Kos nya udah termaintained, jadi kebersihan nya gak perlu diragukan lagi"
                      : index === 1
                      ? "Kos yang di tawarkan koskita harga nya bersahabat kok."
                      : index === 2
                      ? "Wifi yang disediakan sudah mempunyai High-speed wifi, tergantung ketersediaan kos nya."
                      : "Tenang, Owner kos bisa di hubungi 24 jam."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default App;
