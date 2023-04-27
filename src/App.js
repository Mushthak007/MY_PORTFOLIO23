import React from "react";
import Routers from "./Router";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { useSelector } from "react-redux";

const App = () => {
  const { ColorNameFirst } = useSelector((state) => state.Color);
  return (
    <div>
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
    </div>
  );
};

export default App;
