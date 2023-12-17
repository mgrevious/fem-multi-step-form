import React from "react";
import { Outlet } from "react-router";

const RootLayout: React.FC = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen relative">
      <Outlet />
    </div>
  );
};

export default RootLayout;
