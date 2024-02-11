import Layout from "@/components/Layout";
import DataKos from "./steps/DataKos";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IKosDetail, IKosType, kosSchema } from "@/utils/apis/kos/types";
import FotoKos from "./steps/FotoKos";
import HargaKos from "./steps/HargaKos";
import AlamatKos from "./steps/AlamatKos";
import { Loader2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { editKos, getDetailKos } from "@/utils/apis/kos/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditKos = () => {
  const [dataKos, setDataKos] = useState<IKosDetail>();
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<IKosType>({
    resolver: zodResolver(kosSchema),
    defaultValues: {
      main_kos_photo: new File([], ""),
      front_kos_photo: new File([], ""),
      back_kos_photo: new File([], ""),
      front_room_photo: new File([], ""),
      inside_room_photo: new File([], ""),
    },
  });

  useEffect(() => {
    getDataKos();
    setValue("mode", "edit");
    console.log(watch());
  }, [id]);

  const getDataKos = async () => {
    try {
      const result = await getDetailKos(id as string);
      setDataKos(result.data);
      if (result.data) {
        setValue("kos_name", result.data.kos_name);
        setValue("description", result.data.description);
        setValue("category", result.data.category);
        setValue(
          "kos_rules",
          result.data.kos_rules.map((d) => d.rule)
        );
        setValue(
          "kos_facilities",
          result.data.kos_facilities.map((d) => d.facility)
        );
        setValue("address", result.data.address);
        setValue("latitude", result.data.latitude);
        setValue("longitude", result.data.longitude);
        setValue("price", result.data.price);
        setValue("rooms", result.data.rooms);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: (error as Error).message,
      });
    }
  };
  const handleUpdateKos = async (body: IKosType) => {
    try {
      const result = await editKos(body, id as string);
      toast({
        description: result?.message,
      });
      navigate("/profileowner");
    } catch (error) {
      toast({
        variant: "destructive",
        description: (error as Error).message,
      });
    }
  };
  return (
    <Layout>
      <div className="min-h-screen ">
        <form onSubmit={handleSubmit(handleUpdateKos)} className="py-16 space-y-12">
          <div className="bg-white container rounded-sm shadow mx-auto p-6 space-y-8">
            <h1 className="text-2xl px-8 tracking-wide">Data Kos</h1>
            <DataKos errors={errors} register={register} />
          </div>
          <div className="bg-white container rounded-sm shadow mx-auto p-6 space-y-8">
            <h1 className="text-2xl px-8 tracking-wide">Foto Kos</h1>
            <FotoKos errors={errors} register={register} dataKos={dataKos} />
          </div>
          <div className="bg-white container rounded-sm shadow mx-auto p-6 space-y-8">
            <h1 className="text-2xl px-8 tracking-wide">Alamat Kos</h1>
            <AlamatKos errors={errors} register={register} setValue={setValue} />
          </div>
          <div className="bg-white container rounded-sm shadow mx-auto py-6 -space-y-6">
            <h1 className="text-2xl px-8 tracking-wide">Harga Kos</h1>
            <HargaKos errors={errors} register={register} />
          </div>
          <div className="w-full flex items-center justify-end  container">
            <button className="bg-green-500 text-white py-2 px-6 text-base rounded-md flex items-center justify-center ">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditKos;
