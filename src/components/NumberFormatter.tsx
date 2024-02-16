import React from "react";

export interface NumberFormatterProps {
  value: number;
}

const NumberFormatter: React.FC<NumberFormatterProps> = ({ value }) => {
  const formattedNumber = new Intl.NumberFormat().format(value);

  return (
    <span id="formattedNumber" className="font-medium text-black font-sans ">
      Rp. {formattedNumber}
    </span>
  );
};

export default NumberFormatter;
