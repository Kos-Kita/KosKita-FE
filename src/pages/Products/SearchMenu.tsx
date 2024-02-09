import React, { useState, useEffect } from "react";
import axios from "axios";
import CardProduct, { searchKos } from "@/components/CardProduct";
import Layout from "@/components/Layout";
import { useLocation, useNavigate } from "react-router-dom";

const SearchMenu = () => {
  const { state } = useLocation();

  const [showCheckboxes, setShowCheckboxes] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [checkboxValues, setCheckboxValues] = useState({
    putra: false,
    putri: false,
    hargaDibawah: false,
    hargaDiatas: false,
    campur: false,
  });
  const baseurl = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  const [showPagination, setShowPagination] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    setSearchQuery(state.data);
  }, [state]);

  const handleCheckboxChange = (checkboxName: string) => {
    setCheckboxValues((prevValues: any) => ({
      ...prevValues,
      [checkboxName]: !prevValues[checkboxName],
    }));
  };

  const handleMoreFilterClick = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  const getSearch = async () => {
    try {
      const response = await axios.get(`${baseurl}/kos/search`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      let searchData = searchQuery
        ? response.data.data.filter(
            (item: any) =>
              item.kos_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.address.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : response.data.data;

      if (searchData.length > 0) {
        if (checkboxValues.putra) {
          searchData = searchData.filter((item: any) => item.category.toLowerCase() === "putra");
        }
        if (checkboxValues.putri) {
          searchData = searchData.filter((item: any) => item.category.toLowerCase() === "putri");
        }
        if (checkboxValues.campur) {
          searchData = searchData.filter((item: any) => item.category.toLowerCase() === "campur");
        }
        if (checkboxValues.hargaDibawah) {
          searchData = searchData.filter((item: any) => item.price < 1000000);
        }
        if (checkboxValues.hargaDiatas) {
          searchData = searchData.filter((item: any) => item.price >= 1000000);
        }
      }

      setSearchResults(searchData);
      setShowCheckboxes(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getSearch();
  };

  useEffect(() => {
    setShowPagination(true);
    getSearch();
  }, []);

  const totalPages = Math.ceil(searchResults.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center border-t-2 border-b-slate-50 bg-white">
        <div className="flex flex-col items-center self-stretch px-16 pt-5 pb-10 mt-2.5 w-full text-lg font-bold leading-6 bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-start w-full max-w-[1064px] max-md:max-w-full">
            <form onSubmit={handleSearchSubmit}>
              <div className="flex gap-5 justify-between self-stretch py-1.5 pr-1.5 pl-10 w-full whitespace-nowrap bg-white border-4 border-solid border-[color:var(--Green,#4CA02E)] rounded-[40px] max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
                <div className="flex gap-3 my-auto text-neutral-900">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b47326f4402e3d3079778f9715c62d6008fc9e571445de53fc761fb2497a593?"
                    className="my-auto w-5 aspect-square"
                  />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    placeholder="Cari Kota"
                    className="grow border-none focus:outline-none w-[40vw] md:w-[55vw]"
                  />
                </div>
                <button
                  type="submit"
                  className="cursor-pointer justify-center px-10 py-3 text-white bg-lime-600 rounded-[40px] max-md:px-5"
                >
                  Search
                </button>
              </div>
            </form>

            <button
              onClick={handleMoreFilterClick}
              className="flex gap-5 md:text-base text-sm justify-center items-center p-3 w-[40%] md:w-1/6 my-4 border-[0.5px] text-white rounded-full bg-lime-600"
            >
              <span>More Filters</span>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/badges/48/sort-down.png"
                alt="sort-down"
              />
            </button>

            {showCheckboxes && (
              <div className="checkbox-container flex flex-col ml-3 shadow-md p-3 rounded-md">
                <label className="font-medium">
                  <input
                    type="checkbox"
                    checked={checkboxValues.putra}
                    onChange={() => handleCheckboxChange("putra")}
                  />{" "}
                  Putra
                </label>
                <label className="font-medium">
                  <input
                    type="checkbox"
                    checked={checkboxValues.putri}
                    onChange={() => handleCheckboxChange("putri")}
                  />{" "}
                  Putri
                </label>
                <label className="font-medium">
                  <input
                    type="checkbox"
                    checked={checkboxValues.hargaDibawah}
                    onChange={() => handleCheckboxChange("hargaDibawah")}
                  />{" "}
                  Harga dibawah 1.000.000
                </label>
                <label className="font-medium">
                  <input
                    type="checkbox"
                    checked={checkboxValues.hargaDiatas}
                    onChange={() => handleCheckboxChange("hargaDiatas")}
                  />{" "}
                  Harga diatas 1.000.000
                </label>
                <label className="font-medium">
                  <input
                    type="checkbox"
                    checked={checkboxValues.campur}
                    onChange={() => handleCheckboxChange("campur")}
                  />{" "}
                  Campur
                </label>
              </div>
            )}
            <div className="mt-7 ml-3 text-base leading-5 whitespace-nowrap text-neutral-900 max-md:ml-2.5">
              <span className="text-lg font-bold leading-6">{searchResults.length} </span> Hasil
              untuk data yang dicari
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center px-4 pb-12 mt-3 w-full max-w-[1300px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mb-10 w-full max-w-[995px] max-md:max-w-full">
            {searchResults.length > 0 && showPagination ? (
              currentItems.map((item: searchKos, key: any) => (
                <CardProduct
                  hidden={false}
                  direct={() => navigate(`/kos/${item.id}`)}
                  key={key}
                  kos_name={item.kos_name}
                  rating={item.rating}
                  price={item.price}
                  rooms={item.rooms}
                  category={item.category}
                  address={item.address}
                  kos_facilities={item.kos_facilities}
                  photo_kos={item.photo_kos.main_kos_photo}
                />
              ))
            ) : (
              <div className="flex flex-col justify-center items-center mb-10 w-full max-w-[995px] max-md:max-w-full text-2xl">
                Tidak ada data, cari nama lain
              </div>
            )}
            {searchResults.length !== 0 && (
              <div id="pagination" className="flex justify-center my-16 gap-8">
                <button
                  id="prevPageBtn"
                  className={
                    currentPage === 1
                      ? `bg-white text-xs md:text-base text-black rounded-full px-3 py-2 md:p-3 border-2 border-slate-400`
                      : ` bg-lime-600 text-xs md:text-base text-white rounded-full px-3 py-2 md:p-3 border-2 border-slate-400`
                  }
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Sebelumnya
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    className={`${
                      currentPage === index + 1
                        ? "bg-lime-600 text-white"
                        : "border-2 border-slate-200 text-black"
                    } px-4 py-1 gap-[-10px] rounded-md `}
                    key={`pageBtn_${index}`}
                    onClick={() => setCurrentPage(index + 1)}
                    disabled={currentPage === index + 1}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  id="nextPageBtn"
                  className={
                    currentPage === totalPages
                      ? `bg-white text-xs md:text-base text-black rounded-full px-3 py-2 md:p-3 border-2 border-slate-400`
                      : ` bg-lime-600 text-xs md:text-base text-white rounded-full px-3 py-2 md:p-3 border-2 border-slate-400`
                  }
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Selanjutnya
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchMenu;
