// components/RatingPopup.js

import { useState } from "react";

const RatingPopup = ({ show, onClose, onRate }: any) => {
  const [rating, setRating] = useState(0);

  const handleRate = () => {
    if (rating > 0) {
      onRate(rating);
    }
  };

  return (
    <div style={{ display: show ? "block" : "none" }}>
      <div>
        <span>Beri Rating:</span>
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          <option value={0}>Pilih Rating</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button onClick={handleRate}>Submit Rating</button>
        <button onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
};

export default RatingPopup;
