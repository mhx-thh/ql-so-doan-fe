import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import AdminLayout from "components/layout/AdminLayout";
import ViewRequest from "components/adminPage/ViewRequest";

import requestApi from "api/bookApi";

import { RequestModel } from "lib/models";

export default function Places() {
  const [requests, setRequests] = useState<Array<RequestModel>>([]);
  const [isOpen, setOpen] = useState(false);
  const [request, setRequest] = useState<RequestModel>(null);

  async function fetchRequestList() {
    Swal.fire({
      title: "Loading data",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const res = await requestApi.getRequestList();
      const data = res?.data?.data?.result;
      setRequests(data);
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  async function editRequest(id: string, formValues: any) {
    Swal.fire({
      title: "Đang thực thi",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      // await requestApi.(id, formValues, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  async function delRequest(index: number) {
    Swal.fire({
      title: "Đang thực thi",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      // await requestApi.delPlace(requests[index]._id, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }

  useEffect(() => {
    fetchRequestList();
  }, []);

  function onViewClick(index: number) {
    setRequest(requests[index]);
    setOpen(true);
  }
  function onProcessClick(index: number) {
    Swal.fire({
      title: "Bạn muốn xử lý Yêu cầu này",
      text: "Thao tác này giúp bạn đánh dấu là Yêu cầu đang được xử lý",
      icon: "info",
      confirmButtonColor: "#d33",
      confirmButtonText: "Thực hiện",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // await delPlace(index);
        // fetchPlaceList();
      }
    });
  }
  function onDoneClick(index: number) {
    Swal.fire({
      title: "Bạn đã hoàn thành Yêu cầy này",
      text: "Thao tác này giúp bạn đánh dấu là Yêu cầu đã được hoàn thành",
      icon: "info",
      confirmButtonColor: "#d33",
      confirmButtonText: "Thực hiện",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // await delPlace(index);
        // fetchPlaceList();
      }
    });
  }
  function onDelClick(index: number) {
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: "Thao tác này có thế sẽ không quay lại được",
      icon: "warning",
      confirmButtonColor: "#d33",
      confirmButtonText: "Xóa!",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // await delRequest(index);
        // await fetchRequestList();
      }
    });
  }

  return (
    <>
      {isOpen && <ViewRequest setOpen={setOpen} request={request} />}
      <AdminLayout>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-lg light">Các yêu cầu</h3>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                {/* Projects table */}
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                        MSSV
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                        Loại
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                        Tiêu đề
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                        Trạng thái
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests?.map((e, i) => {
                      return (
                        <tr key={i}>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <span className="ml-3 font-bold text-blueGray-600">
                              {e.Book?.SID}
                            </span>
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {e.Type}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {e.Title}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {e.Status}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                            <div className="group inline-block">
                              <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                                <i className="fas fa-ellipsis-v group-hover:-rotate-90"></i>
                              </button>
                              <ul
                                className="z-10 bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
                              >
                                <button
                                  onClick={() => onViewClick(i)}
                                  className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                >
                                  Xem chi tiết
                                </button>
                                <button
                                  onClick={() => onProcessClick(i)}
                                  className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                >
                                  Xử lý
                                </button>
                                <button
                                  onClick={() => onDoneClick(i)}
                                  className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                >
                                  Hoàn thành
                                </button>
                                <button
                                  onClick={() => onDelClick(i)}
                                  className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                >
                                  Xóa
                                </button>
                              </ul>
                            </div>
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
    </>
  );
}
