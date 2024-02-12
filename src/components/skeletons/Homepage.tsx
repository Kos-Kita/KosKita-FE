import { Skeleton } from "@/components/ui/skeleton";

const Homepage = () => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index} className="flex flex-col items-center space-x-4 w-[300px]">
          <Skeleton className="h-[250px] w-full rounded" />
          <div className="flex items-center w-full gap-x-4 mt-3">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/4" />
          </div>
          <div className="space-y-2 mt-3 w-full">
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-3 w-2/3" />
            <Skeleton className="h-3 w-[80px]" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Homepage;
