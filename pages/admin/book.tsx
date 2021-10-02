import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { BookModel } from "lib/models";

import AdminLayout from "components/layout/AdminLayout";
import bookApi from "api/bookApi";

import ViewBook from "components/adminPage/ViewBook";
import { ConvertTime } from "components/ConvertTime";
import { stringify } from "querystring";

export default function Books() {
  const [books, setBookse] = useState<Array<BookModel>>(null);
  const [isOpen, setOpen] = useState(false);
  const [book, setBook] = useState<BookModel>(null);
  const [hideBook, setHideBook] = useState(false);

  async function fetchBookList() {
    Swal.fire({
      title: "Loading data",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const res = await bookApi.getBookList();
      const data = res?.data?.data?.result;
      console.log(data);
      setBookse(data);
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }

  useEffect(() => {
    fetchBookList();
  }, []);

  function onViewClick(index: number) {
    setBook(books[index]);
    setOpen(true);
  }
  async function ApprovalClick(id: string, formValues: BookModel) {
    Swal.fire({
      title: "Đang thực thi",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      await bookApi.editBook(formValues, id, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  function onAprovalClick(index: number) {
    setBook({ ...book, Approval: true });
    try {
      Swal.fire({
        title: "Phê duyệt sổ đoàn này",
        text: "Thao tác này giúp bạn đánh dấu là Sổ đoàn này đã được duyệt thành công",
        icon: "info",
        confirmButtonColor: "#d33",
        confirmButtonText: "Thực hiện",
        showCancelButton: true,
        cancelButtonColor: "#3085d6",
        cancelButtonText: "Hủy",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await ApprovalClick(books[index]._id, book);
          fetchBookList();
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
  function onRequestClick(index: number) {
    // Điều hướng sang trang Request
  }
  function onHistoryClick(index: number) {
    setBook(books[index]);
    setHideBook(true);
  }
  function onUpdateClick(index: number) {
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
  function ClickViewBook() {
    setHideBook(false);
  }
  return (
    <>
      {isOpen && <ViewBook setOpen={setOpen} book={book} />}
      <AdminLayout>
        <div className="flex flex-wrap mt-4 box-border">
          <div className="w-full mb-12 px-4">
            {hideBook === false && (
              <div>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                  <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-lg light">
                          Danh sách Sổ đoàn
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead>
                        <tr>
                          <th className="pl-12 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                            MSSV
                          </th>
                          <th className="px-5 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                            Chi đoàn
                          </th>
                          <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                            Trạng thái
                          </th>
                          <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                            Yêu cầu
                          </th>
                          <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                            Vị trí lưu trữ
                          </th>
                          <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {books?.map((e, i) => {
                          const requestLen = e.requests?.filter(
                            (e) => e.Status !== "done"
                          ).length;
                          return (
                            <tr key={i}>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                <span className="ml-3 font-bold text-blueGray-600">
                                  {e.SID}
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {e.Class?.Name}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {e.Approval ? (
                                  <div className="flex">
                                    <i className="fas fa-circle text-green-500 mr-2 mt-0.5" />
                                    <p>Đã duyệt</p>
                                  </div>
                                ) : (
                                  <div className="flex">
                                    <i className="fas fa-circle text-red-500 mr-2 mt-0.5" />
                                    <p>Chưa duyệt</p>
                                  </div>
                                )}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                <div className="flex pl-3">{requestLen}</div>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {e.Place?.ShortHand}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                <div className="group inline-block">
                                  <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                                    <i className="fas fa-ellipsis-v group-hover:-rotate-90"></i>
                                  </button>
                                  <ul className="z-10 bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                                    <button
                                      onClick={() => onViewClick(i)}
                                      className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                    >
                                      Xem chi tiết
                                    </button>
                                    {!e.Approval && (
                                      <button
                                        onClick={() => onAprovalClick(i)}
                                        className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                      >
                                        Duyệt sổ
                                      </button>
                                    )}
                                    {requestLen !== 0 && (
                                      <button
                                        onClick={() => onRequestClick(i)}
                                        className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                      >
                                        Xem yêu cầu
                                      </button>
                                    )}
                                    <button
                                      onClick={() => onUpdateClick(i)}
                                      className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                    >
                                      Cập nhật
                                    </button>
                                    {e.Approval && (
                                      <button
                                        onClick={() => onHistoryClick(i)}
                                        className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                      >
                                        Lịch sử
                                      </button>
                                    )}
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
            )}

            {/* ================================= */}
            {/* ================================= */}

            {hideBook === true && (
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="flex relative w-full max-w-full flex-grow flex-1">
                      <button
                        className="rotate-180 flex hover:bg-gray-200 px-2"
                        onClick={ClickViewBook}
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
                        {book.SID} - Lịch sử sổ đoàn
                      </h3>
                    </div>
                    <button
                      // onClick={onAddClick}
                      className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Tạo lịch sử
                    </button>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-9 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                          Thời gian
                        </th>
                        <th className="px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                          Chi đoàn
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                          Nội dung
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {book.histories?.map((e, i) => {
                        return (
                          <tr key={i}>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                              <span className="ml-3 font-bold text-blueGray-600">
                                {ConvertTime(e.Time.toString())}
                              </span>
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {e?.Class?.Name}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {e.Content}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                              <div className="group inline-block">
                                <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                                  <i className="fas fa-ellipsis-v group-hover:-rotate-90"></i>
                                </button>
                                <ul className="z-10 bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                                  <button
                                    onClick={() => onUpdateClick(i)}
                                    className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                  >
                                    Cập nhật
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
            )}
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
