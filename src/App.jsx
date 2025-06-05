import "./App.css";
import Info from "./Components/Main/Info";
import Content from "./Components/Main/Content";
import { useState, useEffect, memo } from "react";
import { MainContextProvider } from "./Context/MainContextProvider";

const isMobileUser = () =>
  /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(() => {
    return isMobileUser() || window.innerWidth <= 1024;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileUser() || window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isMobile) {
        setMousePosition({ x: event.clientX, y: event.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  return (
    <>
      {!isMobile && (
        <div
          className="fixed w-160 h-160 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 
            bg-[radial-gradient(circle,_rgba(208,218,229,0.1)_0%,_rgba(208,218,229,0)_70%)]"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>
      )}

      <MainContextProvider>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-24 md:px-12 md:py-16 lg:py-0">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-24 lg:gap-0">
            <Info />
            <Content />
          </div>
        </div>
      </MainContextProvider>
    </>
  );
};

export default memo(App);
