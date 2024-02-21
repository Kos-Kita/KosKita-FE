import { useState } from "react";

const RatingPopup = ({ show, onClose, onRate }: any) => {
  const [rating, setRating] = useState(0);
  const [pendingRating, setPendingRating] = useState(0);

  const handleRate = (value: number) => {
    setPendingRating(value);
    setRating(value);
  };

  const handleSubmitRating = () => {
    if (pendingRating > 0) {
      onRate(pendingRating);
    }
  };

  const getFeedbackText = (value: number) => {
    switch (value) {
      case 1:
        return "Sangat Buruk 😤";
      case 2:
        return "Buruk 😒";
      case 3:
        return "Biasa 😃";
      case 4:
        return "Puas 😉";
      case 5:
        return "Sangat Puas 😁🎉";
      default:
        return "";
    }
  };

  return (
    <>
      {show && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50 font-Poppins">
            <div className="bg-white w-[20rem] p-8 rounded shadow-lg">
              <div style={{ display: show ? "block" : "none" }}>
                <div className="flex flex-col gap-5 ">
                  <span className="font-semibold text-base">Beri Rating :</span>
                  <div className="flex gap-2 items-center">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button key={value} className={`w-10 h-10 focus:outline-none ${value <= rating ? "text-yellow-500" : "text-gray-400"}`} onClick={() => handleRate(value)} style={{ fontSize: "1.5rem" }}>
                        ★
                      </button>
                    ))}
                  </div>
                  <p>{getFeedbackText(rating)}</p>
                  <div className="flex gap-5">
                    <button className="px-3 py-2 border-2 border-slate-100 bg-lime-600 text-white" onClick={handleSubmitRating}>
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
      )}
    </>
  );
};

export default RatingPopup;
