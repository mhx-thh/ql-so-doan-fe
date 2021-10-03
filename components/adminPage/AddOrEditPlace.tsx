import React from "react";
import useClickOutside from "components/clickOutside/clickOutside";

import { PlaceModel } from "lib/models";

type AppProp = {
  isEdit?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  place: PlaceModel;
  setPlace: React.Dispatch<React.SetStateAction<PlaceModel>>;
  onAddOrEditDoneClick: () => void;
};

const AddOrEditPlace = ({
  isEdit,
  setOpen,
  place,
  setPlace,
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
          <p className="font-semibold text-gray-800 uppercase text-xl text-red-600">
            {isEdit ? "Cập nhật vị trí" : "Thêm vị trí lưu trữ"}
          </p>
          <i
            onClick={() => setOpen(false)}
            className="fas fa-times hover:cursor-pointer hover:-mt-0.5"
          ></i>
        </div>
        <div className="flex flex-col px-6 py-5 bg-gray-50">
          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Tên viết tắt</p>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="ShortHand"
                defaultValue={place?.ShortHand}
                onChange={(e) =>
                  setPlace({ ...place, ShortHand: e.target.value })
                }
              />
            </div>
            <div className="w-full mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-700">Chú thích thêm</p>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="Name"
                defaultValue={place?.Name}
                onChange={(e) => setPlace({ ...place, Name: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
          <p
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-black font-semibold bg-gray-300 rounded hover:bg-gray-400"
          >
            Hủy
          </p>
          <button
            onClick={onAddOrEditDoneClick}
            className="px-4 py-2 text-white font-semibold bg-blue-500 rounded hover:bg-blue-600"
          >
            {isEdit ? "Cập nhật" : "Thêm mới"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddOrEditPlace;
