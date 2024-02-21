import BookingChart from "@/components/Bookingchart";
import Layout from "@/components/Layout";
import { useAuth } from "@/utils/context/auth";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import icon from "../../assets/Icon.png";
import { dataBookType } from "@/utils/apis/admin/type";
import { dataBookTotal } from "@/utils/apis/admin/api";

const Dashboard = () => {
  const { user } = useAuth();
  const [dataBook, setDataBook] = useState<dataBookType>({
    total_user: "",
    total_booking: "",
    total_kos: "",
    total_booking_per_month: [],
  });
  const bookingData = [
    dataBook.total_booking_per_month.Januari,
    dataBook.total_booking_per_month.Februari,
    dataBook.total_booking_per_month.Maret,
    dataBook.total_booking_per_month.April,
    dataBook.total_booking_per_month.Mei,
    dataBook.total_booking_per_month.Juni,
    dataBook.total_booking_per_month.Juli,
    dataBook.total_booking_per_month.Agustus,
    dataBook.total_booking_per_month.September,
    dataBook.total_booking_per_month.Oktober,
    dataBook.total_booking_per_month.November,
    dataBook.total_booking_per_month.Desember,
  ];

  const getDataBook = async () => {
    try {
      const response = await dataBookTotal();
      setDataBook({
        total_user: response.total_user,
        total_booking: response.total_booking,
        total_kos: response.total_kos,
        total_booking_per_month: response.total_booking_per_month,
      });
      if (response) {
        toast({
          description: "Berhasil mendapatkan data",
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error.response.data.message,
      });
    }
  };

  useEffect(() => {
    getDataBook();
  }, []);

  return (
    <>
      <Layout>
        <div className="max-h-screen overflow-y-scroll kos ">
          <div className="flex flex-col px-8 pb-4 bg-white shadow-sm h-screen">
            <div className="self-center w-full max-w-[1353px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                  <div className="flex gap-4  items-center p-3  border-slate-200 border-2">
                    <img
                      src={
                        user.photo_profile
                          ? user.photo_profile
                          : `data:image/png;base64,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`
                      }
                      alt="person"
                      className="rounded-full h-[50px]"
                    />
                    <span className="font-bold text-xl">{user.role}</span>
                  </div>
                </div>

                <div className="flex flex-col ml-5 md:ml-0 w-[76%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center border-2 border-slate-200 px-16 py-11 w-full text-sm bg-white rounded shadow-sm text-zinc-900 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                    <div className="flex flex-col px-5 mt-7 w-full ">
                      <div className="text-3xl font-bold tracking-normal text-neutral-800 max-md:max-w-full">Dashboard</div>
                      <div className="mt-10 max-md:pr-5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex grow gap-5 justify-between items-start px-4 pt-4 pb-12 w-full whitespace-nowrap bg-white rounded-2xl shadow-2xl text-neutral-800 max-md:mt-8">
                              <div className="flex flex-col mt-1.5">
                                <div className="text-base font-semibold">Total Users</div>
                                <div className="mt-7 text-3xl font-bold tracking-wider">{dataBook.total_user}</div>
                              </div>
                              <img loading="lazy" src={icon} className="aspect-square w-[60px]" />
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex grow gap-5 justify-between items-start px-4 pt-4 pb-12 w-full whitespace-nowrap bg-white rounded-2xl shadow-2xl text-neutral-800 max-md:mt-8">
                              <div className="flex flex-col mt-1.5">
                                <div className="text-base font-semibold">Total Booking</div>
                                <div className="mt-7 text-3xl font-bold tracking-wider">{dataBook.total_booking}</div>
                              </div>
                              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/54b27335721f5cf4e99c04fd1199ba51df1b034caaa8e90268381c62be176fa3?" className="aspect-square w-[60px]" />
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex grow gap-5 justify-between items-start px-4 pt-4 pb-12 w-full bg-white rounded-2xl shadow-2xl text-neutral-800 max-md:mt-8">
                              <div className="flex flex-col mt-1.5">
                                <div className="text-base font-semibold">Total Kos</div>
                                <div className="mt-7 text-3xl font-bold tracking-wider">{dataBook.total_kos}</div>
                              </div>
                              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3d2d0b486ef24c6675372f31d801a02ffa86d4205077214587fc13bfbfa7aff?" className="aspect-square w-[60px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex z-10 flex-col px-9 pt-5 pb-12 mt-28 mr-3 bg-white rounded-2xl shadow-[6px_6px_54px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                        <div className="flex gap-5 justify-between pr-8 w-full leading-[83%] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                          <div className="flex-auto text-2xl font-bold text-neutral-800">Booking Details</div>
                        </div>
                        <div className="flex gap-5 justify-between items-start mt-12 mb-5 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                          <div className="flex flex-col flex-1 mt-1.5 max-md:max-w-full">
                            <div className="flex overflow-hidden w-full relative flex-col pt-2 min-h-[237px] ">
                              <BookingChart data={bookingData} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      ; );
    </>
  );
};

export default Dashboard;
