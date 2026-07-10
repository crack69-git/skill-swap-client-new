"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div>
      <Link
        href={href}
        className={`flex items-center gap-1 px-3 py-2 rounded ${isActive ? "bg-blue-600 text-white " : ""}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
