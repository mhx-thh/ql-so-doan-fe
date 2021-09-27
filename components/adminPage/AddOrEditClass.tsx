import React from "react";
import useClickOutside from "components/clickOutside/clickOutside";

import { FacultyModel } from "lib/models";

type AppProp = {
  isEdit?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  faculty: FacultyModel;
  setFaculty: React.Dispatch<React.SetStateAction<FacultyModel>>;
  onAddOrEditDoneClick: () => void;
};

const AddOrEditFaculty = ({
  isEdit,
  setOpen,
  faculty,
  setFaculty,
  onAddOrEditDoneClick,
}: AppProp) => {
  const ref = useClickOutside(() => {
    setOpen(false);
  });
  return (
    <div className="absolute w-full left-0 top-0 z-20 flex justify-center h-screen items-center bg-gray-500 bg-opacity-20 antialiased">
      <div
        ref={ref}
        className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl overscroll-contain overflow-auto max-h-full scrollbar-hide"
      >
        <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
          <p className="font-semibold text-gray-800">
            {isEdit ? "Cập nhật" : "Thêm mới"}
          </p>
          <i
            onClick={() => setOpen(false)}
            className="fas fa-times hover:cursor-pointer"
          ></i>
        </div>
        <div className="flex flex-col px-6 py-5 bg-gray-50">
          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Tên viết tắt</p>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                defaultValue={faculty?.NameShort}
                onChange={(e) =>
                  setFaculty({ ...faculty, NameShort: e.target.value })
                }
              />
            </div>
            <div className="w-full mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-700">Tên đầy đủ</p>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                defaultValue={faculty?.NameFull}
                onChange={(e) =>
                  setFaculty({ ...faculty, NameFull: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
          <p
            onClick={() => setOpen(false)}
            className="font-semibold text-gray-600 hover:cursor-pointer"
          >
            Hủy
          </p>
          <button
            onClick={onAddOrEditDoneClick}
            className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
          >
            {isEdit ? "Cập nhật" : "Thêm mới"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddOrEditFaculty;
