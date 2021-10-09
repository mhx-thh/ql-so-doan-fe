import bookApi from "api/bookApi";
import classApi from "api/classApi";
import Footer from "components/footer/FooterComponent";
import PopUp from "components/PopUp/popup";
import { totalmem } from "os";
import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import style from "../style.module.css";
import Swal from "sweetalert2";
const temp = [
  "Name",
  "DOB",
  "Email",
  "Class",
  "IC",
  "DJU",
  "DJCP",
  "PositionHSU",
  "ClassOfficePosition",
  "Talent",
  "Phone",
  "SID",
  "NumberApproved",
];
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
  const [Namestatus, setNamestatus] = useState(3);
  const [DOBstatus, setDOBstatus] = useState(3);
  const [Emailstatus, setEmailstatus] = useState(3);
  const [Classstatus, setClassstatus] = useState(3);
  const [ICstatus, setICstatus] = useState(3);
  const [DJUstatus, setDJUstatus] = useState(3);
  const [DJCPstatus, setDJCPstatus] = useState(3);
  const [PositionHSUstatus, setPositionHSUstatus] = useState(3);
  const [ClassOfficePositionstatus, setClassOfficePositionstatus] = useState(3);
  const [Talentstatus, setTalentstatus] = useState(3);
  const [Phonestatus, setPhonestatus] = useState(3);
  const [SIDstatus, setSIDstatus] = useState(3);
  const [Genderstatus, setGenderstatus] = useState(3);
  const [NumberApprovedstatus, setNumberApprovedstatus] = useState(3);
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

  // 0 chuaw nhap thong tin
  // 1 nhap thong tin sai
  // 2 nhap dung
  const handleChangeName = (e) => {
    const value = e.target.value;
    if (value === "") {
      setNamestatus(0);
    } else {
      setNamestatus(2);

      setCreate({ ...create, Name: value });
    }
  };
  const handleChangeIC = (e) => {
    const value = e.target.value;
    if (value === "") {
      setICstatus(0);
    } else {
      for (let i = 0; i < value.length; i++) {
        if (
          value[i] === "0" ||
          value[i] === "1" ||
          value[i] === "2" ||
          value[i] === "3" ||
          value[i] === "4" ||
          value[i] === "5" ||
          value[i] === "6" ||
          value[i] === "7" ||
          value[i] === "8" ||
          value[i] === "9"
        ) {
          if (i === value.length - 1) {
            setICstatus(2);
            setCreate({ ...create, IC: value });
          } else continue;
        } else {
          setICstatus(1);
          break;
        }
      }
    }
  };
  const handleChangeDJU = (e) => {
    const value = e.target.value;
    if (value !== undefined) setDJUstatus(2);
    else setDJUstatus(1);
    if (DJUstatus === 2) {
      setCreate({ ...create, DJU: value });
    }
  };
  const handleChangeDJCP = (e) => {
    const value = e.target.value;
    if (value !== undefined) setDJCPstatus(2);
    else setDJCPstatus(1);
    if (DJCPstatus === 2) {
      setCreate({ ...create, DJCP: value });
    }
  };
  const handleChangeDOB = (e) => {
    const value = e.target.value;
    if (value !== undefined) setDOBstatus(2);
    else setDOBstatus(1);
    if (DOBstatus === 2) {
      setCreate({ ...create, DOB: value });
    }
  };
  const handleChangeTalent = (e) => {
    const value = e.target.value;
    if (value === "") {
      setTalentstatus(0);
    } else {
      setTalentstatus(2);

      setCreate({ ...create, Talent: value });
    }
  };
  const handleChangeClassOfficePosition = (e) => {
    const value = e.target.value;
    if (value === "") {
      setClassOfficePositionstatus(0);
    } else {
      setClassOfficePositionstatus(2);

      setCreate({ ...create, ClassOfficePosition: value });
    }
  };
  // chua
  const handleChangeClass = (e) => {
    const value = e.target.value;
    setClassstatus(2);
    let i;
    for (i = 0; i < total; i++) {
      if (value === classList[i].Class)
        setCreate({ ...create, Class: classList[i]._id });
    }
  };
  const handleChangeEmail = (e) => {
    const value = e.target.value;
    let temp = 0;
    if (value === "") {
      setEmailstatus(0);
    } else {
      for (let i = 0; i < value.length; i++) {
        if (i === 0 && value[i] === "@") temp = 0;
        else if (value[i] === "@") temp = 1;
        else if (value[i] === "." && temp === 1) temp = 2;
      }
      setEmailstatus(temp);
      if (temp === 2) {
        setCreate({ ...create, Email: value });
      }
    }
  };
  const handleChangePositionHSU = (e) => {
    const value = e.target.value;
    if (value === "") {
      setPositionHSUstatus(0);
    } else {
      setPositionHSUstatus(2);

      setCreate({ ...create, PositionHSU: value });
    }
  };
  const handleChangePhone = (e) => {
    const value = e.target.value;
    if (value === "" || value.length < 10) {
      setPhonestatus(0);
    } else {
      for (let i = 0; i < value.length; i++) {
        if (i === 0 && value[i] !== "0") {
          setPhonestatus(0);
          break;
        }
        if (
          value[i] === "0" ||
          value[i] === "1" ||
          value[i] === "2" ||
          value[i] === "3" ||
          value[i] === "4" ||
          value[i] === "5" ||
          value[i] === "6" ||
          value[i] === "7" ||
          value[i] === "8" ||
          value[i] === "9"
        ) {
          if (i === value.length - 1) {
            setPhonestatus(2);
            setCreate({ ...create, Phone: value });
          } else continue;
        } else {
          setPhonestatus(1);
          break;
        }
      }
    }
  };
  const handleChangemale = (e) => {
    const value = e.target.value;
    setCreate({ ...create, Gender: value });
    setGenderstatus(2);
  };
  const handleChangefemale = (e) => {
    const value = e.target.value;
    setCreate({ ...create, Gender: value });
    setGenderstatus(2);
  };
  const handleChangeSID = (e) => {
    const value = e.target.value;
    if (value === "") {
      setSIDstatus(0);
    } else {
      for (let i = 0; i < value.length; i++) {
        if (
          value[i] === "0" ||
          value[i] === "1" ||
          value[i] === "2" ||
          value[i] === "3" ||
          value[i] === "4" ||
          value[i] === "5" ||
          value[i] === "6" ||
          value[i] === "7" ||
          value[i] === "8" ||
          value[i] === "9"
        ) {
          if (i === value.length - 1) {
            setSIDstatus(2);
            setCreate({ ...create, SID: value });
          } else continue;
        } else {
          setSIDstatus(1);
          break;
        }
      }
    }
  };
  const handleChangeNumberApproved = (e) => {
    const value = e.target.value;
    if (value === "") {
      setNumberApprovedstatus(0);
    } else {
      setNumberApprovedstatus(2);

      setCreate({ ...create, NumberApproved: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Namestatus === 2 &&
      ICstatus === 2 &&
      Genderstatus === 2 &&
      DJUstatus === 2 &&
      DJCPstatus === 2 &&
      Emailstatus === 2 &&
      PositionHSUstatus === 2 &&
      Phonestatus === 2 &&
      Talentstatus === 2 &&
      DOBstatus === 2 &&
      ClassOfficePositionstatus === 2 &&
      SIDstatus === 2 &&
      Classstatus === 2
    ) {
      Swal.fire({
        title: "Loading data",
        icon: "info",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      bookApi.postBook(create, token);
      Swal.close();
      Swal.fire("Successfully!", "", "success");
    }
    console.log("after create", create);
  };
  const errorClass = "w-full bg-white rounded border border-red-500 ";
  const properClass = "w-full bg-white rounded border border-green-700 ";
  const initClass = "w-full bg-white rounded border border-gray-300 ";
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <div className="pt-80">
            <img
              src="/picture/create.png"
              alt="Picture"
              width="600px"
              height="1000px"
            />
          </div>
        </div>
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
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Họ và tên
              </label>
              <input
                type="text"
                id="name"
                name="Name"
                className={
                  Namestatus === 2
                    ? properClass
                    : Namestatus === 0 || Namestatus === 1
                    ? errorClass
                    : initClass +
                      "  focus:border-indigo-500 placeholder-italic placeholder-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                }
                placeholder="Nguyen Van A"
                pattern="[a-z]{1,15}"
                onChange={handleChangeName}
                required
              />
            </div>
            {/* MSSV */}
            <div className="relative mb-4">
              <label htmlFor="mssv" className="leading-7 text-sm text-gray-600">
                MSSV
              </label>
              <input
                type="text"
                id="mssv"
                name="SID"
                onChange={handleChangeSID}
                required
                placeholder="20112022"
                className={
                  SIDstatus === 2
                    ? properClass
                    : SIDstatus === 1 || SIDstatus === 0
                    ? errorClass
                    : initClass +
                      " focus:border-indigo-500 placeholder-italic placeholder-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                }
              />
            </div>
            {/* CMND */}
            <div className="relative mb-4">
              <label htmlFor="cmnd" className="leading-7 text-sm text-gray-600">
                Số CMND/CCCD
              </label>
              <input
                type="type"
                id="cmnd"
                name="IC"
                placeholder="364232444"
                onChange={handleChangeIC}
                required
                className={
                  ICstatus === 2
                    ? properClass
                    : ICstatus === 1 || ICstatus === 0
                    ? errorClass
                    : initClass +
                      " focus:border-indigo-500 placeholder-italic placeholder-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                }
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
                onChange={handleChangeDOB}
                min="20/01/2000"
                max="20/01/2020"
                required
                className={
                  DOBstatus === 2
                    ? properClass
                    : DOBstatus === 1 || DOBstatus === 0
                    ? errorClass
                    : initClass +
                      " focus:border-indigo-500 placeholder-italic focus:ring-2 placeholder-gray-300 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                }
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
                  onClick={handleChangemale}
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
                  onClick={handleChangefemale}
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
                onChange={handleChangeDJU}
                required
                className={
                  DJUstatus === 2
                    ? properClass
                    : DJUstatus === 1 || DJUstatus === 0
                    ? errorClass
                    : initClass +
                      " focus:border-indigo-500 placeholder-italic placeholder-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                }
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
                onChange={handleChangeNumberApproved}
                required
                className={
                  NumberApprovedstatus === 2
                    ? properClass
                    : NumberApprovedstatus === 1 || NumberApprovedstatus === 0
                    ? errorClass
                    : initClass +
                      " focus:border-indigo-500 placeholder-italic placeholder-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                }
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
                onChange={handleChangeDJCP}
                className={
                  DJCPstatus === 2
                    ? properClass
                    : DJCPstatus === 1 || DJCPstatus === 0
                    ? errorClass
                    : initClass +
                      " focus:border-indigo-500 placeholder-italic focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                }
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
                onChange={handleChangeClass}
                required
                className={
                  Classstatus === 2
                    ? properClass
                    : Classstatus === 1 || Classstatus === 0
                    ? errorClass
                    : initClass +
                      " placeholder-italic placeholder-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                }
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
                onChange={handleChangePositionHSU}
                required
                className={
                  PositionHSUstatus === 2
                    ? properClass
                    : PositionHSUstatus === 1 || PositionHSUstatus === 0
                    ? errorClass
                    : initClass +
                      " placeholder-italic placeholder-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                }
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
                onChange={handleChangeClassOfficePosition}
                required
                className={
                  ClassOfficePositionstatus === 2
                    ? properClass
                    : ClassOfficePositionstatus === 1 ||
                      ClassOfficePositionstatus === 0
                    ? errorClass
                    : initClass +
                      " placeholder-italic border placeholder-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                }
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
                onChange={handleChangeEmail}
                required
                placeholder="example@gmail.com"
                className={
                  Emailstatus === 2
                    ? properClass
                    : Emailstatus === 1 || Emailstatus === 0
                    ? errorClass
                    : initClass +
                      " form-control border placeholder-italic placeholder-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                }
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
                onChange={handleChangePhone}
                required
                className={
                  Phonestatus === 2
                    ? properClass
                    : Phonestatus === 1 || Phonestatus === 0
                    ? errorClass
                    : initClass +
                      " focus:border-indigo-500 placeholder-italic focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                }
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
                onChange={handleChangeTalent}
                required
                className={
                  Talentstatus === 2
                    ? properClass
                    : Talentstatus === 1 || Talentstatus === 0
                    ? errorClass
                    : initClass +
                      " placeholder-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                }
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
      {/* 
      {isloading === true && (
        <PopUp closepopup={setIsloading}>
          <button></button>
        </PopUp>
      )} */}

      <Footer />
    </>
  );
};
export default CreateBook;
