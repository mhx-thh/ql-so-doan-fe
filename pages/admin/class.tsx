import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import AdminLayout from "components/layout/AdminLayout";
import AddOrEditFaculty from "components/adminPage/AddOrEditFaculty";

import configApi from "api/configApi";

import { ClassModel, FacultyModel } from "lib/models";
import AddOrEditClass from "components/adminPage/AddOrEditClass";

export default function Classes() {
  // State Faculty
  const [faculties, setFaculties] = useState<Array<FacultyModel>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [faculty, setFaculty] = useState<FacultyModel>(null);
  const [hideFaculty, setHideFaculty] = useState(false);
  // State Class
  const [classes, setClasses] = useState<Array<ClassModel>>([]);
  const [isView, setIsView] = useState(false);
  const [openClass, setOpenClass] = useState(false);
  const [isClassEdit, setIsClassEdit] = useState(false);
  const [aClass, setAClass] = useState<ClassModel>(null);

  // <--------- Function fetch data: Faculty, Class ----------->
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
      const res = await configApi.getFacultyList("");
      const data = res?.data?.data?.result;
      setFaculties(data);
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  async function fetchClass() {
    Swal.fire({
      title: "Loading data",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const res = await configApi.getClassList("");
      const data = res?.data?.data?.result;
      setClasses(data);
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }

  // <------------------------- FACULTY ----------------------->
  // Async function create/edit/delete faculty
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
      await configApi.newFaculty(formValues, "");
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
      await configApi.editFaculty(id, formValues, "");
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
      await configApi.delFaculty(faculties[index]._id, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }

  //  Effect get API
  useEffect(() => {
    fetchFaculty();
    fetchClass();
  }, []);

  // Function Faculty Click
  function onDelFacultyClick(index: number) {
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
  async function onEditFacultyClick(index: number) {
    setFaculty(faculties[index]);
    setIsEdit(true);
    setIsOpen(true);
  }
  async function onAddFacultyClick() {
    setFaculty(null);
    setIsEdit(false);
    setIsOpen(true);
  }
  async function onAddOrEditDoneFacultyClick() {
    setIsOpen(false);
    if (isEdit) {
      await editFaculty(faculty?._id, faculty);
    } else {
      await createFaculty(faculty);
    }
    fetchFaculty();
  }

  // <---------------------------------- CLASS ------------------------>
  // Function edit/create/del Class
  async function createClass(formValues: ClassModel) {
    Swal.fire({
      title: "Đang thực thi",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      await configApi.newClass(formValues, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  async function editClass(id: string, formValues: ClassModel) {
    Swal.fire({
      title: "Đang thực thi",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      await configApi.editClass(id, formValues, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  async function delClass(index: number) {
    Swal.fire({
      title: "Đang thực thi",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      await configApi.delClass(classes[index]._id, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  function onViewClassClick(index: number) {
    setFaculty(faculties[index]);
    setIsView(true);
    setHideFaculty(true);
  }

  // Function Class Click
  async function onAddOrEditDoneClassClick() {
    setOpenClass(false);
    try {
      if (isClassEdit) {
        await editClass(aClass?._id, aClass);
      } else {
        await createClass(aClass);
      }
    } catch (e) {
      console.log(e);
    }
    fetchClass();
  }
  function onDelClassClick(index: number) {
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
        await delClass(index);
        fetchClass();
      }
    });
  }
  async function onEditClassClick(index: number) {
    setAClass(classes[index]);
    setIsClassEdit(true);
    setOpenClass(true);
  }
  async function onAddClassClick() {
    setAClass(null);
    setIsClassEdit(false);
    setOpenClass(true);
  }
  function ClickViewClass() {
    setHideFaculty(false);
  }
  return (
    <>
      {isOpen && (
        <AddOrEditFaculty
          isEdit={isEdit}
          setOpen={setIsOpen}
          faculty={faculty}
          setFaculty={setFaculty}
          onAddOrEditDoneClick={onAddOrEditDoneFacultyClick}
        />
      )}
      {openClass && (
        <AddOrEditClass
          isEdit={isClassEdit}
          setOpen={setOpenClass}
          faculty={faculty}
          classes={aClass}
          setClasses={setAClass}
          onAddOrEditDoneClick={onAddOrEditDoneClassClick}
        />
      )}
      <AdminLayout>
        {/* {hideFaculty === false && */}
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            {hideFaculty === false && (
              <div>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                  <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-lg light">
                          Danh sách khoa
                        </h3>
                      </div>
                      <button
                        onClick={onAddFacultyClick}
                        className="bg-blueGray-600 hover:bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Tạo khoa mới
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
                                  <ul className="z-10 bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                                    <button
                                      onClick={() => onViewClassClick(i)}
                                      className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                    >
                                      Xem Chi đoàn
                                    </button>
                                    <button
                                      onClick={() => onEditFacultyClick(i)}
                                      className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                    >
                                      Chỉnh sửa
                                    </button>
                                    <button
                                      onClick={() => onDelFacultyClick(i)}
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
              </div>
            )}
            {/* ================================= */}
            {/* =============================== */}

            {isView && hideFaculty === true && (
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="flex relative w-full max-w-full flex-grow flex-1">
                      <button
                        className="rotate-180 flex hover:bg-gray-200 px-2"
                        onClick={ClickViewClass}
                      >
                        <p className="-rotate-180 px-2 font-semibold text-lg light text-gray-600">
                          Quay về
                        </p>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-1"
                        >
                          <g clipPath="url(#clip0)">
                            <path
                              d="M6 2L18 12L6 22V2Z"
                              stroke="black"
                              strokeWidth="2"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="matrix(-1 0 0 1 24 0)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                      <h3 className="font-semibold text-lg light pl-4">
                        Chi đoàn của {faculty?.NameFull}
                      </h3>
                    </div>
                    <button
                      onClick={onAddClassClick}
                      className="bg-blueGray-600 hover:bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Thêm chi đoàn
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
                          Khoa
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {classes
                        .filter((e) => e.Faculty._id === faculty?._id)
                        .map((e, i) => {
                          return (
                            <tr key={i}>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                <span className="ml-3 font-bold text-blueGray-600">
                                  {e.Name}
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {e.Faculty.NameFull}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                <div className="group inline-block">
                                  <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                                    <i className="fas fa-ellipsis-v group-hover:-rotate-90"></i>
                                  </button>
                                  <ul className="z-10 bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                                    <button
                                      onClick={() => onEditClassClick(i)}
                                      className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                    >
                                      Chỉnh sửa
                                    </button>
                                    <button
                                      onClick={() => onDelClassClick(i)}
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
