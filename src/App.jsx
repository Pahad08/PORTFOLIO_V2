import "./App.css";
import Info from "./Components/Main/Info";
import Content from "./Components/Main/Content";
import React, { useState, useEffect } from "react";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="fixed w-160 h-160 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 
        bg-[radial-gradient(circle,_rgba(208,218,229,0.1)_0%,_rgba(208,218,229,0)_70%)]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-24 md:px-12 md:py-16 lg:py-0">
        <div className="flex lg:justify-between">
          <Info />
          <Content />
        </div>
      </div>
    </>
  );
};

export default App;
