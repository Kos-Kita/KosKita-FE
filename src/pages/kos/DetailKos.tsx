import Layout from "@/components/Layout";
import {
  AirVent,
  Baby,
  Bath,
  Bed,
  BedDouble,
  CigaretteOff,
  DoorOpen,
  FishOff,
  GraduationCap,
  Hammer,
  HandCoins,
  MapPin,
  MoonStar,
  PartyPopper,
  PersonStanding,
  Refrigerator,
  Sofa,
  Star,
  Timer,
  UserRound,
  UserRoundCheck,
  UserRoundX,
  UserSearch,
  Wifi,
  Zap,
} from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/utils";
import { useAuth } from "@/utils/context/auth";
import { toast } from "@/components/ui/use-toast";
import { getDetailKos } from "@/utils/apis/kos/api";
import { useNavigate, useParams } from "react-router-dom";
import { IKosDetail } from "@/utils/apis/kos/types";
import { WebsocketContext } from "@/utils/context/ws-provider";
import markerIcon from "@/assets/marker.png";
import L from "leaflet";
import axios, { AxiosResponse } from "axios";
import defaultImg from "@/assets/download.png";
import axiosWithConfig from "@/utils/apis/axiosWithConfig";
import NumberFormatter from "@/components/NumberFormatter";
import { IGetRoom } from "@/utils/apis/chat/types";
import { Response } from "@/utils/types/type";

const DetailKos = () => {
  const [position, setPosition] = useState({
    lat: -6.2,
    lng: 106.816666,
  });
  const [data, setData] = useState<IKosDetail>();
  const [date, setDate] = useState<Date>();
  const { id } = useParams();
  const { user } = useAuth();
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const navigate = useNavigate();
  const [isValidDate, setIsValidDate] = useState(true);
  const { setConn, setChatOpen, setDataRoom } = useContext(WebsocketContext);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    getData();
    mapRef.current?.panTo(markerRef.current?.getLatLng());
    window.scrollTo(0, 0);
  }, []);

  const getData = async () => {
    try {
      const result = await getDetailKos(id!);
      setData(result.data);
      setPosition({ lat: Number(result.data.latitude), lng: Number(result.data.longitude) });
      mapRef.current?.panTo(markerRef.current?.getLatLng());
      setMount(true);
    } catch (error) {
      toast({
        description: (error as Error).message,
      });
    }
  };

  const handleSubmit = () => {
    if (!date) {
      setIsValidDate(false);
    } else {
      setIsValidDate(true);
      navigate("/bookingpage", {
        state: { kos_id: data?.id, startDate: new Date(), endDate: date },
      });
    }
  };

  const joinRoom = async () => {
    try {
      const result: AxiosResponse<Response<IGetRoom[]>> = await axiosWithConfig.get("/get-room");
      // console.log("Get Rooms : ", result.data);
      if (result.status === 200) {
        setDataRoom({ name: data?.user.user_name, photo: data?.user.photo_profile });

        const existRoom =
          result.data.data !== null &&
          result.data.data.find((value) => {
            const isSenderIdMatch = value.sender_id === user.id;
            const isReceiverIdMatch = value.receiver_id === data?.user.id;
            return isSenderIdMatch && isReceiverIdMatch;
          });
        // console.log("Exist Room : ", existRoom);
        if (existRoom) {
          // console.log("Join Room");
          const ws = new WebSocket(
            `wss://l3n.my.id/join-room/${existRoom?.room_id}?senderId=${existRoom.sender_id}&receiverId=${existRoom.receiver_id}`
          );
          if (ws.OPEN) {
            setConn(ws);
            setChatOpen(true);
            return;
          }
        } else {
          // console.log("Create Room");
          const res: AxiosResponse<Response<{ room_id: string }>> = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/create-room`,
            {
              receiver_id: data?.user.id,
              sender_id: user.id,
            }
          );
          const ws = new WebSocket(
            `wss://l3n.my.id/join-room/${res.data.data.room_id}?senderId=${user.id}&receiverId=${data?.user.id}`
          );
          if (ws.OPEN) {
            setConn(ws);
            setChatOpen(true);
            return;
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const icon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [50, 50],
  });
  return (
    <Layout>
      <div className="min-h-screen">
        <section className="flex gap-x-2 h-full max-h-[500px]">
          <img
            src={data?.photo_kos.main_kos_photo}
            alt="interior"
            className="max-h-full rounded w-[60%]  object-fill"
          />
          <div className="grid grid-cols-2 place-items-center   gap-3 max-h-full p-3 grow ">
            <img
              src={data?.photo_kos.front_kos_photo}
              alt="interior"
              className="max-h-32 rounded-md w-full min-h-full "
            />
            <img
              src={data?.photo_kos.back_kos_photo}
              alt="interior"
              className="max-h-32 rounded-md w-full min-h-full "
            />
            <img
              src={data?.photo_kos.front_room_photo}
              alt="interior"
              className="max-h-32 rounded-md w-full min-h-full "
            />
            <img
              src={data?.photo_kos.inside_room_photo}
              alt="interior"
              className="max-h-32 rounded-md w-full min-h-full "
            />
          </div>
        </section>
        <section className="py-10 px-5 2xl:px-0">
          <div className="flex items-start justify-between container 2xl:max-w-[100rem] mx-auto">
            <div className="flex flex-col gap-y-7 max-w-[50rem]">
              <div className="flex items-center gap-x-6">
                <h1 className="text-4xl font-medium">{data?.kos_name}</h1>
                <div className="flex items-center gap-x-2 rounded  p-2">
                  <Star
                    color="yellow"
                    fill={"yellow"}
                    className="stroke-slate-100 drop-shadow-sm"
                    size={20}
                  />
                  <span>{data?.rating.toFixed(1)}</span>
                </div>
                <span className="py-1 px-4 uppercase border rounded-lg">{data?.category}</span>
              </div>
              <div className="flex items-center gap-x-1">
                <MapPin size={20} className="w-8" />
                <span>{data?.address}</span>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-xl leading-relaxed tracking-wide">Description</h3>
                <p>{data?.description}</p>
              </div>
              <div className="flex flex-col ">
                <p>Tersisa : {data?.rooms} Kamar</p>
              </div>
              <div className="flex items-center gap-x-2">
                <img
                  src={data?.user.photo_profile !== "" ? data?.user.photo_profile : defaultImg}
                  alt="person"
                  className="rounded-full size-16"
                />
                <div className="flex flex-col gap-y-2">
                  <span className="font-medium">Pemilik Kos</span>
                  <span className="text-sm">{data?.user.name} </span>
                </div>
              </div>
            </div>
            {user.role === "renter" ? (
              <div className="bg-[#F2F0F2] rounded-3xl flex flex-col items-center max-w-xl  gap-y-4 p-6">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[180px] justify-start text-left font-normal bg-slate-100",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      fromMonth={new Date(new Date().setMonth(new Date().getMonth()))}
                      onSelect={setDate}
                      disabled={(date) =>
                        new Date(new Date().setMonth(new Date().getMonth())) >= date
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {!isValidDate && (
                  <p className="text-sm text-red-500">Masukkan tanggal booking terlebih dahulu</p>
                )}
                <span className="text-2xl font-semibold">
                  <NumberFormatter value={data?.price as number} />
                  <span className="font-normal ml-px text-black/80">/bulan</span>
                </span>
                <button
                  className="px-5 py-2 rounded-xl text-sm text-white bg-[#4CA02E] "
                  onClick={handleSubmit}
                >
                  Lanjutkan pemesanan
                </button>
                <button
                  className="px-5 py-2 rounded-xl text-sm text-white bg-[#4CA02E]"
                  onClick={() => joinRoom()}
                >
                  Kontak Pemilik Kos
                </button>
                <p className="text-center text-sm">
                  Ketika Anda memesan kos ini, Lanjutkan Chat Tukang Kos nya dan akan dikonfirmasi
                  secara instan
                </p>
              </div>
            ) : null}
          </div>
        </section>
        <section className="py-16 space-y-10">
          <h3 className="text-center text-4xl font-semibold">Lokasi</h3>
          <div className="container 2xl:max-w-[100rem] ">
            {mount ? (
              <MapContainer
                center={position}
                zoom={13}
                style={{ height: "400px", width: "100wh" }}
                ref={mapRef}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={position} ref={markerRef} icon={icon}>
                  <Popup>Lokasi Kos</Popup>
                </Marker>
              </MapContainer>
            ) : null}
          </div>
        </section>
        <section className="py-20 space-y-14">
          <h3 className="text-center text-4xl font-semibold">Fasilitas Kos</h3>
          <div className="container 2xl:max-w-[95rem] mx-auto">
            <div className="grid grid-cols-3 gap-6 place-items-center">
              {data?.kos_facilities?.map((item) => (
                <div className="flex items-center flex-row-reverse gap-x-5" key={item.id}>
                  <span className="w-20 whitespace-nowrap">{item.facility}</span>
                  {(() => {
                    switch (item.facility) {
                      case "WIFI":
                        return <Wifi />;
                      case "AC":
                        return <AirVent />;
                      case "MEJA DAN KURSI":
                        return <Sofa />;
                      case "KASUR":
                        return <Bed />;
                      case "LEMARI":
                        return <DoorOpen />;
                      case "K.MANDI DALAM":
                        return <Bath />;
                      case "KULKAS":
                        return <Refrigerator />;
                      default:
                        return null;
                    }
                  })()}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 space-y-14 ">
          <h3 className="text-center text-4xl font-semibold">Peraturan Kos</h3>
          <div className="grid grid-cols-3 gap-3 place-items-center container 2xl:max-w-[100rem]">
            {data?.kos_rules?.map((item) => (
              <div className="flex items-center gap-x-5 w-56" key={item.id}>
                {(() => {
                  switch (item.rule) {
                    case "ADA JAM MALAM UNTUK TAMU":
                      return <MoonStar />;
                    case "24 JAM":
                      return <Timer />;
                    case "TIDAK BOLEH MEROKOK":
                      return <CigaretteOff />;
                    case "TIDAK BOLEH PETS":
                      return <FishOff />;
                    case "TIDAK BOLEH PESTA/EVENTS":
                      return <PartyPopper />;
                    case "TIDAK BOLEH PASUTRI":
                      return <PersonStanding />;
                    case "HANYA BISA MAKS. 1 ORANG/ KAMAR":
                      return <UserRound />;
                    case "TIDAK BOLEH BAWA ANAK":
                      return <Baby />;
                    case "KHUSUS MAHASISWA":
                      return <GraduationCap />;
                    case "KHUSUS KARYAWAN":
                      return <Hammer />;
                    case "TAMU BEBAS BERKUNJUNG":
                      return <UserSearch />;
                    case "TAMU BOLEH MENGINAP":
                      return <UserRoundCheck />;
                    case "TAMU DILARANG MENGINAP":
                      return <UserRoundX />;
                    case "DENDA KERUSAKAN BARANG KOS":
                      return <HandCoins />;
                    case "TAMU MENGINAP DIKENAKAN BIAYA":
                      return <BedDouble />;
                    case "TERMASUK LISTRIK":
                      return <Zap />;
                    default:
                      return null;
                  }
                })()}
                <span className="w-20 whitespace-pre">{item.rule}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DetailKos;
