import React from "react";
import Link from "next/link";

import LogoIcon from "components/Icons/Logo";

import { useAppSelector } from "redux/hooks";
import { selectIsAdmin, selectStatus } from "redux/userSlice";

const Footer = () => {
  const isAdmin = useAppSelector(selectIsAdmin);
  const isLogin = useAppSelector(selectStatus);
  return (
    <footer className="mb-0 mt-32">
      <div className="w-full bg-white px-28 flex justify-between py-0 mb-6">
        <Link href="/">
          <button>
            <div className="flex">
              <LogoIcon />
              <span className="text-indigo-500 text-xl leading-8 font-semibold">
                Y.U.S
              </span>
            </div>
            <p className="text-black text-lg leading-8 font-medium">
              Nền tảng quản lý sổ đoàn trường ĐH KHTN - ĐHQG HCM
            </p>
          </button>
        </Link>
        <div>
          <p className="text-black text-lg leading-8 font-semibold">
            Tài Nguyên
          </p>
          <ul className="text-black text-sm leading-5 font-medium underline">
            <li>
              <a href="#">Hướng dẫnX</a>
            </li>
            <li>
              <a href="#">Hướng dẫn Y</a>
            </li>
            <li>
              <a href="#">Hướng dẫn Z</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-black text-lg leading-8 font-semibold">Y.U.S</p>
          <ul className="text-black text-sm leading-5 font-medium underline">
            <li>
              <a href="#">Về chúng tôi</a>
            </li>
            <li>
              <a href="#">Tin tức</a>
            </li>
            {isLogin === "nologin" && (
              <li>
                <Link href="/login">
                  <a href="#">Đăng nhập</a>
                </Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link href="/admin">
                  <a href="#">Quản lý</a>
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <p className="text-black text-lg leading-8 font-semibold">Liên Hệ</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="w-full h-14 bg-gray-200 px-28 py-2.5">
        <p className="text-sm leading-8 font-medium"> © 2021 Y.U.S —@yus </p>
      </div>
    </footer>
  );
};
export default Footer;
