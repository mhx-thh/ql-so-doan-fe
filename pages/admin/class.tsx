import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import AdminLayout from "components/layout/AdminLayout";
import configApi from "api/configApi";

export default function Classes() {
  const [facultys, setFacultyse] = useState([]);
  async function fetchFacultyList() {
    Swal.fire({
      title: "Loading data",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const res = await configApi.getFacultyList("");
      const data = res?.data?.data?.result;
      setFacultyse(data);
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  async function createFaculty(formValues: any) {
    Swal.fire({
      title: "Đang thực thi",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      await configApi.newFaculty(formValues, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
    fetchFacultyList();
  }
  useEffect(() => {
    fetchFacultyList();
  }, []);

  async function onCreateClick() {
    console.log("here");
  }

  return (
    <AdminLayout>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-lg light">Khoa</h3>
                </div>
                <button
                  onClick={onCreateClick}
                  className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Tạo mới
                </button>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                      Tên viết tắt
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                      Tên chi tiết
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  {facultys.map((e, i) => {
                    return (
                      <tr key={i}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          <span className="ml-3 font-bold text-blueGray-600">
                            {e.NameShort}
                          </span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {e.NameFull}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                          {/* <TableDropdown /> */}
                          action
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
