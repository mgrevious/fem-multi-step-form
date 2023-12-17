import React from "react";
import { Outlet } from "react-router";

const RootLayout: React.FC = () => {
  return (
    <div className="mx-[16px] flex justify-center min-h-screen">
      <Outlet />
    </div>
  );
};

export default RootLayout;
