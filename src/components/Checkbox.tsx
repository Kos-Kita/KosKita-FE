import { IKosType } from "@/utils/apis/kos/types";
import { UseFormRegister } from "react-hook-form";
interface CheckboxProps {
  label: string;
  register: UseFormRegister<IKosType>;
  type: "rule" | "facility";
}
const Checkbox = ({ label, register, type }: CheckboxProps) => {
  return (
    <div
      role="button"
      className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 "
    >
      <label
        htmlFor={`${label.split(" ").join("")}`}
        className="flex items-center w-full py-1 px-2 cursor-pointer"
      >
        <div className="grid mr-3 place-items-center">
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center p-0 rounded-full cursor-pointer"
              htmlFor={`${label.split(" ").join("")}`}
            >
              <input
                id={`${label.split(" ").join("")}`}
                type="checkbox"
                {...register(`${type === "rule" ? "kos_rules" : "kos_facilities"}`)}
                value={label}
                className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-black/30 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-green-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-0"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
        </div>
        <p className="block font-sans text-sm antialiased leading-relaxed text-blue-gray-900">
          {label}
        </p>
      </label>
    </div>
  );
};

export default Checkbox;
