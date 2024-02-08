import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import Stepper from "@/components/Stepper";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DataKos from "./steps/DataKos";
import FotoKos from "./steps/FotoKos";
import AlamatKos from "./steps/AlamatKos";
import HargaKos from "./steps/HargaKos";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IKosType, kosSchema } from "@/utils/apis/kos/types";

const AddKos = () => {
  const steps = ["Data Kos", "Foto Kos", "Alamat Kos", "Harga Kos"];
  const [searchParam, setSearchParam] = useSearchParams();
  const stepTab = searchParam.get("step");

  const { register, handleSubmit } = useForm<IKosType>({
    resolver: zodResolver(kosSchema),
  });

  useEffect(() => {
    if (stepTab === null || stepTab === "" || Number(stepTab) > steps.length) {
      searchParam.set("step", "1");
      setSearchParam(searchParam);
    }
  }, [stepTab]);

  const handleCreateKos = () => {
    alert("Kos berhasil dibuat");
  };

  const handleNextStep = () => {
    searchParam.set("step", `${Number(stepTab) + 1}`);
    setSearchParam(searchParam);
  };

  return (
    <Layout>
      <div className="min-h-screen p-10 space-y-8">
        <Breadcrumb />
        <form
          onSubmit={handleSubmit(handleCreateKos)}
          className="container  min-h-screen space-y-16 "
        >
          <div className="flex items-center justify-center p-3">
            <Stepper steps={steps} />
          </div>
          {stepTab === "1" ? (
            <DataKos register={register} />
          ) : stepTab === "2" ? (
            <FotoKos />
          ) : stepTab === "3" ? (
            <AlamatKos />
          ) : (
            <HargaKos />
          )}
          <div className="w-full flex items-center justify-end px-24 ">
            <button
              // type={Number(stepTab) > 4 ? "submit" : "button"}
              className="bg-[#4CA02E] text-white py-2 px-3 text-sm rounded-md "
              onClick={() => handleNextStep()}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddKos;
