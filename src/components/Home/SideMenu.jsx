import { useState } from "react";
import { Link } from "react-router";
import { IoSpeedometerOutline, IoBagOutline } from "react-icons/io5";
import { TfiPackage } from "react-icons/tfi";

import { FaRegCircleUser } from "react-icons/fa6";
import { BsGear } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
export default function SideMenu() {
  const links = [
    {
      id: 1,
      name: "Dashboard",
      link: "/chat",
      icon: <IoSpeedometerOutline />,
    },
    {
      id: 2,
      name: "Orders",
      link: "/dashboard/orders",
      icon: <IoBagOutline />,
    },
    {
      id: 3,
      name: "Products",
      link: "/dashboard/products",
      icon: <TfiPackage />,
    },
    {
      id: 4,
      name: "Users",
      link: "/dashboard/users",
      icon: <FaRegCircleUser />,
    },
    {
      id: 5,
      name: "Sales",
      link: "/dashboard/sales",
      icon: <AiOutlineDollar />,
    },
    {
      id: 6,
      name: "Settings",
      link: "/dashboard/settings",
      icon: <BsGear />,
    },
  ];
  const [activeLink, setActiveLink] = useState("Dashboard");
  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  const activeLinkStyles = {
    backgroundColor: "var(--secondary-color)",
    color: "white",
  };
  return (
    <div className="hidden md:block fixed start-0 top-0 bottom-0">
      <div className="h-full w-60 bg-[var(--main-color)]  pt-20">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl font-bold ps-3">Electro</h1>
          <div className=" pe-10 flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                className="py-3 rounded-br-full rounded-tr-full text-lg font-semibold ps-5 duration-400 flex items-center gap-5"
                style={activeLink === link.name ? activeLinkStyles : null}
                onClick={() => handleActiveLink(link.name)}
              >
                <span
                  className={`text-2xl ${
                    activeLink === link.name
                      ? "text-white"
                      : "text-[var(--secondary-color)]"
                  }`}
                >
                  {link.icon}
                </span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
          {/* <div className=" pe-10 flex flex-col gap-5">
            <Link
              to="/"
              className="py-3 rounded-br-full rounded-tr-full text-lg font-semibold ps-5"
              style={activeLink === "dashboard" ? activeLinkStyles : null}
            >
              Dashboard
            </Link>
            <Link
              to="/orders"
              className="py-3 rounded-br-full rounded-tr-full text-lg font-semibold ps-5"
            >
              Orders
            </Link>
            <Link
              to="/products"
              className="py-3 rounded-br-full rounded-tr-full text-lg font-semibold ps-5"
            >
              Products
            </Link>
            <Link
              to="/users"
              className="py-3 rounded-br-full rounded-tr-full text-lg font-semibold ps-5"
            >
              Users
            </Link>
            <Link
              to="/settings"
              className="py-3 rounded-br-full rounded-tr-full text-lg font-semibold ps-5"
            >
              Settings
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
