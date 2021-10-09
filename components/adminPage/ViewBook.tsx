import React from "react";
import useClickOutside from "components/clickOutside/clickOutside";

import { BookModel } from "lib/models";
import { ConvertTime } from "components/ConvertTime";

type AppProp = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  book: BookModel;
};

const ViewRequest = ({ setOpen, book }: AppProp) => {
  const ref = useClickOutside(() => {
    setOpen(false);
  });
  console.log(book);
  return (
    <div className="absolute w-full left-0 top-0 z-20 flex justify-center h-screen items-center bg-gray-500 bg-opacity-20 antialiased">
      <div
        ref={ref}
        className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl overscroll-contain overflow-auto max-h-full scrollbar-hide"
      >
        <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg text-middle">
          <p className="font-semibold text-gray-800 text-xl text-red-600 uppercase">
            Thông tin sổ đoàn của {book?.Name}
          </p>
          <i
            onClick={() => setOpen(false)}
            className="fas fa-times hover:cursor-pointer hover:-mt-0.5 "
          ></i>
        </div>
        <div className="flex flex-col px-6 py-5 bg-gray-50">
          <div className="grid grid-cols-3 gap-4 font-semibold text-gray-700 pb-6">
            <div className="col-span-2">Họ tên: {book?.Name}</div>
            <div>MSSV: {book?.SID}</div>
          </div>
          <div className="grid grid-cols-3 gap-4 font-semibold text-gray-700 pb-6">
            <div className="col-span-2">
              Ngày sinh:{" "}
              {book?.DOB === null ? "" : ConvertTime(book?.DOB.toString())}
            </div>
            <div>
              Giới tính:{" "}
              {book?.Gender === "male"
                ? "Nam"
                : book?.Gender === "female"
                ? "Nữ"
                : book?.Gender}
            </div>
          </div>
          <div className=" font-semibold text-gray-700 pb-6">
            CMND/CCCD: {book?.IC}
          </div>
          <div className="grid grid-cols-3 gap-4 font-semibold text-gray-700 pb-6">
            <div className="col-span-2">Email: {book?.Email}</div>
            <div>SĐT: {book?.Phone}</div>
          </div>
          <hr className="p-2" />
          <div className="font-semibold text-gray-700 pb-6">
            Chi đoàn: {book?.Class?.Name}
            {" - "}
            {book?.Class?.Faculty?.NameFull}
          </div>
          <div className=" font-semibold text-gray-700 pb-6">
            Vị trí lưu trữ sổ đoàn: {book?.Place}
          </div>
          <div className=" font-semibold text-gray-700 pb-6">
            Ngày vào Đoàn:{" "}
            {book?.DJU === null ? "" : ConvertTime(book?.DJU.toString())}
          </div>
          <div className=" font-semibold text-gray-700 pb-6">
            Ngày vào Đảng:{" "}
            {book?.DJCP === null ? "" : ConvertTime(book?.DJCP.toString())}
          </div>
        </div>
        <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
          <p className="font-semibold text-gray-600 hover:cursor-pointer">
            {""}
          </p>
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-white font-semibold bg-blue-500 rounded hover:bg-blue-600"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
export default ViewRequest;
