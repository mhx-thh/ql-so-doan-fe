import Link from "next/link";
import React, { FC } from "react";
import { useAppSelector } from "redux/hooks";
import IconSearch from "./IconSearch";
import Logo from "./Logo";
import { selectStatus, selectUser } from "redux/userSlice";
import { useRouter } from "next/router";

const HeaderComponent: FC = () => {
  const status = useAppSelector(selectStatus);
  const user = useAppSelector(selectUser);

  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      {path.indexOf("/admin") !== 0 && (
        <div className="bg-blue-200">
          <div className="w-full px-24 bg-white h-16 flex items-center justify-between shadow-md">
            <Logo />

            {/* navbar */}
            <div className="ml-24 flex items-center flex-1">
              <Link href="/">
                <div
                  className={
                    "mr-6 flex items-center cursor-pointer px-1.5 py-1 hover:bg-indigo-100 rounded-lg" +
                    (path == "/" ? " bg-indigo-100" : "")
                  }
                >
                  <p className="text-lg mr-1 leading-8 font-semibold">Home</p>
                </div>
              </Link>

              <Link href="/about">
                <div
                  className={
                    "mr-6 flex items-center cursor-pointer px-1.5 py-1 hover:bg-indigo-100 rounded-lg" +
                    (path.indexOf("/about") === 0 ? " bg-indigo-100" : "")
                  }
                >
                  <p className="text-lg leading-8 font-semibold">Chúng tôi</p>
                </div>
              </Link>

              <Link href="#">
                <div
                  className={
                    "mr-6 flex items-center cursor-pointer px-1.5 py-1 hover:bg-indigo-100 rounded-lg" +
                    (path.indexOf("/feature1") === 0 ? " bg-indigo-100" : "")
                  }
                >
                  <p className="text-lg mr-1 leading-8 font-semibold">
                    Chức năng 1
                  </p>
                </div>
              </Link>

              <Link href="#">
                <div
                  className={
                    "mr-6 flex items-center cursor-pointer px-1.5 py-1 hover:bg-indigo-100 rounded-lg" +
                    (path.indexOf("/feature1") === 0 ? " bg-indigo-100" : "")
                  }
                >
                  <p className="text-lg mr-1 leading-8 font-semibold">
                    Chức năng 2
                  </p>
                </div>
              </Link>
            </div>

            {status === "logined" && (
              <div>
                <div className="flex items-center cursor-pointer">
                  <Link href="/user">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-3.5">
                      <img
                        src={user.photo}
                        alt="avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="py-1 px-1.5 rounded-lg bg-indigo-100 flex items-center">
                    <p className="text-lg mr-1 leading-8 font-semibold">
                      Chia sẻ
                    </p>
                    <svg
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 9C0 10.654 1.346 12 3 12C3.794 12 4.512 11.685 5.049 11.18L11.04 14.604C11.022 14.734 11 14.864 11 15C11 16.654 12.346 18 14 18C15.654 18 17 16.654 17 15C17 13.346 15.654 12 14 12C13.206 12 12.488 12.315 11.951 12.82L5.96 9.397C5.978 9.266 6 9.136 6 9C6 8.864 5.978 8.734 5.96 8.603L11.951 5.18C12.488 5.685 13.206 6 14 6C15.654 6 17 4.654 17 3C17 1.346 15.654 0 14 0C12.346 0 11 1.346 11 3C11 3.136 11.022 3.266 11.04 3.397L5.049 6.82C4.496 6.29468 3.76273 6.00123 3 6C1.346 6 0 7.346 0 9Z"
                        fill="#6366F1"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default HeaderComponent;
