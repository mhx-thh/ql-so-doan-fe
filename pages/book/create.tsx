import bookApi from "api/bookApi";
import classApi from "api/classApi";
import Footer from "components/footer/FooterComponent";
import PopUp from "components/PopUp/popup";
import { totalmem } from "os";
import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import style from "../style.module.css";

type Api = {
  Name: string;
  Gender: string;
  DOB: Date;
  Email: string;
  Class: string;
  IC: string;
  DJU: Date;
  DJCP: Date;
  PositionHSU: string;
  ClassOfficePosition: string;
  Talent: string;
  Phone: string;
  SID: string;
  NumberApproved: number;
};
const CreateBook: FC = (props) => {
  const initCreate: Api = {
    Name: "",
    Gender: "",
    DOB: undefined,
    Email: "",
    Class: "",
    IC: "",
    DJU: undefined,
    DJCP: undefined,
    PositionHSU: "",
    ClassOfficePosition: "",
    Talent: "",
    Phone: "",
    SID: "",
    NumberApproved: -1,
  };
  const token = useAppSelector(selectToken);
  const [create, setCreate] = useState<Api>(initCreate);
  const [classList, setClassList] = useState([]);
  const [total, setTotal] = useState(1);
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    async function fetchClassList() {
      const res = await classApi.getAll();
      const data = res?.data?.data?.result;
      setClassList(data);
      console.log(data);
      const currtotal = data.length;
      setTotal(currtotal);
      console.log(currtotal);
    }
    fetchClassList();
  }, []);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "Name":
        setCreate({ ...create, Name: value });
        break;
      case "SID":
        setCreate({ ...create, SID: value });
        break;
      case "IC":
        setCreate({ ...create, IC: value });
        break;
      case "DJU":
        setCreate({ ...create, DJU: value });
        break;
      case "DJCP":
        setCreate({ ...create, DJCP: value });
        break;
      case "DOB":
        setCreate({ ...create, DOB: value });
        break;
      case "Talent":
        setCreate({ ...create, Talent: value });
        break;
      case "ClassOfficePosition":
        setCreate({ ...create, ClassOfficePosition: value });
        break;
      case "gender":
        setCreate({ ...create, Gender: value });
        break;
      case "Class":
        let i;
        for (i = 0; i < total; i++) {
          if (value === classList[i].Name)
            setCreate({ ...create, Class: classList[i]._id });
        }
        break;
      case "Email":
        setCreate({ ...create, Email: value });
        break;
      case "PositionHSU":
        setCreate({ ...create, PositionHSU: value });
        break;
      case "Phone":
        setCreate({ ...create, Phone: value });
        break;
      case "male":
        setCreate({ ...create, Gender: value });
        break;
      case "female":
        setCreate({ ...create, Gender: value });
        break;
      case "NumberApproved":
        const num = parseInt(value, 10);
        setCreate({ ...create, NumberApproved: num });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    create.Name !== "" &&
      create.IC !== "" &&
      create.Gender !== "" &&
      create.DJU !== undefined &&
      create.DJCP !== undefined &&
      create.Email !== "" &&
      create.PositionHSU !== "" &&
      create.Phone !== "" &&
      create.Talent !== "" &&
      create.DOB !== undefined &&
      create.ClassOfficePosition !== "" &&
      create.SID !== "" &&
      create.Class !== "" &&
      bookApi.postBook(create, token);
    setIsloading(true);
    console.log("after create", create);
  };
  // const input = document.getElementById("Name");
  // input.oninvalid = function (event) {
  //   event.target.setCustomValidity(
  //     "Username should only contain lowercase letters. e.g. john"
  //   );
  // };

  return (
    <>
      {isloading === false && (
        <section className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300"></div>
          <div className="container px-5 py-24 mx-auto flex placeholder-black">
            <form className="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              {/* Tiêu đề */}
              <p className="text-gray-900 text-lg mb-1 font-medium title-font">
                Nhập thông tin của bạn
              </p>
              {/* chú thích */}
              <p className="leading-relaxed mb-5 text-gray-600">
                Vui lòng nhập đầy đủ thông tin.
              </p>
              {/* Họ và tên */}
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  className="w-full bg-white rounded border  border-gray-300 focus:border-indigo-500 placeholder-italic placeholder-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Nguyen Van A"
                  pattern="[a-z]{1,15}"
                  onChange={handleChange}
                  required
                />
              </div>
              {/* MSSV */}
              <div className="relative mb-4">
                <label
                  htmlFor="mssv"
                  className="leading-7 text-sm text-gray-600"
                >
                  MSSV
                </label>
                <input
                  type="text"
                  id="mssv"
                  name="SID"
                  onChange={handleChange}
                  required
                  placeholder="20112022"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 placeholder-italic placeholder-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {/* CMND */}
              <div className="relative mb-4">
                <label
                  htmlFor="cmnd"
                  className="leading-7 text-sm text-gray-600"
                >
                  Số CMND/CCCD
                </label>
                <input
                  type="type"
                  id="cmnd"
                  name="IC"
                  placeholder="364232444"
                  onChange={handleChange}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 placeholder-italic focus:ring-2 placeholder-gray-300 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {/* Ngày sinh */}
              <div className="relative mb-4">
                <label
                  htmlFor="birthday"
                  className="leading-7 text-sm text-gray-600"
                >
                  Ngày sinh
                </label>
                <input
                  type="date"
                  id="birthday"
                  name="DOB"
                  onChange={handleChange}
                  min="20/01/2000"
                  max="20/01/2020"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 placeholder-italic focus:ring-2 placeholder-gray-300 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {/* Giới tính */}
              <div className="relative mb-4">
                <label
                  htmlFor="gender"
                  className="leading-7 text-sm text-gray-600 mr-12"
                >
                  Giới tính:
                </label>
                <div className="pl-20">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    className="mr-3"
                    onClick={handleChange}
                  />
                  <label htmlFor="male" className="mr-40">
                    Nam
                  </label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    className="mr-3"
                    onClick={handleChange}
                  />
                  <label htmlFor="female">Nu</label>
                </div>
              </div>
              {/* Ngày vào đoàn */}
              <div className="relative mb-4">
                <label
                  htmlFor="uniondate"
                  className="leading-7 text-sm text-gray-600"
                >
                  Ngày vào Đoàn
                </label>
                <input
                  type="date"
                  id="uniondate"
                  name="DJU"
                  onChange={handleChange}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 placeholder-italic placeholder-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {/* nghị quyết số */}
              <div className="relative mb-4">
                <label
                  htmlFor="uniondate"
                  className="leading-7 text-sm text-gray-600"
                >
                  Nghị quyết số
                </label>
                <input
                  type="text"
                  id="NumberApproved"
                  name="NumberApproved"
                  onChange={handleChange}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 placeholder-italic placeholder-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {/* Ngày vào đảng */}
              <div className="relative mb-4">
                <label
                  htmlFor="partydate"
                  className="leading-7 text-sm text-gray-600"
                >
                  Ngày vào Đảng
                </label>
                <input
                  type="date"
                  id="partydate"
                  name="DJCP"
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 placeholder-italic focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {/* Chi đoàn */}
              <div className="relative mb-4">
                <label
                  htmlFor="youthunion"
                  className="leading-7 text-sm text-gray-600"
                >
                  Chi đoàn
                </label>
                <input
                  type="text"
                  id="youthunion"
                  name="Class"
                  onChange={handleChange}
                  required
                  className="w-full bg-white rounded placeholder-italic border border-gray-300 placeholder-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="20CTT2"
                />
              </div>
              {/* Chức vụ đoàn cấp 3 */}
              <div className="relative mb-4">
                <label
                  htmlFor="unionoffice"
                  className="leading-7 text-sm text-gray-600"
                >
                  Chức vụ đoàn cấp 3
                </label>
                <input
                  type="text"
                  id="unionoffice"
                  name="PositionHSU"
                  placeholder="Bí thư"
                  onChange={handleChange}
                  required
                  className="w-full bg-white rounded border placeholder-italic border-gray-300 placeholder-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <p className="text-xs leading-none font-normal w-96 tracking-normal pt-2 px-2">
                  Nếu không có chức vụ nào, điền "Không có".
                </p>
              </div>
              {/* Chức vụ trong lớp */}
              <div className="relative mb-4">
                <label
                  htmlFor="classoffice"
                  className="leading-7 text-sm text-gray-600"
                >
                  Chức vụ trong lớp cấp 3
                </label>
                <input
                  type="text"
                  id="classoffice"
                  name="ClassOfficePosition"
                  placeholder="Lớp trưởng"
                  onChange={handleChange}
                  required
                  className="w-full bg-white rounded placeholder-italic border border-gray-300 placeholder-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <p className="text-xs leading-none font-normal w-96 tracking-normal pt-2 px-2">
                  Nếu không có chức vụ nào, điền "Không có".
                </p>
              </div>
              {/* Email */}
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  onChange={handleChange}
                  required
                  placeholder="example@gmail.com"
                  className="w-full bg-white rounded form-control border placeholder-italic border-gray-300 placeholder-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {/* SĐT */}
              <div className="relative mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Số điện thoại
                </label>
                <input
                  type="text"
                  id="phone"
                  name="Phone"
                  onChange={handleChange}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 placeholder-italic focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {/* Năng khiếu */}
              <div className="relative mb-4">
                <label
                  htmlFor="aptitude"
                  className="leading-7 text-sm text-gray-600"
                >
                  Năng khiếu
                </label>
                <input
                  type="text"
                  id="aptitude"
                  name="Talent"
                  placeholder="Ca hát, vẽ,..."
                  onChange={handleChange}
                  required
                  className="w-full bg-white rounded border border-gray-300 placeholder-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <p className="text-xs leading-none font-normal w-96 tracking-normal pt-2 px-2">
                  Nếu không có năng khiếu nào, điền "Không có".
                </p>
              </div>
              <input
                type="submit"
                value="Gửi"
                name="Gui"
                className="text-white transition-colors duration-700 transform bg-indigo-500 hover:bg-indigo-400 text-white h-10 rounded-lg focus:border-4 border-indigo-300 text-lg cursor-pointer"
                onClick={handleSubmit}
              />
              <p className="text-xs text-gray-500 mt-3">
                Vui lòng kiểm tra kỹ thông tin trước khi gửi xác nhận.
              </p>
            </form>
          </div>
        </section>
      )}

      {isloading === true && (
        <PopUp closepopup={setIsloading}>
          <button></button>
        </PopUp>
      )}

      <Footer />
    </>
  );
};
export default CreateBook;
