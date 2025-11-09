/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Edulife = () => {
  const pass = "Ayush@678";
  const [showPassword, setShowPassword] = useState(false); // pass initially won't be visible
  const [hideButton, setHideButton] = useState(false); //button will be initially visible
  function reveal() {
    setShowPassword(true);
    setHideButton(true);
    setTimeout(() => {
      setShowPassword(false);
      setHideButton(false);
    }, 10000);
}
    return (
      <>
        <div className="p-5 text-indigo-600">
          <a
            href="https://mcdedulife.in/MCD/"
            target="_blank"
            className="border-[2px] rounded-[5px] p-[5px] bg-emerald-200"
          >
            Open Edulife
          </a>
          <div>
            <h2 className="mt-[20px] absolute top-15 ">
              User ID - 95030088 <br />
              Password- {showPassword ? ` ${pass}` : ""}
              {!hideButton && (
                <button
                  onClick={reveal}
                  className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Click Me
                </button>
              )}
            </h2>
          </div>
        </div>
      </>
    );
  }

export default Edulife
