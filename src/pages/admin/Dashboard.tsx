import BookingChart from "./Bookingchart";

const Dashboard = () => {
  const bookingData = [100, 80];

  return (
    <>
      <div className="pt-3.5 bg-white">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" srcSet="..." className="grow mt-3 max-w-full aspect-[0.23] w-[245px] max-md:mt-6" />
          </div>
          <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-3.5 max-md:max-w-full">
              <div className="flex gap-5 justify-between px-8 py-3.5 w-full whitespace-nowrap bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div className="my-auto text-2xl font-medium text-center text-neutral-800"></div>
                <div className="flex gap-5 justify-between items-center">
                  <img loading="lazy" srcSet="..." className="self-stretch w-11 aspect-square" />
                  <div className="flex flex-col flex-1 self-stretch my-auto">
                    <div className="text-sm font-bold text-neutral-700">Moni Roy</div>
                    <div className="mt-2.5 text-xs font-semibold text-neutral-600">Admin</div>
                  </div>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/70988bf95b25c2901d79150fa79a87982b20ef24a14f9928133fe3abccaa8232?" className="self-stretch my-auto aspect-square w-[18px]" />
                </div>
              </div>
              <div className="flex flex-col px-5 mt-7 max-md:max-w-full">
                <div className="text-3xl font-bold tracking-normal text-neutral-800 max-md:max-w-full">Dashboard</div>
                <div className="mt-10 max-md:pr-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/69fbd547744d1ee282aef8346ad6f30ad6ff28a5aaed7e7f691ad4957d9d387b?" className="grow max-w-full aspect-[1.64] w-[262px] max-md:mt-8" />
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-5 justify-between items-start px-4 pt-4 pb-12 w-full whitespace-nowrap bg-white rounded-2xl shadow-2xl text-neutral-800 max-md:mt-8">
                        <div className="flex flex-col mt-1.5">
                          <div className="text-base font-semibold">Total Booking</div>
                          <div className="mt-7 text-3xl font-bold tracking-wider">10293</div>
                        </div>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/54b27335721f5cf4e99c04fd1199ba51df1b034caaa8e90268381c62be176fa3?" className="aspect-square w-[60px]" />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-5 justify-between items-start px-4 pt-4 pb-12 w-full bg-white rounded-2xl shadow-2xl text-neutral-800 max-md:mt-8">
                        <div className="flex flex-col mt-1.5">
                          <div className="text-base font-semibold">Total Kos</div>
                          <div className="mt-7 text-3xl font-bold tracking-wider">$89,000</div>
                        </div>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3d2d0b486ef24c6675372f31d801a02ffa86d4205077214587fc13bfbfa7aff?" className="aspect-square w-[60px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex z-10 flex-col px-9 pt-5 pb-12 mt-28 mr-3 bg-white rounded-2xl shadow-[6px_6px_54px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between pr-8 w-full leading-[83%] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <div className="flex-auto text-2xl font-bold text-neutral-800">Booking Details</div>
                    <div className="flex gap-4 justify-between px-4 py-2.5 text-xs font-semibold text-right whitespace-nowrap bg-white rounded border-solid border-[0.6px] border-neutral-300 text-zinc-800 text-opacity-40">
                      <div>February</div>
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/111fd0868388956f825ac25ee037644d295049379b5acf6e86ea84aed5304cc0?" className="self-start w-2.5 aspect-square" />
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between items-start mt-12 mb-5 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col text-xs font-semibold leading-loose whitespace-nowrap basis-0 text-zinc-800 text-opacity-40">
                      <div>100%</div>
                      <div className="mt-12 max-md:mt-10">80%</div>
                      <div className="mt-12 max-md:mt-10">60%</div>
                      <div className="mt-12 max-md:mt-10">40%</div>
                      <div className="mt-12 max-md:mt-10">20%</div>
                    </div>
                    <div className="flex flex-col flex-1 mt-1.5 max-md:max-w-full">
                      <div className="flex overflow-hidden relative flex-col pt-2 w-full min-h-[237px] max-md:max-w-full">
                        <BookingChart data={bookingData} />
                      </div>
                      <div className="flex gap-5 justify-between mt-7 text-xs font-semibold leading-loose text-center whitespace-nowrap text-zinc-800 text-opacity-40 max-md:flex-wrap max-md:max-w-full">
                        <div>1</div>
                        <div>2</div>
                        <div>15k</div>
                        <div>20k</div>
                        <div>25k</div>
                        <div>30k</div>
                        <div>35k</div>
                        <div>40k</div>
                        <div>45k</div>
                        <div>50k</div>
                        <div>minggu</div>
                        <div>senin</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-end max-w-full bg-slate-100 h-[388px] w-[735px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default Dashboard;
