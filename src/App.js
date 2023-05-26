import React from "react";
import Routers from "./Router";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { useSelector } from "react-redux";
import { motion, useScroll } from "framer-motion";

const App = () => {
  const { ColorNameFirst } = useSelector((state) => state.Color);
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className={"progress-bar"}
        style={{ scaleX: scrollYProgress ,background:ColorNameFirst}}
      />
      <CustomCursor
        targets={[".link", ".your-css-selector"]}
        customClass="custom-cursor"
        dimensions={50}
        fill={ColorNameFirst}
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.5}
      ></CustomCursor>
      <Routers />
    </>
  );
};

export default App;
