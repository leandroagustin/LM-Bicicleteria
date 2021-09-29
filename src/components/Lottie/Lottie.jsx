import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Lottie = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Loading2.json"),
    });
  }, []);

  return <div ref={container}></div>;
};

export default Lottie;
