import React from "react";

// components

import AdminNavbar from "components/adminPage/AdminNavbar";
import Sidebar from "components/adminPage/Sidebar";
import HeaderStats from "components/adminPage/HeaderStats";
import FooterAdmin from "components/footer/FooterAdmin";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
