import React, { useState } from "react";
import SplitText from "./Page_comp/SplitText";

const Home = () => {
  return (
    <>
      <div className="p-5">
        <h1> Welcome 🥰 </h1>
        <h2 className="mt-[20px] inline-block">
          Check out other useful websites on the top🤩
        </h2>
      </div>
      <div>
        <SplitText
          text="Hello, User!!"
          className="text-2xl font-semibold text-center p-5"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={""}
        />
      </div>
    </>
  );
};

export default Home;
