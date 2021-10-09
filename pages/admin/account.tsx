import React from "react";

// components

import CardSettings from "components/adminPage/Cards/CardSettings";

// layout for page

import AdminLayout from "components/layout/AdminLayout";

export default function Settings() {
  return (
    <AdminLayout>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CardSettings />
        </div>
      </div>
    </AdminLayout>
  );
}
