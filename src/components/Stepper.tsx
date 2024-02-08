import { CheckCircle2, Circle } from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface StepperProps {
  steps: string[];
}

const Stepper = ({ steps }: StepperProps) => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const stepTab = searchParams.get("step");

  return (
    <div className="flex items-center gap-x-2">
      {steps.map((step, index) => (
        <>
          <div className="flex flex-col items-center relative" key={index}>
            <span
              className={`border ${
                index + 1 <= Number(stepTab) ? "border-[#4CA02E]" : "border-[#A1AEBE]"
              }  ${
                index + 1 === Number(stepTab) ? "text-[#4CA02E]" : "text-[#A1AEBE]"
              } font-medium rounded-full flex items-center justify-center size-10`}
            >
              {index + 1 < Number(stepTab) ? (
                <CheckCircle2 color="white" fill="#4CA02E" size={40} />
              ) : index + 1 === Number(stepTab) ? (
                <Circle fill="#4CA02E" size={18} />
              ) : (
                `0${index + 1}`
              )}
            </span>
            <span
              className={`font-medium ${
                index + 1 <= Number(stepTab) ? "text-[#4CA02E]" : "text-[#A1AEBE]"
              } absolute -bottom-6 whitespace-nowrap text-sm`}
            >
              {step}
            </span>
          </div>
          <span
            className={`w-[80px] ${
              index + 1 < Number(stepTab) ? "bg-[#4CA02E]" : "bg-[#A1AEBE]"
            } h-[2px] ${steps.length - 1 !== index ? "block" : "hidden"}`}
          ></span>
        </>
      ))}
    </div>
  );
};

export default Stepper;
