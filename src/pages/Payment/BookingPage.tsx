import Layout from "@/components/Layout";
import NumberFormatter from "@/components/NumberFormatter";
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/utils/context/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { detail } from "@/utils/types/type";
import { detailPayment } from "@/utils/types/type";
import { formatTime } from "./functions";
import { pembayaranType } from "@/utils/types/type";
import { calculateEndDate } from "./functions";

const BookingPage = () => {
  const location = useLocation();
  const id = location.state.kos_id;
  const startDate = location.state.endDate;
  const endDate = calculateEndDate(startDate);
  const baseurl = import.meta.env.VITE_BASE_URL;
  const [showPopup, setShowPopup] = useState<Boolean>(false);
  const { user } = useAuth();
  const token = localStorage.getItem("token");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [popupTimer, setPopupTimer] = useState<number>(24 * 60 * 60 * 1000);
  const handlePaymentMethodChange = (event: any) => {
    setSelectedPaymentMethod(event.target.value);
  };
  const [data, setData] = useState<detail>({
    price: "",
  });

  const copyToClipboard = () => {
    const vaCodeInput = document.createElement("input");
    let valueToCopy = "";
    if (dPayment.virtual_number) {
      valueToCopy = dPayment.virtual_number;
    }
    vaCodeInput.value = valueToCopy;
    document.body.appendChild(vaCodeInput);
    vaCodeInput.select();
    document.execCommand("copy");
    document.body.removeChild(vaCodeInput);

    toast({
      description: "Berhasil disalin",
    });
  };

  const [dPayment, setPayment] = useState<detailPayment>({
    booking_code: "",
    virtual_number: "",
    total: "",
  });

  const [pembayaran, setPembayaran] = useState<pembayaranType>({
    payment_type: "",
    kos_id: 0,
    bank: "",
  });

  const getData = async () => {
    try {
      const response = await axios.get(`${baseurl}/kos/${id}`);
      setData(response.data.data);
      setPembayaran((prev) => ({ ...prev, payment_type: "bank_transfer" }));
      setPembayaran((prev) => ({ ...prev, bank: selectedPaymentMethod }));
      setPembayaran((prev) => ({ ...prev, kos_id: id }));
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error.response.data.message,
      });
    }
  };

  const createPayment = async () => {
    try {
      const response = await axios.post(`https://l3n.my.id/booking`, pembayaran, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPayment({
        booking_code: response.data.data.booking_code,
        total: response.data.data.total,
        virtual_number: response.data.data.virtual_number,
      });
      console.log(response);
      setShowPopup(!showPopup);
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: "Server Pusat Terganggu coba Metode Pembayaran Lainnya",
      });
    }
  };

  const closePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    getData();
  }, [selectedPaymentMethod]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPopupTimer((prev) => prev - 1000);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [popupTimer]);

  return (
    <>
      <Layout>
        <div className="flex flex-col pb-7 bg-white border-t-2 border-b-slate-50">
          <div className="flex flex-col items-center px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="self-stretch mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col pb-4 font-bold leading-[133%] text-neutral-900 max-md:mt-10 max-md:max-w-full">
                    <div className="text-5xl leading-[59.8px] max-md:max-w-full max-md:text-4xl">Booking review</div>
                    <div className="flex gap-5 justify-start mt-16 text-lg max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                      <div className="font-semibold">Harga Kos-kosan perbulan</div>
                      <div className="flex-auto">{<NumberFormatter value={parseInt(data.price)} />}</div>
                    </div>
                    <div className="flex gap-5 justify-between mt-8 text-2xl max-md:flex-wrap max-md:max-w-full">
                      <div>Total</div>
                      <div className="flex-auto">{<NumberFormatter value={parseInt(data.price)} />}</div>
                    </div>
                    <div className="mt-9 text-base tracking-wide text-black max-md:max-w-full">Tanggal kamu mulai ngekos </div>
                    <div className="flex gap-5 justify-start mt-3.5 text-xl tracking-wide leading-8 text-black text-opacity-90 max-md:flex-wrap max-md:max-w-full">
                      <div className="flex gap-5 justify-between px-9 py-3 rounded-md bg-neutral-800 bg-opacity-10 max-md:px-5">
                        <div className="flex-auto">{`${new Date(startDate).toLocaleDateString()}`}</div>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0a0c902b8a9baeaddb815dae11ad0409613584194195c98488cdeb0e797b521?" className="my-auto w-6 aspect-square" />
                      </div>
                      <div className="flex gap-5 justify-between px-9 py-3 rounded-md bg-neutral-800 bg-opacity-10 max-md:px-5">
                        <div className="flex-auto">{`${new Date(endDate).toLocaleDateString()}`}</div>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0a0c902b8a9baeaddb815dae11ad0409613584194195c98488cdeb0e797b521?" className="my-auto w-6 aspect-square" />
                      </div>
                    </div>
                    <div className="flex gap-2.5 justify-between mt-10 text-sm leading-6 bg-white rounded-md  text-slate-900 max-md:flex-wrap max-md:max-w-full">
                      <select value={selectedPaymentMethod} onChange={handlePaymentMethodChange} className="grow focus:outline-none w-[45vw] md:w-[22vw] p-4 bg-white rounded border border-solid shadow-sm border-zinc-400 max-md:pr-5">
                        <option value="" disabled selected hidden>
                          Metode Pembayaran
                        </option>
                        <option value="bni">Virtual Account Bni</option>
                        <option value="bri">Virtual Account Bri</option>
                        <option value="bca">Virtual Account Bca</option>
                        <option value="permata">Virtual Account Permata</option>
                      </select>
                    </div>

                    <button onClick={createPayment} className="justify-center self-center px-10 py-3 mt-10 text-lg text-white whitespace-nowrap bg-lime-600 rounded-[40px] max-md:px-5">
                      Confirm and pay
                    </button>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-3 text-lg text-neutral-900 max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col bg-zinc-100 rounded-[30px] max-md:max-w-full overflow-hidden">
                      <img loading="lazy" srcSet="https://infokost.id/wp-content/uploads/2022/02/Ruoptions-HD-Depok_Juni2021_11_edited-1.jpg" className="w-full aspect-[1.85] max-md:max-w-full" />
                      <div className="flex flex-col px-10 pb-10 mt-10 max-md:px-5 max-md:max-w-full">
                        <div className="font-bold leading-[133%] text-center max-md:max-w-full">Tips ngekos!</div>
                        <div className="mt-5 text-sm leading-6 text-center max-md:max-w-full">
                          Usahakan sebelum kamu payment untuk mengkos, kamu <br />
                          menghubungi pihak penyedia kos-kosan di menu chat.
                          <br />
                          Untuk meminimalisir kesalahpahaman atau sesuatu yang <br />
                          tidak di inginkan. &gt;,&lt;
                        </div>
                      </div>
                    </div>

                    {showPopup && (
                      <>
                        <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
                        <div className="fixed inset-0 flex items-center justify-center z-50 font-Poppins">
                          <div className="bg-white w-[25rem] p-8 rounded shadow-lg">
                            <p className="my-2 text-2xl font-semibold text-lime-600">Detail Pembayaran</p>
                            <p className="my-2 text-sm">Nama: {`${user.name}`}</p>
                            <hr />
                            <p className="my-2 text-sm">Metode Pembayaran: {selectedPaymentMethod}</p>
                            <hr />
                            <p className="my-2 text-sm font-semibold">
                              Total Pembayaran:
                              <span className="font-bold text-lg ml-2">
                                <NumberFormatter value={parseInt(dPayment.total)} />
                              </span>
                            </p>
                            <div className="mb-4 bg-orange-200 p-3 flex items-center justify-between rounded text-lg font-bold">
                              <span> Kode VA : {dPayment.virtual_number}</span>
                              <img className="cursor-pointer h-[20px] w-[20px]" width="24" height="24" src="https://img.icons8.com/material-sharp/24/copy.png" alt="copy" onClick={copyToClipboard} />
                            </div>

                            <p className="my-2 text-sm flex justify-end">
                              Waktu Berakhir: <span className="text-red-500 ml-2"> {formatTime(popupTimer)}</span>
                            </p>
                            <div className="flex gap-3">
                              <button className="bg-gray-500 text-white px-4 py-2 mt-5 rounded hover:bg-gray-600" onClick={closePopup}>
                                Tutup
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    <div className="flex flex-col pl-10">
                      <div className="self-start my-6  font-bold whitespace-nowrap leading-[133%] max-md:mt-10 max-md:ml-2.5">Jenis pembayaran yang di dukung.</div>
                      <div className="flex gap-5 justify-between self-start mt-2.5 text-sm leading-6 text-black max-md:mr-2.5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c33a2eb40c589f742c070f1deee579712c7e39763e83012190e5ea1718316dd?" className="mt-3 aspect-[1.59] w-[38px]" />
                        <div className="flex-auto my-auto">BRI Virtual Account</div>
                      </div>
                      <div className="flex gap-5 justify-between self-start mt-2.5 text-sm leading-6 text-black max-md:mr-2.5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c738610508bb3ef8251eeac8b19e91ce93c20b12114b96b4faed587a2c5bfa8?" className="aspect-[1.59] w-[38px]" />
                        <div className="flex-auto my-auto">BNI Virtual Account</div>
                      </div>
                      <div className="flex gap-5 justify-between self-start mt-2.5 text-sm leading-6 text-black max-md:mr-2.5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6e204ab331675835af9e70459d39780cd517182706e609fc76674cd7baa5cdf?" className="aspect-[1.59] w-[38px]" />
                        <div className="flex-auto my-auto">BCA Virtual Account</div>
                      </div>
                      <div className="flex gap-5 justify-between self-start mt-2.5 text-sm leading-6 text-black max-md:mr-2.5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0ff8b84e12e7f63f7e9d64f8776e59fbfb641d358121e0cc2ee0b25cd4d206c?" className="mt-2.5 aspect-[1.59] w-[38px]" />
                        <div className="flex-auto my-auto">Permata Virtual Account</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BookingPage;
