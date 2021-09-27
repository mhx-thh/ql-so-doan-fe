import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import AdminLayout from "components/layout/AdminLayout";
import AddOrEditFaculty from "components/adminPage/AddOrEditFaculty";

import facultyApi from "api/configApi";

import { FacultyModel } from "lib/models";

export default function Classes() {
  const [faculties, setFaculties] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [faculty, setFaculty] = useState<FacultyModel>(null);
  const [isView, setIsView] = useState(false);

  async function fetchFaculty() {
    Swal.fire({
      title: "Loading data",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const res = await facultyApi.getFacultyList("");
      const data = res?.data?.data?.result;
      setFaculties(data);
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  async function createFaculty(formValues: FacultyModel) {
    Swal.fire({
      title: "Đang thực thi",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      await facultyApi.newFaculty(formValues, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  async function editFaculty(id: string, formValues: FacultyModel) {
    Swal.fire({
      title: "Đang thực thi",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      await facultyApi.editFaculty(id, formValues, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  async function delFaculty(index: number) {
    Swal.fire({
      title: "Đang thực thi",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      await facultyApi.delFaculty(faculties[index]._id, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }

  useEffect(() => {
    fetchFaculty();
  }, []);

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
        await delFaculty(index);
        fetchFaculty();
      }
    });
  }
  async function onEditClick(index: number) {
    setFaculty(faculties[index]);
    setIsEdit(true);
    setOpen(true);
  }
  async function onAddClick() {
    setFaculty(null);
    setIsEdit(false);
    setOpen(true);
  }

  async function onAddOrEditDoneClick() {
    setOpen(false);
    if (isEdit) {
      await editFaculty(faculty?._id, faculty);
    } else {
      await createFaculty(faculty);
    }
    fetchFaculty();
  }

  function onViewClassClick(index: number) {
    setFaculty(faculties[index]);
    setIsView(true);
  }

  return (
    <>
      {isOpen && (
        <AddOrEditFaculty
          isEdit={isEdit}
          setOpen={setOpen}
          faculty={faculty}
          setFaculty={setFaculty}
          onAddOrEditDoneClick={onAddOrEditDoneClick}
        />
      )}
      <AdminLayout>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-lg light">
                      Danh sách khoa
                    </h3>
                  </div>
                  <button
                    onClick={onAddClick}
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
                    {faculties.map((e, i) => {
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
                            <div className="group inline-block">
                              <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                                <i className="fas fa-ellipsis-v group-hover:-rotate-90"></i>
                              </button>
                              <ul
                                className="z-10 bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
    transition duration-150 ease-in-out origin-top min-w-32"
                              >
                                <button
                                  onClick={() => onViewClassClick(i)}
                                  className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                >
                                  Xem Chi đoàn
                                </button>
                                <button
                                  onClick={() => onEditClick(i)}
                                  className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                >
                                  Chỉnh sửa
                                </button>
                                <button
                                  onClick={() => onDelClick(i)}
                                  className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                >
                                  Xóa bỏ
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

            {/* ================================= */}
            {/* =============================== */}

            {isView && (
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-lg light">
                        Chi đoàn của {faculty.NameFull}
                      </h3>
                    </div>
                    <button
                      onClick={onAddClick}
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
                      {faculties.map((e, i) => {
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
                              <div className="group inline-block">
                                <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                                  <i className="fas fa-ellipsis-v group-hover:-rotate-90"></i>
                                </button>
                                <ul
                                  className="z-10 bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
    transition duration-150 ease-in-out origin-top min-w-32"
                                >
                                  <button
                                    onClick={() => onViewClassClick(i)}
                                    className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                  >
                                    Xem Chi đoàn
                                  </button>
                                  <button
                                    onClick={() => onEditClick(i)}
                                    className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                  >
                                    Chỉnh sửa
                                  </button>
                                  <button
                                    onClick={() => onDelClick(i)}
                                    className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                  >
                                    Xóa bỏ
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
            )}
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
