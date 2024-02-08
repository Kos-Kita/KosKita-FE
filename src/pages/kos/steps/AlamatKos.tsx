import useDebounce from "@/utils/hooks/useDebounce";
import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import { Marker, Popup, Rectangle, useMap, useMapEvents } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

const AlamatKos = () => {
  const [position, setPosition] = useState({
    lat: -6.2,
    lng: 106.816666,
  });
  const [dataLoc, setDataLoc] = useState<any>();
  const markerRef = useRef<any>(null);
  const tileRef = useRef<any>(null);
  const [searchValue, setSearchValue] = useState("");
  const valueDebounce = useDebounce(searchValue, 500);
  const mapRef = useRef<any>(null);
  const [suggestData, setSuggestData] = useState([]);
  const [suggestOpen, setSuggestOpen] = useState(false);
  useEffect(() => {
    getLocationInfo();
    mapRef.current?.panTo(markerRef.current?.getLatLng());
  }, [position]);

  useEffect(() => {
    handleSearch();
    setSuggestOpen(true);
  }, [valueDebounce]);
  console.log(dataLoc);
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?addressdetails=1&q=${valueDebounce}&format=jsonv2`
      );
      const locationInfoByName = response.data;
      if (locationInfoByName.length !== 0) {
        setSuggestData(locationInfoByName);
        // setPosition({
        //   lat: locationInfoByName[0].lat,
        //   lng: locationInfoByName[0].lon,
        // });
      }
      console.log("Location Info By Name:", locationInfoByName);
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
      <Marker draggable={true} eventHandlers={eventHandlers} position={position} ref={markerRef}>
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
              defaultValue={dataLoc?.display_name}
              onClick={() => setSuggestOpen(!suggestOpen)}
              onChange={(e) => setSearchValue(e.target.value)}
            />
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
          <div className="flex flex-col gap-y-3">
            <label htmlFor="kabupaten/kota">kabupaten / kota</label>
            <input
              type="text"
              className="border px-4 py-2 rounded-lg w-full"
              placeholder="kabupaten/kota"
              value={dataLoc?.address?.county ?? dataLoc?.address?.city}
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="kecamatan">Kecamatan</label>
            <input
              type="text"
              className="border px-4 py-2 rounded-lg w-full"
              placeholder="kecamatan"
              value={dataLoc?.address?.village ?? dataLoc?.address?.suburb}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AlamatKos;
