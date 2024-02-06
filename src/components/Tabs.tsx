import { useSearchParams } from "react-router-dom";

const Tabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");

  const handleTabs = (page: string) => {
    searchParams.set("tab", page);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex rounded-md border p-1 bg-slate-50 gap-x-1">
      <span
        className={`${
          tabParam === "renter" && "bg-white rounded-md border font-medium"
        } py-1 text-sm px-4  cursor-pointer`}
        onClick={() => handleTabs("renter")}
      >
        Renter
      </span>
      <span
        className={`${
          tabParam === "owner" && "bg-white rounded-md border font-medium"
        } py-1 text-sm px-4 cursor-pointer`}
        onClick={() => handleTabs("owner")}
      >
        Owner
      </span>
    </div>
  );
};

export default Tabs;
