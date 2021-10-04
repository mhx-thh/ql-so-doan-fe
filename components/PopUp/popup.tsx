import React, { useRef } from "react";
import style from "./style.module.css";

type AppProps = {
  children: any;
  closepopup: any;
};

// eslint-disable-next-line react/prop-types
function PopUp({ closepopup, children }: AppProps) {
  const triggerclose = () => {
    closepopup(0);
  };

  return (
    <div className={style.background}>
      <div className={style.container}>
        <p className="text-green-900 text-2xl items-center text-center mt-2">
          Succussfully!
        </p>
      </div>
    </div>
  );
}

export default PopUp;
