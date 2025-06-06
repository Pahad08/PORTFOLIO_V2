import { useState, useEffect, memo } from "react";

const isMobileUser = () =>
  /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

const MouseOverlay = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(() => {
    return isMobileUser() || window.innerWidth <= 1024;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileUser() || window.innerWidth <= 1024);
    };

    const handleMouseMove = (event) => {
      if (!isMobile) {
        setMousePosition({ x: event.clientX, y: event.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className="fixed w-160 h-160 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 
        bg-[radial-gradient(circle,_rgba(46,88,137,0.2)_0%,_rgba(46,88,137,0)_70%)]"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
    />
  );
};

export default memo(MouseOverlay);
