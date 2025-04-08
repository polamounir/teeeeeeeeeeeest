import CircularProgress from "../../ui/CircularProgress";

export default function MainInsightsCard() {
  const percentage = Math.floor(Math.random() * 100);


  return (
    <div className="border border-gray-200 p-5 py-10 shadow-xl rounded-xl">
      <div className="flex justify-between">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold">$ 7.660</h2>
          <p className="text-xl">Total sales</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-gray-100 rounded-full">
            <CircularProgress value={percentage} />
          </div>
        </div>
      </div>
    </div>
  );
}
