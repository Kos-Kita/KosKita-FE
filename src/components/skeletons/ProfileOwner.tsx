import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <>
      <div className="space-y-10 py-12">
        {Array.from({ length: 3 }, (_, index) => (
          <div className="flex items-center space-x-4 justify-center" key={index}>
            <Skeleton className="h-52 w-52 rounded" />
            <div className="space-y-6 w-1/2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[50px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const SkeletonProfile = () => {
  return (
    <div className="flex items-center gap-x-5">
      <Skeleton className="size-16 rounded-full" />
      <Skeleton className="w-24 h-5" />
    </div>
  );
};
export { SkeletonCard, SkeletonProfile };
