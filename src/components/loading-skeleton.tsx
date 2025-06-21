import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <div className="flex min-h-screen fixed z-50 top-0 w-screen flex-col bg-white">
      <header className="bg-gray-300">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex flex-col space-y-1">
            <Skeleton className="h-7 w-20 bg-gray-200" />
            <Skeleton className="h-3 w-40 bg-gray-200" />
          </div>

          <div className="hidden items-center space-x-6 lg:flex">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-16 bg-gray-200 md:w-20" />
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Skeleton className="h-5 w-5 rounded-full bg-gray-200" />
            <Skeleton className="h-5 w-5 rounded-full bg-gray-200" />
            <Skeleton className="h-9 w-24 bg-gray-700" />
          </div>
        </div>
      </header>

      <main className="relative flex-grow">
        <div className="relative h-[calc(100vh-160px)] min-h-[500px] w-full">
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
      </main>

      <nav className="border-t border-gray-200 bg-gray-50 py-4">
        <div className="container mx-auto flex items-center space-x-6 px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-4 w-16" />
          </div>

          <div className="flex items-center space-x-6 overflow-x-auto">
            {[...Array(7)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-20 md:w-24" />
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
