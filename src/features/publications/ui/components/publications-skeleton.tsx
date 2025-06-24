import { Skeleton } from "@/components/ui/skeleton";

export function PublicationsSkeleton() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-9 w-24" />
      </div>

      {[2024, 2023].map((year) => (
        <div key={year} className="space-y-6">
          <Skeleton className="h-8 w-16" />

          <div className="space-y-4">
            {Array.from({ length: year === 2024 ? 4 : 2 }).map((_, index) => (
              <div key={index}>
                <div className="flex items-start gap-6 py-4">
                  <div className="flex-shrink-0 w-24">
                    <Skeleton className="h-4 w-20" />
                  </div>

                  <div className="flex-shrink-0 flex items-center gap-2">
                    <Skeleton className="w-2 h-2 rounded-full" />
                    <Skeleton className="h-3 w-8" />
                  </div>

                  <div className="flex-1 min-w-0 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>

                  <div className="flex-shrink-0">
                    <Skeleton className="h-5 w-5" />
                  </div>
                </div>

                {index < (year === 2024 ? 3 : 1) && (
                  <div className="border-b border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
