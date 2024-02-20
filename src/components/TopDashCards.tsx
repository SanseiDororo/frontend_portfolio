type topDashCardsProps = {}

const TopDashCards = (props: topDashCardsProps) => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4 gap-2">
          <p className="text-black text-2xl font-bold">$ 4,589</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center px-2 rounded-lg text-black">
          <span className="text-green-800 text-lg"> +17% </span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4 gap-2">
          <p className="text-black text-2xl font-bold">$ 2,434,589</p>
          <p className="text-gray-600">Overall Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center px-2 rounded-lg text-black">
          <span className="text-green-800 text-lg"> +4% </span>
        </p>
      </div>
      <div className=" bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4 gap-2">
          <p className="text-black text-2xl font-bold">15,553</p>
          <p className="text-gray-600">Products Sold</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center px-2 rounded-lg text-black">
          <span className="text-green-800 text-lg"> +23% </span>
        </p>
      </div>
    </div>
  )
}
export default TopDashCards
