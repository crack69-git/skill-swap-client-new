import DashboardSidebar from "@/Components/MainComponents/Dashboard/DashboardSidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex ">
      <DashboardSidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default layout;
