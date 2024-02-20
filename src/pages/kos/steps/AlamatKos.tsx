import { IKosType } from "@/utils/apis/kos/types";
import useDebounce from "@/utils/hooks/useDebounce";
import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import L from "leaflet";
import markerIcon from "@/assets/marker.png";

interface AlamatKosProps {
  register: UseFormRegister<IKosType>;
  setValue: UseFormSetValue<IKosType>;
  errors: FieldErrors<IKosType>;
}
const AlamatKos = ({ register, setValue, errors }: AlamatKosProps) => {
  const [position, setPosition] = useState({
    lat: -6.2,
    lng: 106.816666,
  });
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const valueDebounce = useDebounce(searchValue, 500);
  const [suggestData, setSuggestData] = useState([]);
  const [dataLoc, setDataLoc] = useState<any>();
  const markerRef = useRef<any>(null);
  const tileRef = useRef<any>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    getLocationInfo();
    mapRef.current?.panTo(markerRef.current?.getLatLng());
    setValue("address", dataLoc?.display_name);
    setValue("latitude", `${position.lat}`);
    setValue("longitude", `${position.lng}`);
  }, [position]);

  useEffect(() => {
    handleSearch();
    setSuggestOpen(true);
  }, [valueDebounce]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?addressdetails=1&q=${valueDebounce}&format=jsonv2`
      );
      const locationInfoByName = response.data;
      if (locationInfoByName.length !== 0) {
        setSuggestData(locationInfoByName);
      }
    } catch (error) {
      console.error("Error fetching location info By Name:", error);
    }
  };

  const getLocationInfo = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.lat}&lon=${position.lng}`
      );
      const locationInfo = response.data;
      setDataLoc(locationInfo);
      console.log("Location Info:", locationInfo);
    } catch (error) {
      console.error("Error fetching location info:", error);
    }
  };

  const DraggableMarker = () => {
    const icon = new L.Icon({
      iconUrl: markerIcon,
      iconSize: [50, 50],
    });
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setPosition(marker.getLatLng());
            mapRef.current.panTo(marker.getLatLng());
          }
        },
      }),
      []
    );

    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        icon={icon}
      >
        <Popup minWidth={90}>Marker is draggable</Popup>
      </Marker>
    );
  };

  return (
    <>
      <div className="max-w-6xl mx-auto space-y-10">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "400px", width: "100wh" }}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ref={tileRef}
          />
          <DraggableMarker />
        </MapContainer>

        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-3 relative">
            <label htmlFor="alamat">Alamat</label>
            <input
              type="text"
              className="border px-4 py-2 rounded-lg w-full"
              placeholder="Alamat"
              onClick={() => setSuggestOpen(!suggestOpen)}
              {...register("address", {
                onChange: (e) => {
                  setSearchValue(e.target.value);
                },
              })}
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
            <div
              className="absolute  top-full left-0 w-full bg-white shadow-md z-10 border max-h-56 overflow-y-scroll "
              hidden={searchValue === "" || suggestOpen === false}
            >
              <ul className="p-3 space-y-2 text-sm">
                {suggestData.length !== 0 ? (
                  suggestData.map((data: any) => (
                    <li
                      onClick={() => [
                        setPosition({
                          lat: data.lat,
                          lng: data.lon,
                        }),
                        setDataLoc(data),
                        setSuggestOpen(false),
                      ]}
                      className="cursor-pointer hover:bg-slate-100 py-2 px-1 rounded"
                    >
                      {data.display_name}
                    </li>
                  ))
                ) : (
                  <li className="text-black">Lokasi tidak ditemukan</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlamatKos;
