import DashboardSidebar from "@/Components/MainComponents/Dashboard/DashboardSidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex  min-h-screen ">
      <DashboardSidebar />
      <main>{children}</main>
    </div>
  );
};

export default layout;
