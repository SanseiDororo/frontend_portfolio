import React from 'react'

const SkeletonLoader = () => {
  return (
    <main className="px-3 max-w-[90%] mx-auto flex-col gap-9 w-full pb-10 pt-28">
      <section className="space-y-8 animate-pulse">
        <div className="space-y-6">
          {/* Skeleton for the heading */}
          <div className="flex gap-1 items-center">
            <div className="h-6 bg-gray-300/5 rounded w-3/4"></div>
            <div className="h-6 bg-gray-300/5 rounded w-1/4"></div>
          </div>
          {/* Skeleton for the main temperature display */}
          <div className="flex gap-16 px-6 items-center">
            <div className="flex flex-col px-4 gap-4">
              <div className="h-12 bg-gray-300/5 rounded w-full"></div>
              <div className="flex flex-col items-center">
                <div className="h-4 bg-gray-300/10 rounded w-3/4 mb-2"></div>
                <div className="flex gap-2">
                  <div className="h-4 bg-gray-300/5 rounded w-20"></div>
                  <div className="h-4 bg-gray-300/5 rounded w-20"></div>
                </div>
              </div>
            </div>
            {/* Skeleton for time and weather icons */}
            <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full py-12">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex flex-col gap-2 items-center">
                    <div className="h-4 bg-gray-300/5 rounded w-16"></div>
                    <div className="h-10 bg-gray-300/5 rounded w-10"></div>
                    <div className="h-4 bg-gray-300/5 rounded w-16"></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          {/* Skeletons for left and right containers */}
          <div className="w-fit flex flex-col items-center p-16">
            <div className="h-6 bg-gray-300/5 rounded w-32 mb-4"></div>
            <div className="h-10 bg-gray-300/5 rounded w-10"></div>
          </div>
          <div className="bg-slate-200/5 w-full px-6 gap-4 overflow-x-auto">
            <div className="flex gap-4 flex-wrap">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="h-4 bg-gray-300/5 rounded w-32"
                  ></div>
                ))}
            </div>
          </div>
        </div>
        {/* Skeleton for 7-day forecast */}
        <div className="space-y-8">
          <div className="h-6 bg-gray-300/5 rounded w-1/2 mb-6"></div>
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex gap-4">
                <div className="h-4 bg-gray-300/5 rounded w-1/4"></div>
                <div className="h-4 bg-gray-300/5 rounded w-3/4"></div>
              </div>
            ))}
        </div>
      </section>
    </main>
  )
}

export default SkeletonLoader
