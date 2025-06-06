import "./App.css";
import Info from "./Components/Main/Info";
import Content from "./Components/Main/Content";
import { memo } from "react";
import MouseOverLay from "./Components/Utils/MouseOverLay";
import { MainContextProvider } from "./Context/MainContextProvider";

const App = () => {
  return (
    <>
      <MouseOverLay />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-24 md:px-12 md:py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-24 lg:gap-0">
          <MainContextProvider>
            <Info />
            <Content />
          </MainContextProvider>
        </div>
      </div>
    </>
  );
};

export default memo(App);
