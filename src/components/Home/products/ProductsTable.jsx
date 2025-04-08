import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

export default function ProductsTable() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const options = {
        method: "GET",
        url: "https://ecommerce.zerobytetools.com/api/products?Page=1&Limit=10",
      };

      try {
        const { data } = await axios.request(options);
        console.log(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });
  console.log(data?.data?.items);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error With fetching data</div>;
  }
  return (
    <div className="border border-gray-300  p-10 rounded-xl shadow-xl">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">All Products</h2>
        <div>
          <button className="bg-[var(--secondary-color)] px-7 py-2 text-lg text-white rounded-lg">
            Add New
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <div className="grid grid-cols-12 py-3">
          <div className="col-span-4">Name</div>
          <div className="col-span-2">Category</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-1">Stock</div>
          <div className="col-span-1">Sales</div>
          <div className="col-span-2 text-center">Actions</div>
        </div>
        {data?.data?.items.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-12 border-t border-gray-300 py-5 gap-5"
          >
            <div className="col-span-4 truncate">{product.title}</div>
            <div className="col-span-2">{product.category || "__"}</div>
            <div className="col-span-2">{product.price} EGP</div>
            <div className="col-span-1">{product.stock  || "__"}</div>
            <div className="col-span-1">{product.sales  || "__"}</div>
            <div className="col-span-2 flex justify-center gap-2">
              <button className="text-teal-600 text-2xl">
                <FaRegEdit />
              </button>
              <button className="text-red-600 text-2xl">
                <GoTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
