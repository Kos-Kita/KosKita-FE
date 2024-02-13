import { useState } from "react";

const RatingPopup = ({ show, onClose, onRate }: any) => {
  const [rating, setRating] = useState(0);

  const handleRate = () => {
    if (rating > 0) {
      onRate(rating);
    }
  };

  return (
    <>
      <div style={{ display: show ? "block" : "none" }} className="fixed inset-0 bg-black opacity-50 z-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 font-Poppins">
        <div style={{ display: show ? "block" : "none" }} className="bg-white w-[25rem] p-8 rounded shadow-lg">
          <div>
            <div className="flex flex-col gap-5 ">
              <span>Beri Rating:</span>
              <select value={rating} className="p-3" onChange={(e) => setRating(Number(e.target.value))}>
                <option value={0}>Pilih Rating</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <div className="flex gap-5">
                <button className="px-3 py-2 border-2 border-slate-100 bg-lime-600 text-white rounded-md" onClick={handleRate}>
                  Submit Rating
                </button>
                <button className="px-3 py-2 border-2 border-slate-100" onClick={onClose}>
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingPopup;
