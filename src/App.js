import React from "react";
import Routers from "./Router";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { Provider } from 'react-redux';
import Store from "./Redux/Store";

const App = () => {
  return (
    <div >
        <Provider store={Store}>
      <CustomCursor
        targets={[".link", ".your-css-selector"]}
        customClass="custom-cursor"
        dimensions={50}
        fill="#28e98c"
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.5}
      ></CustomCursor>
      <Routers />
        </Provider>
    </div>
  );
};

export default App;
