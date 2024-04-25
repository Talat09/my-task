"use client";
import React from "react";
import menu from "@/app/utils/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
const TopBar = () => {
  const pathname = usePathname();
  const handleClick = (link: string) => {
    window.location.href = link;
  };
  return (
    <div className="top-bar w-full h-20 bg-gray-800 text-white flex justify-center">
      <ul className="nav-items md:flex  md:items-center gap-5">
        {menu.map((item) => {
          const link = item.link;
          return (
            <li
              key={item.id}
              className={`nav-item ${
                pathname === link ? "active" : ""
              } bg-black px-4 py-2 rounded-md`}
              onClick={() => {
                handleClick(link);
              }}
            >
              {item.icon}
              <Link href={link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopBar;
