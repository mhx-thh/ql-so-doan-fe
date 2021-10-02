import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import AdminLayout from "components/layout/AdminLayout";
import AddOrEditPlace from "components/adminPage/AddOrEditPlace";

import placeApi from "api/configApi";

import { PlaceModel } from "lib/models";

export default function Places() {
  const [places, setPlacese] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [place, setPlace] = useState<PlaceModel>(null);

  async function fetchPlaceList() {
    Swal.fire({
      title: "Loading data",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const res = await placeApi.getPlaceList("");
      const data = res?.data?.data?.result;
      setPlacese(data);
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  async function createPlace(formValues: PlaceModel) {
    Swal.fire({
      title: "Đang thực thi",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      await placeApi.newPlace(formValues, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  async function editPlace(id: string, formValues: PlaceModel) {
    Swal.fire({
      title: "Đang thực thi",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      await placeApi.editPlace(id, formValues, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  async function delPlace(index: number) {
    Swal.fire({
      title: "Đang thực thi",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      await placeApi.delPlace(places[index]._id, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }

  useEffect(() => {
    fetchPlaceList();
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
        await delPlace(index);
        fetchPlaceList();
      }
    });
  }
  async function onEditClick(index: number) {
    setPlace(places[index]);
    setIsEdit(true);
    setOpen(true);
  }
  async function onAddClick() {
    setPlace(null);
    setIsEdit(false);
    setOpen(true);
  }

  async function onAddOrEditDoneClick() {
    setOpen(false);
    if (isEdit) {
      await editPlace(place?._id, place);
    } else {
      await createPlace(place);
    }
    fetchPlaceList();
  }

  return (
    <>
      {isOpen && (
        <AddOrEditPlace
          isEdit={isEdit}
          setOpen={setOpen}
          place={place}
          setPlace={setPlace}
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
                      Vị trí lưu trữ
                    </h3>
                  </div>
                  <button
                    onClick={onAddClick}
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Thêm vị trí lưu trữ
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
                        Chú thích thêm
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {places.map((e, i) => {
                      return (
                        <tr key={i}>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <span className="ml-3 font-bold text-blueGray-600">
                              {e.ShortHand}
                            </span>
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {e.Name}
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
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
