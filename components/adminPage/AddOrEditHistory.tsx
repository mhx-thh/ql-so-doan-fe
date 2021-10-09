import React from "react";
import useClickOutside from "components/clickOutside/clickOutside";

import { ClassModel, HistoryModel } from "lib/models";

type AppProp = {
  isEdit?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  history: HistoryModel;
  setHistory: React.Dispatch<React.SetStateAction<HistoryModel>>;
  onAddOrEditDoneClick: () => void;
  classes: Array<ClassModel>;
};

const AddOrEditHistory = ({
  isEdit,
  setOpen,
  history,
  setHistory,
  onAddOrEditDoneClick,
  classes,
}: AppProp) => {
  const ref = useClickOutside(() => {
    setOpen(false);
  });
  const handleChangeDate = (e) => {
    setHistory({
      ...history,
      Time: e.target.value,
    });
  };
  const handleChangeClass = (e) => {
    const Classes = () => {
      return classes?.find((element) => {
        return e.target.value === element._id;
      });
    };
    setHistory({
      ...history,
      Class: Classes(),
    });
  };

  return (
    <div className="absolute w-full left-0 top-0 z-20 flex justify-center h-screen items-center bg-gray-500 bg-opacity-20 antialiased">
      <div
        ref={ref}
        className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl overscroll-contain overflow-auto max-h-full scrollbar-hide"
      >
        <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
          <p className="font-semibold text-gray-800 uppercase text-xl text-red-600">
            {isEdit ? "Cập nhật lịch sử" : "Tạo lịch sử "}
          </p>
          <i
            onClick={() => setOpen(false)}
            className="fas fa-times hover:cursor-pointer hover:-mt-0.5"
          ></i>
        </div>
        <div className="flex flex-col px-6 py-5 bg-gray-50">
          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Thời gian</p>
              <input
                className="w-11/12 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="date"
                onChange={handleChangeDate}
                value={history?.Time?.toString()?.slice(0, 10)}
                min="1975-01-01"
                max="2200-01-01"
              />
            </div>
            <div className="w-full mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-700">Chi đoàn</p>
              <select
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="Name"
                onChange={handleChangeClass}
              >
                <option selected disabled hidden>
                  Chọn chi đoàn
                </option>
                {classes.map((e) =>
                  history?.Class?._id === e?._id ? (
                    <option key={e._id} value={e._id} selected>
                      {e.Name}
                    </option>
                  ) : (
                    <option key={e._id} value={e._id}>
                      {e.Name}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
          <div className="w-full mt-2 sm:mt-0">
            <p className="mb-2 font-semibold text-gray-700">Nội dung</p>
            <textarea
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline resize-none"
              rows={10}
              cols={50}
              placeholder="Nhập nội dung tại đây"
              defaultValue={history?.Content}
              onChange={(e) =>
                setHistory({ ...history, Content: e.target.value })
              }
            />
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
export default AddOrEditHistory;
