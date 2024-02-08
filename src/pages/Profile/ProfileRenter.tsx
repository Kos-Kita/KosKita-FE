import CardProduct from "@/components/CardProduct";
import Layout from "@/components/Layout";
import { useState } from "react";

const ProfileRenter = () => {
  const [status, setStatus] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleStatus = () => {
    setStatus(!status);
  };

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col px-8 pb-4 bg-white shadow-sm ">
          <div className="self-center w-full max-w-[1353px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py-11 pr-12 pl-6 w-full text-base leading-7 bg-white rounded border border-solid shadow-sm border-stone-400 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                  <form>
                    <div className="flex justify-center items-center px-16 text-sm font-medium leading-6 text-black whitespace-nowrap bg-white rounded max-md:px-5 max-md:max-w-full">
                      <div className="flex flex-col items-center max-w-full w-[118px]">
                        <img loading="lazy" srcSet="https://source.unsplash.com/80x80?person" className="w-full rounded-full " />
                        <div className="justify-center px-3 py-1.5 mt-5 rounded-md bg-zinc-300">Ubah Foto</div>
                      </div>
                    </div>

                    <div className="flex gap-5 justify-between mt-5 whitespace-nowrap text-zinc-900 max-md:flex-wrap max-md:max-w-full">
                      <div className="self-center">Name</div>
                      <div className="input-container">
                        <input required type="text" placeholder="Masukan Nama" className=" grow focus:outline-none w-[45vw] md:w-[22vw] p-4 bg-white rounded border border-solid shadow-sm border-zinc-400" />
                      </div>
                    </div>

                    <div className="flex gap-5 justify-between mt-5 text-zinc-900 max-md:flex-wrap max-md:max-w-full">
                      <div className="flex-auto self-center">Jenis Kelamin</div>
                      <div className="input-container">
                        <select className="grow focus:outline-none w-[45vw] md:w-[22vw] p-4 bg-white rounded border border-solid shadow-sm border-zinc-400 max-md:pr-5">
                          <option value="" disabled selected hidden>
                            Pilih Jenis Kelamin
                          </option>
                          <option value="laki-laki">Laki-Laki</option>
                          <option value="perempuan">Perempuan</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex gap-5 justify-between mt-4 whitespace-nowrap text-zinc-900 max-md:flex-wrap max-md:max-w-full">
                      <div className="self-center ">Username</div>
                      <div className="input-container">
                        <input required type="text" placeholder="Masukan Username" className="grow  focus:outline-none w-[45vw] md:w-[22vw] p-4 bg-white rounded border border-solid shadow-sm border-zinc-400 max-md:pr-5" />
                      </div>
                    </div>
                    <div className="flex gap-5 justify-between mt-5 whitespace-nowrap max-md:flex-wrap  max-md:max-w-full">
                      <div className="self-center  text-black">Email</div>
                      <div className="input-container">
                        <input required type="text" placeholder="Masukan Email" className="grow  focus:outline-none w-[45vw] md:w-[22vw] p-4 bg-white rounded border border-solid shadow-sm border-zinc-400 text-zinc-900 max-md:pr-5" />
                      </div>
                    </div>

                    <div className="flex gap-5 justify-between items-start self-end mt-32 max-w-full w-full max-md:mt-10">
                      <div className="flex-auto md:self-end md:mt-9 md:text-base text-sm text-sky-400 cursor-pointer" onClick={handlePopup}>
                        Ganti Password
                      </div>
                      <div className="flex gap-5 self-start text-center text-white whitespace-nowrap">
                        <button type="submit" className="grow justify-center px-3 py-2 md:px-4 md:py-3 bg-lime-600 rounded shadow-sm">
                          Edit Akun
                        </button>
                        <button className="grow justify-center md:px-3 md:py-4 px-3 py-2 bg-red-600 rounded shadow-sm">Delete Akun</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="flex flex-col ml-5 md:ml-0 w-[56%] max-md:ml-0 max-md:w-full border-[0.3px]">
                <div className="flex flex-col grow items-center px-16 py-11 w-full text-sm bg-white rounded shadow-sm text-zinc-900 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                  <div className="flex items-center self-start gap-2 text-lg leading-7 max-md:max-w-full">
                    <img src="https://img.icons8.com/windows/32/smart-home-2.png" alt="home" className="w-[20px]" />
                    <span>Riwayat Kos</span>
                  </div>
                  {status ? (
                    <div>
                      <div className="mt-16 text-2xl font-bold leading-9 whitespace-nowrap max-md:mt-10">Kamu belum menyewa kos</div>
                      <div className="mt-10 leading-6 md:w-[409px] w-full">Yuk, sewa di Koskita untuk aktifkan halaman ini Coba cara ngekos modern dengan unik</div>

                      <div className="flex flex-col justify-start w-full">
                        <div className="flex gap-4 mt-14 whitespace-nowrap leading-[157%] max-md:mt-10">
                          <img loading="lazy" srcSet="https://img.icons8.com/dotty/80/buy-for-coins--v2.png" alt="buy-for-coins--v2" className="aspect-[0.96] w-[52px]" />
                          <div className="grow self-center md:text-base text-xs">Tagihan dan kontrak sewa tercatat rapi</div>
                        </div>
                        <div className="flex gap-5 mt-4 whitespace-nowrap leading-[171%]">
                          <img loading="lazy" srcSet="https://img.icons8.com/carbon-copy/100/money.png" className="aspect-[0.96] w-[50px]" />
                          <div className="grow self-start mt-4 md:text-base text-xs">KosKita menjaga keamanan transaksi</div>
                        </div>
                        <div className="flex justify-center items-center gap-5 mt-5 whitespace-nowrap leading-[157%]">
                          <img
                            loading="lazy"
                            srcSet="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/external-payment-method-shopping-and-commerce-smashingstocks-detailed-outline-smashing-stocks.png"
                            alt="external-payment-method-shopping-and-commerce-smashingstocks-detailed-outline-smashing-stocks"
                            className="w-[50px] h-[40px]"
                          />
                          <div className="grow self-center md:text-base text-xs">Cashless, dengan beragam metode pembayaran</div>
                        </div>
                        <div
                          className="justify-center items-center self-end px-16 py-6 mt-7 mr-6 max-w-full text-center text-white whitespace-nowrap bg-lime-600 rounded-sm shadow-sm leading-[171%] w-[476px] max-md:px-5 max-md:mr-2.5"
                          onClick={handleStatus}
                        >
                          Mulai cari dan sewa kos
                        </div>
                      </div>
                    </div>
                  ) : (
                    <CardProduct hidden={true} />
                  )}

                  {showPopup && (
                    <div>
                      <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
                      <div className="fixed inset-0 flex items-center justify-center z-50 font-Poppins">
                        <form>
                          <div className="flex flex-col px-16 py-8 text-sm text-black bg-white rounded-2xl shadow-2xl max-w-[772px] max-md:px-5">
                            <div className="text-5xl font-bold max-md:max-w-full">Ganti Password</div>
                            <div className="mt-3.5 text-xs max-md:max-w-full">Password saat ini</div>
                            <input
                              required
                              type={showPassword ? "password" : "text"}
                              className="justify-center p-3 mt-1.5 whitespace-nowrap bg-white rounded-md border border-solid shadow-sm border-slate-600 border-opacity-40 max-md:max-w-full"
                              placeholder="*******"
                            />

                            <div className="mt-8 text-xs max-md:max-w-full">Password Baru</div>
                            <input
                              required
                              type={showPassword ? "password" : "text"}
                              className="justify-center p-3 mt-1.5 whitespace-nowrap bg-white rounded-md border border-solid shadow-sm border-slate-600 border-opacity-40 max-md:max-w-full"
                              placeholder="*******"
                            />

                            <div className="mt-8 text-xs max-md:max-w-full">Konfirmasi Password Baru</div>
                            <input
                              required
                              type={showPassword ? "password" : "text"}
                              className="justify-center p-3 mt-1.5 whitespace-nowrap bg-white rounded-md border border-solid shadow-sm border-slate-600 border-opacity-40 max-md:max-w-full"
                              placeholder="*******"
                            />

                            <span onClick={togglePasswordVisibility} className="mt-5">
                              {showPassword ? (
                                <div className="flex gap-3  items-center">
                                  <img width="30" height="30" src="https://img.icons8.com/ios/50/closed-eye.png" alt="closed-eye" /> Tampilkan Password
                                </div>
                              ) : (
                                <div className="flex gap-3  items-center">
                                  <img width="30" height="30" src="https://img.icons8.com/tapes/40/experimental-visible-tapes.png" alt="experimental-visible-tapes" /> Sembunyikan Password
                                </div>
                              )}
                            </span>

                            <div className="flex gap-2 self-start px-6 py-3 mt-12 font-bold text-white whitespace-nowrap bg-blue-600 rounded-md max-md:px-5 max-md:mt-10">
                              <button type="submit">Kirim</button>
                              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/980f3594605ffd027f9c5a8ef0433b000d24e7cc0655eb3e461f034ad4f7722d?" className="w-4 aspect-square" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default ProfileRenter;
