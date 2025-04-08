import { IoIosNotificationsOutline } from "react-icons/io";
export default function DashboardHeader() {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="grow max-w-[50%]">
        <input type="text" className="w-full border border-gray-300 px-5 py-2 text-md rounded-full" placeholder="Search ..." name="SearchInput"/>
      </div>
      <div className="flex items-center gap-5">
        <button>
          <IoIosNotificationsOutline />
        </button>
        <div className="flex items-center gap-5">
          <h2 className="hidden md:block">USER NAME</h2>
          <div className="h-15 w-15 rounded-full bg-[var(--secondary-color)]"></div>
        </div>
      </div>
    </div>
  );
}
