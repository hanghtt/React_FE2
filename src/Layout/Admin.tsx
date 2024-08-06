import React from "react";

import DefaultLayout from "../components/Admin/DefaultLayout";
import { Outlet } from "react-router-dom";

const Admin: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="s">
        <Outlet />
      </div>
    </DefaultLayout>
  );
};

export default Admin;
