/* eslint-disable @typescript-eslint/no-unused-vars */
import Footer from "components/footer/FooterComponent";
import path from "path";
import React, { FC, useEffect, useState } from "react";
import axios from "axios";
// thông tin sổ đoàn
// lịch sử lưu trữ
// các yêu cầu

const view: FC = () => {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const res = await fetch("https://sodoanbackend.herokuapp.com/api/book");
    const books = await res?.json();
    setBooks(books.data.result);
    console.log(books.data?.result);
  };
  useEffect(() => {
    getBooks();
  }, []);

  const [showModal, setShowModal] = React.useState(false);
  const [showModalReceipt, setShowModalReceipt] = React.useState(false);
  const [data, setData] = useState(null);
  function getData(val) {
    if (val.key === "Enter") {
      //event.Keyboad
      if (val.target.value.replace(/ /g, "") != "") {
        setData(val.target.value);
        console.log(val.target.value);
      }
    }
  }
  //function updataApi(request) {
  /* const contenRequest = {
      Content: request,
    }; */
  /*  fetch("https://sodoanbackend.herokuapp.com/api/request", {
      method: "PUT", */
  /*  body: contenRequest, */
  /*  })
      .then((response) => response.json())
      .then((result) => {
        console.log("success", result);
      })
      .catch((error) => {
        console.log("error ", error);
      }); */ //}

  const state = {
    Status: "done",
    /* _id: "615170ee2c61d017addaa3f5", */
    Book: {
      DOB: "",
      DJU: "",
      DJCP: "",
      PositionHSU: "",
      ClassOfficePosition: "",
      Talent: "",
      Approval: true,
      Place: {
        _id: "",
        ShortHand: "",
      },
      _id: "",
      SID: "",
      Name: "",
      Gender: "",
      Email: "",
      Class: {
        _id: "",
        Name: "",
        Faculty: {
          _id: "",
          NameShort: "",
          NameFull: "",
          id: "",
        },
      },
      NumberApproved: 2,
      Phone: "",
      IC: "",
      __v: 0,
      id: "",
    },
    Type: "profile",
    Title: "Yêu Cầu Chuyển Sổ Đoàn",
    Content: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  };
  return (
    <>
      <div className=" bg-white-200">
        <div className="container h-40 flex justify-center items-center px-2 sm:px-4 lg:px-6">
          <div className="relative">
            {" "}
            <input
              type="text"
              className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
              placeholder="Nhập MSSV..."
              onKeyPress={getData}
            />
            <div className="absolute top-4 right-3 cursor-pointer">
              {" "}
              <i
                className="fa fa-search text-gray-400 z-20 hover:text-gray-500"
                onClick={() => {
                  const val = document.querySelector("input");
                  if (val.value.replace(/ /g, "") != "") {
                    setData(val.value);
                    console.log(val.value);
                  }
                }}
              ></i>{" "}
            </div>
          </div>
        </div>
      </div>

      {books.map((book) => {
        const {
          IC,
          DOB,
          Name,
          SID,
          Gender,
          Email,
          Phone,
          Talent,
          NumberApproved,
          Class,
          Place,
          DJU,
          DJCP,
          PositionHSU,
          requests,
          ClassOfficePosition,
          _id,
          id,
          __v,
        } = book;
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; //months from 1-12
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        {
          if (SID == data) {
            return (
              <div className="container items-center pt-5 py-12 text-blueGray-500 lg:px-20">
                <div className="p-2 mx-auto my-6 bg-indigo-50 border rounded-lg shadow-xl lg:w-1/2">
                  <div className="flex-grow p-6 py-2 rounded-lg">
                    <form action="#" className="flex flex-col space-y-8">
                      <div>
                        <h3 className="text-2xl font-semibold">
                          Thông Tin Cơ Bản{" "}
                        </h3>
                        <hr />
                      </div>
                      <div className="form-item">
                        <label className="text-xl ">Họ và Tên</label>
                        <input
                          type="text"
                          value={Name}
                          className="w-full appearance-none text-black text-opacity-75 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                          disabled
                        />
                      </div>
                      <div className="form-item w-full">
                        <label className="text-xl ">MSSV</label>
                        <input
                          type="text"
                          value={SID}
                          className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-75 "
                          disabled
                        />
                      </div>
                      <div className="form-item w-full">
                        <label className="text-xl ">Số CMND/CCCD</label>
                        <input
                          type="text"
                          value={IC}
                          className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-75 "
                          disabled
                        />
                      </div>
                      <div className="form-item w-full">
                        <label className="text-xl ">Ngày Sinh</label>
                        <br />
                        <input
                          type="text"
                          value={DOB}
                          className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-75 "
                          disabled
                        />
                      </div>
                      <div className="form-item w-full">
                        <label className="text-xl ">Giới Tính</label>
                        <br />
                        <input
                          type="text"
                          value={Gender}
                          className="w-1/4 appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-75 "
                          disabled
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold ">
                          Sở thích và Năng khiếu
                        </h3>
                        <hr />
                      </div>
                      <div className="form-item w-full">
                        <label className="text-xl "></label>
                        <textarea
                          cols={30}
                          rows={10}
                          className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                          disabled
                        >
                          {Talent}
                        </textarea>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="flex">
                          <button
                            type="button"
                            className="bg-blue-500  text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            onClick={() => setShowModalReceipt(true)}
                          >
                            Xem biên nhận
                          </button>
                          <button
                            type="button"
                            className="bg-blue-500  text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            onClick={() => setShowModal(true)}
                          >
                            Yêu cầu chuyển
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              Yêu cầu chuyển sổ đoàn
                            </h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            ></button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <textarea
                              ng-model="test.text"
                              /* ngmodel */
                              className="form-control main"
                              name="Content"
                              /* type="text" */
                              rows={10}
                              cols={40}
                              placeholder="Nội dung chuyển sổ đoàn"
                              required
                              id="chuyen-so-doan"
                            ></textarea>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Hủy
                            </button>
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              /* onClick={() => setShowModal(false)} */
                              onClick={function () {
                                const tranferBook = (
                                  document.getElementById(
                                    "chuyen-so-doan"
                                  ) as HTMLInputElement
                                ).value;
                                console.log("Content : ", tranferBook);
                                {
                                  state.Status = "init";
                                  state.Book.DOB = DOB;
                                  state.Book.DJU = DJU;
                                  state.Book.DJCP = DJCP;
                                  state.Book.PositionHSU = PositionHSU;
                                  state.Book.Talent = Talent;
                                  state.Book.ClassOfficePosition =
                                    ClassOfficePosition;
                                  state.Book.Place = Place;
                                  state.Book._id = _id;
                                  state.Book.SID = SID;
                                  state.Book.Name = Name;
                                  state.Book.Gender = Gender;
                                  state.Book.Email = Email;
                                  state.Book.Class = Class;
                                  state.Book.NumberApproved = NumberApproved;
                                  state.Book.Phone = Phone;
                                  state.Book.IC = IC;
                                  state.Book.__v = __v;
                                  state.Book.id = id;
                                  state.Content = tranferBook;
                                  state.createdAt = "2021-09-27T07:21:18.292Z";
                                  state.updatedAt = "2021-09-27T07:21:18.292Z";
                                }
                                console.log(state);
                                axios
                                  .post(
                                    "https://sodoanbackend.herokuapp.com/api/request",
                                    state
                                  )
                                  .then((response) => {
                                    console.log(response);
                                  })
                                  .catch((error) => {
                                    console.log(error);
                                  });
                                /*    updataApi(tranferBook); */
                                setShowModal(false);
                              }}
                            >
                              Yêu cầu
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
                {showModalReceipt ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {" "}
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              Yêu cầu xuất biên nhận
                            </h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModalReceipt(false)}
                            >
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                X
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto text-center">
                            <div className="mb-4">
                              {/* <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nhập email ở đây"
                                placeholder="Username"
                                type="text"
                                value={Gender}
                              /> */}
                              <p>
                                <div className="container">
                                  <div className="top-left">
                                    <p className="text-center">
                                      THÀNH ĐOÀN TP. HỒ CHÍ MINH
                                    </p>
                                    <p className="text-center text-border">
                                      BCH TRƯỜNG ĐẠI HỌC
                                    </p>
                                    <p className="text-center text-border">
                                      KHOA HỌC TỰ NHIÊN
                                    </p>
                                    <div className="top-right">
                                      <p className="text-border text-underline">
                                        ĐOÀN TNCS HỒ CHÍ MINH
                                      </p>
                                    </div>
                                    <p className="text-center text-border">
                                      ***
                                    </p>
                                    <p className="text-center">
                                      Số: {NumberApproved}
                                    </p>
                                  </div>
                                  <br />
                                  <br />
                                  <div className="body-text text-left">
                                    <p>Đoàn trường có nhận của: {Name} </p>
                                    <p>
                                      MSSV: {SID}
                                      <br />
                                      Khoa: {Class.Faculty.NameFull}
                                    </p>
                                    <p>
                                      1. Sổ Đoàn (không bao gồm Thẻ Đoàn viên và
                                      Nghị quyết rời).
                                    </p>
                                    <p>2. Đoàn phí 8.000đ (4 tháng ).</p>
                                  </div>
                                  <div className="note  text-left">
                                    <p className="text-underline">Lưu ý:</p>
                                    <p className="wrap-text ">
                                      Đoàn viên giữ kỹ biên nhận này để làm thủ
                                      tục chuyển sinh hoạt Đoàn.
                                    </p>
                                  </div>
                                  <br />
                                  <br />
                                  <br />
                                  <br />
                                  <div className="sign text-right">
                                    <p className="text-italic">
                                      TP. Hồ Chí Minh, ngày {day} tháng {month}{" "}
                                      năm {year}
                                    </p>
                                    <p className="text-border">Người nhận</p>
                                    <p className="text-italic">{Name}</p>
                                  </div>
                                </div>
                              </p>
                            </div>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModalReceipt(false)}
                            >
                              Hủy
                            </button>
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={function () {
                                const app = setShowModalReceipt(false);
                              }}
                            >
                              Yêu cầu
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </div>
            );
          }
        }
      })}

      <Footer />
    </>
  );
};
export default view;
function moment(dateObj: Date) {
  throw new Error("Function not implemented.");
}
