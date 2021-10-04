import Link from "next/link";
import React, { FC } from "react";
import Footer from "components/footer/FooterComponent";

const TogglePage: FC = () => {
  return (
    <React.Fragment>
      <section className="text-blueGray-700 ">
        <div className="container flex flex-col px-5 py-24 mx-auto lg:items-center">
          <div className="flex flex-col w-full mb-12 text-left lg:text-center">
            <h2 className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">
              a great header right here
            </h2>
            <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font">
              {" "}
              A centered <br className="md:hidden" /> medium length headline.
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">
              You're about to launch soon and must be 100% focused on your
              product. Don't loose precious days designing, coding the landing
              page and testing .{" "}
            </p>
          </div>
          <div className="flex justify-left lg:justify-center ">
            <button className="flex items-center px-6 py-2 mt-auto mr-3 font-semibold text-blue-800 transition duration-500 ease-in-out transform bg-blue-100 rounded-lg hover:bg-blue-200 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              Button
            </button>
            <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              Button
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default TogglePage;
