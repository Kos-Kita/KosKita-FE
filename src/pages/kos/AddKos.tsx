import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import Stepper from "@/components/Stepper";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DataKos from "./steps/DataKos";
import FotoKos from "./steps/FotoKos";
import AlamatKos from "./steps/AlamatKos";
import HargaKos from "./steps/HargaKos";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IKosType, kosSchema } from "@/utils/apis/kos/types";
import { toast } from "@/components/ui/use-toast";
import { createKos } from "@/utils/apis/kos/api";
import { Loader2 } from "lucide-react";

const AddKos = ({ id }: { id?: number }) => {
  const steps = ["Data Kos", "Foto Kos", "Alamat Kos", "Harga Kos"];
  const [searchParam, setSearchParam] = useSearchParams();
  const stepTab = searchParam.get("step");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<IKosType>({
    resolver: zodResolver(kosSchema),
  });

  useEffect(() => {
    if (stepTab === null || stepTab === "" || Number(stepTab) > steps.length) {
      searchParam.set("step", "1");
      setSearchParam(searchParam);
    }
    console.log(getValues());
  }, [stepTab]);

  const handleCreateKos = async (body: IKosType) => {
    try {
      const result = await createKos(body);
      toast({
        description: result?.message,
      });
      // navigate("/");
    } catch (error) {
      toast({
        variant: "destructive",
        description: (error as Error).message,
      });
    }
  };

  const handleNextStep = () => {
    if (Number(stepTab) === 4) return;

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
            <DataKos register={register} errors={errors!} />
          ) : stepTab === "2" ? (
            <FotoKos register={register} errors={errors!} />
          ) : stepTab === "3" ? (
            <AlamatKos register={register} setValue={setValue} errors={errors!} />
          ) : stepTab === "4" ? (
            <HargaKos register={register} errors={errors!} />
          ) : null}
          <div className="w-full flex items-center justify-end px-24 ">
            {Number(stepTab) < 4 && (
              <button
                className="bg-[#4CA02E] text-white py-2 px-3 text-sm rounded-md "
                onClick={() => handleNextStep()}
                type={"button"}
              >
                Continue
              </button>
            )}
            {Number(stepTab) === 4 && (
              <button className="bg-[#4CA02E] text-white py-2 px-3 text-sm rounded-md flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddKos;
