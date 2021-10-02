import React from "react";
import useClickOutside from "components/clickOutside/clickOutside";

import { RequestModel } from "lib/models";
import { ConvertTime } from "components/ConvertTime";

type AppProp = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  request: RequestModel;
};

const ViewRequest = ({ setOpen, request }: AppProp) => {
  const ref = useClickOutside(() => {
    setOpen(false);
  });
  return (
    <div className="absolute w-full left-0 top-0 z-20 flex justify-center h-screen items-center bg-gray-500 bg-opacity-20 antialiased">
      <div
        ref={ref}
        className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl overscroll-contain overflow-auto max-h-full scrollbar-hide"
      >
        <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg text-middle">
          <p className="font-semibold text-gray-800 text-xl text-red-600 uppercase">
            {request?.Type === "profile"
              ? "Cập nhập sổ đoàn"
              : request?.Type === "rut_so_doan"
              ? "Yêu cầu rút sổ đoàn"
              : request?.Type === "chuyen_chi_doan"
              ? "Yêu cầu chuyển chi đoàn"
              : ""}
          </p>
          <i
            onClick={() => setOpen(false)}
            className="fas fa-times hover:cursor-pointer hover:-mt-0.5 "
          ></i>
        </div>
        <div className="flex flex-col px-6 py-5 bg-gray-50">
          <div className="grid grid-cols-3 gap-4 font-semibold text-gray-700 pb-6">
            <div className="col-span-2">Họ tên: {request.Book.Name}</div>
            <div className="">MSSV: {request.Book.SID}</div>
          </div>
          <div className="font-semibold text-gray-700 pb-6">
            Chi đoàn: {request.Book.Class.Name}
            {" - "}
            {request.Book.Class.Faculty.NameFull}
          </div>
          <div className=" font-semibold text-gray-700 pb-6">
            Email: {request.Book.Email}
          </div>
          <div className=" font-semibold text-gray-700 pb-6">
            SĐT: {request.Book.Phone}
          </div>
          <div className=" font-semibold text-gray-700 pb-6">
            Cập nhập trạng thái lúc: {ConvertTime(request?.updatedAt)}
          </div>
          <hr className="p-2" />
          <div className=" font-semibold text-gray-700 pb-3 text-lg">
            Tiêu đề: {request?.Title}
          </div>
          <div className="rounded-xl bg-white w-20 border border-solid border-black text-middle align-middle relative top-2 left-4">
            <p className="text-sm pl-2.5 text-black">Nội dung</p>
          </div>
          <textarea
            cols={30}
            rows={7}
            className="resize-none rounded-lg shadow bg-white p-2 sm:space-x-5"
            disabled
          >
            {request.Content}
          </textarea>
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
