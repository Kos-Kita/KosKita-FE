import Layout from "@/components/Layout";
import { AirVent, Bath, Bed, CigaretteOff, DoorOpen, FishOff, LocateFixed, PartyPopper, PersonStanding, Star, Timer, Wifi } from "lucide-react";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/utils";
import { useNavigate, useParams } from "react-router-dom";

const position = {
  lat: -6.2,
  lng: 106.816666,
};

const DetailKos = () => {
  const [date, setDate] = useState<Date>();
  console.log(date);
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Layout>
      <div className="min-h-screen">
        <section className="flex gap-x-2 h-full max-h-[500px]">
          <img src="https://source.unsplash.com/1200x800?interior" alt="interior" className="max-h-full rounded" />
          <div className="grid grid-cols-2 gap-3 max-h-full p-3">
            <img src="https://source.unsplash.com/1200x801?interior" alt="interior" className="h-full rounded-md" />
            <img src="https://source.unsplash.com/1200x802?interior" alt="interior" className="h-full rounded-md" />
            <img src="https://source.unsplash.com/1200x803?interior" alt="interior" className="h-full rounded-md" />
            <img src="https://source.unsplash.com/1200x804?interior" alt="interior" className="h-full rounded-md" />
          </div>
        </section>
        <section className="py-10">
          <div className="flex items-start justify-between  max-w-[95rem] mx-auto ">
            <div className="flex flex-col gap-y-7">
              <div className="flex items-center gap-x-6">
                <h1 className="text-4xl font-medium">Kos Bude Bule</h1>
                <div className="flex items-center gap-x-2 rounded shadow p-2">
                  <Star color="yellow" fill={"yellow"} className="stroke-slate-100 drop-shadow-sm" size={20} />
                  <span>5.0</span>
                </div>
                <span className="p-2 rounded shadow">Campur</span>
              </div>
              <div className="flex items-center gap-x-1">
                <LocateFixed />
                <span>Jakarta Barat, cengekreng</span>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-xl ">Description</h3>
                <p>Kos ramah lingkungan aman dan sejahtera</p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-xl">Slot </h3>
                <p>Tersisa 3 Kamar</p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="https://source.unsplash.com/100x100?person" alt="person" className="rounded-full size-16" />
                <div className="flex flex-col gap-y-2">
                  <span className="font-medium">Pemilik Kos</span>
                  <span className="text-sm">Ajeng wkwk </span>
                </div>
              </div>
            </div>
            <div className="bg-[#F2F0F2] rounded-3xl flex flex-col items-center max-w-xl  gap-y-4 p-6">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={"outline"} className={cn("w-[180px] justify-start text-left font-normal bg-slate-100", !date && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
              <span className="text-2xl font-semibold">Rp.11.500.000 / Bulan</span>
              <button
                onClick={() =>
                  navigate("/bookingpage", {
                    state: {
                      id: id,
                    },
                  })
                }
                className="px-5 py-2 rounded-xl text-sm text-white bg-[#4CA02E]"
              >
                Lanjutkan pemesanan
              </button>
              <button className="px-5 py-2 rounded-xl text-sm text-white bg-[#4CA02E]">Kontak Pemilik Kos</button>
              <p className="text-center text-sm">Ketika Anda memesan kos ini, Lanjutkan Chat Tukang Kos nya dan akan dikonfirmasi secara instan</p>
            </div>
          </div>
        </section>
        <section className="py-16 space-y-10">
          <h3 className="text-center text-4xl font-semibold">Lokasi</h3>
          <div className="container max-w-[100rem] ">
            <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100wh" }}>
              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup>Lokasi Kos</Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>
        <section className="py-20 space-y-14">
          <h3 className="text-center text-4xl font-semibold">Fasilitas Kos</h3>
          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-6 ">
              <div className="flex items-center justify-around">
                <span className="w-20 whitespace-nowrap">WIFI</span>
                <Wifi />
              </div>
              <div className="flex items-center justify-around">
                <span className="w-20 whitespace-nowrap">CAMPUR</span>
                <PersonStanding />
              </div>
              <div className="flex items-center justify-around">
                <span className="w-20 whitespace-nowrap">KASUR</span>
                <Bed />
              </div>
              <div className="flex items-center justify-around">
                <span className="w-20 whitespace-nowrap">KAMAR MANDI DALAM</span>
                <Bath />
              </div>
              <div className="flex items-center justify-around">
                <span className="w-20 whitespace-nowrap">AC</span>
                <AirVent />
              </div>
              <div className="flex items-center justify-around">
                <span className="w-20 whitespace-nowrap">LEMARI</span>
                <DoorOpen />
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 space-y-14">
          <h3 className="text-center text-4xl font-semibold">Peraturan Kos</h3>
          <div className="container flex justify-around mx-auto">
            <div className="flex items-center gap-x-3">
              <Timer />
              <span className="w-20 whitespace-nowrap">24 JAM</span>
            </div>
            <div className="flex items-center gap-x-3">
              <CigaretteOff />
              <span className="w-20 whitespace-nowrap">No Smoking</span>
            </div>
            <div className="flex items-center gap-x-3">
              <FishOff />
              <span className="w-20 whitespace-nowrap">No Pets</span>
            </div>
            <div className="flex items-center gap-x-3">
              <PartyPopper />
              <span className="w-20 whitespace-nowrap">No parties or events</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DetailKos;
