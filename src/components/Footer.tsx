import brandLogo from "@/assets/koskitaa.png";

const Footer = () => {
  return (
    <>
      <footer className="mt-7 md:py-8 py-5  max-w-full relative bottom-0  border-slate-400 bg-slate-50 shadow-lg w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center  px-5 max-md:mt-10">
              <img loading="lazy" srcSet={brandLogo} className="self-center  w-[80px] h-[50px]" />
              <div className="flex gap-3 pr-5 mt-6 max-md:pr-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f910ec3e4385de6fea63bc8a586a8b8873bb6dfb0e294c6ad69c5fac1ccf8e9?"
                  className="w-6 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0204845964c28dbc98a55a23ff3098fccfb21d8d2c7567f21fdad24ae3842055?"
                  className="w-6 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9f06e4d00ba166e1598d83fbf0e4362ff98cbe217b8e0508e18fec5ba9ad00b?"
                  className="w-6 aspect-square"
                />
              </div>
              <div className="mt-3 text-base whitespace-nowrap text-neutral-900">
                © 2024 Kos Kita
              </div>
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
    </>
  );
};

export default Footer;
