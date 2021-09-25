import React from "react";

// components

import CardTable from "components/adminPage/Cards/CardTable";

// layout for page

import AdminLayout from "components/layout/AdminLayout";

export default function Requests() {
  return (
    <AdminLayout>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
      </div>
    </AdminLayout>
  );
}
