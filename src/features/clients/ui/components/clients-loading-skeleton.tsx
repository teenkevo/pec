import { Skeleton } from "@/components/ui/skeleton";

export function ClientsLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[calc(100vh-80px)] min-h-[600px] w-full">
        <Skeleton className="absolute inset-0 rounded-none" />
        <div className="container relative mx-auto flex h-full items-center px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-end pb-16 md:pb-24 w-full">
            <div className="max-w-2xl space-y-4">
              <Skeleton className="h-10 w-full sm:h-12 md:h-14 lg:h-16" />
              <Skeleton className="h-10 w-5/6 sm:h-12 md:h-14 lg:h-16" />
              <Skeleton className="h-10 w-4/6 sm:h-12 md:h-14 lg:h-16" />
            </div>
            <div className="flex justify-end">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-md w-full space-y-3 border border-white/20">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-5 w-32 mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 space-y-16">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[...Array(4)].map((_, j) => (
                    <Skeleton key={j} className="h-32 w-full" />
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <Skeleton className="h-64 w-full" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-6">
            <Skeleton className="h-8 w-64 mx-auto" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[...Array(12)].map((_, i) => (
                <Skeleton key={i} className="h-20 w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-6">
            <Skeleton className="h-8 w-48 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}