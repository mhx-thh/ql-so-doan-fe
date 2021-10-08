import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { BookModel, ClassModel, HistoryModel } from "lib/models";

import bookApi from "api/bookApi";
import configApi from "api/configApi";

import ViewBook from "components/adminPage/ViewBook";
import { ConvertTime } from "components/ConvertTime";
import AddOrEditHistory from "components/adminPage/AddOrEditHistory";
import AdminLayout from "components/layout/AdminLayout";

export default function Books() {
  const [classes, setClasses] = useState<Array<ClassModel>>([]);

  const [book, setBook] = useState<BookModel>(null);
  const [books, setBooks] = useState<Array<BookModel>>(null);
  const [open, setOpen] = useState(false);
  const [hideBook, setHideBook] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [history, setHistory] = useState<HistoryModel>(null);
  const [histories, setHistories] = useState<Array<HistoryModel>>(null);
  const [openHistory, setOpenHistory] = useState(false);

  // FetchApi: Books, BookWithSID, Histories
  async function fetchClassList() {
    // Swal.fire({
    //   title: "Loading data",
    //   icon: "info",
    //   timerProgressBar: true,
    //   didOpen: () => {
    //     Swal.showLoading();
    //   },
    // });
    try {
      const res = await configApi.getClassList("");
      const data = res?.data?.data?.result;
      setClasses(data);
    } catch (error) {
      console.log(error.message);
    }
    // Swal.close();
  }
  async function fetchBookList() {
    // Swal.fire({
    //   title: "Loading data",
    //   icon: "info",
    //   timerProgressBar: true,
    //   didOpen: () => {
    //     Swal.showLoading();
    //   },
    // });
    try {
      const res = await bookApi.getBookList();
      const data = res?.data?.data?.result;
      setBooks(data);
    } catch (error) {
      console.log(error.message);
    }
    // Swal.close();
  }
  async function fetchHistoryList() {
    // Swal.fire({
    //   title: "Loading data",
    //   icon: "info",
    //   timerProgressBar: true,
    //   didOpen: () => {
    //     Swal.showLoading();
    //   },
    // });
    try {
      const res = await configApi.getHistoryList();
      const data = res?.data?.data?.result;
      setHistories(data);
    } catch (error) {
      console.log(error.message);
    }
    // Swal.close();
  }
  async function fetchClass() {
    // Swal.fire({
    //   title: "Loading data",
    //   icon: "info",
    //   timerProgressBar: true,
    //   didOpen: () => {
    //     Swal.showLoading();
    //   },
    // });
    try {
      const res = await configApi.getClassList("");
      const data = res?.data?.data?.result;
      setClasses(data);
    } catch (error) {
      console.log(error.message);
    }
    // Swal.close();
  }

  useEffect(() => {
    async function fetchData() {
      Swal.fire({
        title: "Loading data",
        icon: "info",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      await fetchBookList();
      await fetchClass();
      await fetchHistoryList();
      await fetchClassList();
      Swal.close();
    }
    fetchData();
  }, []);

  // Function create, delete, updateApi
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
  async function delBook(id: string) {
    Swal.fire({
      title: "Đang thực thi",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      await bookApi.delBook(id, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  async function delHistory(id: string) {
    Swal.fire({
      title: "Đang thực thi",
      icon: "info",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      await configApi.delHistory(id, "");
    } catch (error) {
      console.log(error.message);
    }
    Swal.close();
  }
  async function editHistory(id: string, formValues: HistoryModel) {
    // Swal.fire({
    //   title: "Đang thực thi",
    //   icon: "info",
    //   timerProgressBar: true,
    //   didOpen: () => {
    //     Swal.showLoading();
    //   },
    // });
    try {
      await configApi.editHistory(id, formValues, "");
    } catch (error) {
      console.log(error.message);
    }
    // Swal.close();
  }
  async function createHistory(formValues: HistoryModel) {
    // Swal.fire({
    //   title: "Đang thực thi",
    //   icon: "info",
    //   timerProgressBar: true,
    //   didOpen: () => {
    //     Swal.showLoading();
    //   },
    // });
    try {
      await configApi.newHistory(formValues, "");
    } catch (error) {
      console.log(error.message);
    }
    // Swal.close();
  }
  // Function when Click Button
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
          await fetchBookList();
          Swal.fire({
            icon: "success",
            title: `Duyệt thành công`,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
  // Todo
  function onRequestClick(index: number) {
    // Điều hướng sang trang Request
  }
  function onViewHistoryClick(index: number) {
    setBook(books[index]);
    setHideBook(true);
  }
  // Todo
  function onUpdateClick(index: number) {
    Swal.fire({
      title: "Bạn đã hoàn thành Yêu cầu này",
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
  function onViewBookClick(index: number) {
    setBook(books[index]);
    setOpen(true);
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
        await delBook(books[index]._id);
        await fetchBookList();
        Swal.fire({
          icon: "success",
          title: `Xoá thành công`,
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  }
  function onDelHistoryClick(index: number) {
    try {
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
          await delHistory(histories[index]._id);
          await fetchHistoryList();
          Swal.fire({
            icon: "success",
            title: `${isEdit ? "Chỉnh sửa" : "Tạo"} thành công`,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    } catch (e) {
      Swal.fire("Something wrong !", "Đã xảy ra lỗi", "error");
      console.log(e);
    }
  }
  function onAddHistoryClick() {
    setIsEdit(false);
    setHistory({
      Book: book?._id,
      Class: null,
      Content: "",
      Time: undefined,
    });
    setOpenHistory(true);
  }
  function onUpdateHistoryClick(index: number) {
    setIsEdit(true);
    setHistory(histories[index]);
    setOpenHistory(true);
  }
  function onClickViewBook() {
    setHideBook(false);
  }
  async function onAddOrEditDoneClick() {
    setOpenHistory(false);
    try {
      Swal.fire({
        title: "Loading data",
        icon: "info",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      if (isEdit) {
        await editHistory(history?._id, history);
      } else {
        await createHistory(history);
      }
      await fetchBookList();
      await fetchHistoryList();
      Swal.fire({
        icon: "success",
        title: `${isEdit ? "Chỉnh sửa" : "Tạo"} thành công`,
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (e) {
      Swal.fire("Đã xảy ra lỗi!!", "", "error");
      console.log(e);
    }
  }

  return (
    <>
      {open && <ViewBook setOpen={setOpen} book={book} />}
      {openHistory && (
        <AddOrEditHistory
          history={history}
          onAddOrEditDoneClick={onAddOrEditDoneClick}
          setHistory={setHistory}
          setOpen={setOpenHistory}
          isEdit={isEdit}
          classes={classes}
        />
      )}
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
                                      onClick={() => onViewBookClick(i)}
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
                                        onClick={() => onViewHistoryClick(i)}
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
                        className="rotate-180 flex hover:bg-gray-200 px-2 hover:rounded-xl"
                        onClick={onClickViewBook}
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
                        Lịch sử sổ đoàn của {book?.SID} - {book?.Name}
                      </h3>
                    </div>
                    <button
                      onClick={onAddHistoryClick}
                      className="bg-blueGray-600 active:bg-blueGray-600 hover:bg-blueGray-700 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
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
                      {histories
                        ?.filter((e) => e.Book === book._id)
                        .map((e, i) => {
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
                                {e?.Content}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                <div className="group inline-block">
                                  <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                                    <i className="fas fa-ellipsis-v group-hover:-rotate-90"></i>
                                  </button>
                                  <ul className="z-10 bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                                    <button
                                      onClick={() => onUpdateHistoryClick(i)}
                                      className="block w-full rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-medium"
                                    >
                                      Cập nhật
                                    </button>
                                    <button
                                      onClick={() => onDelHistoryClick(i)}
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
