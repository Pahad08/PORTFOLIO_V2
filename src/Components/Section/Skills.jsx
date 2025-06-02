import { memo, useState } from "react";

const Skills = ({ images = [], heading = "" }) => {
  const [currentIndex, setcurrentIndex] = useState(null);

  return (
    <>
      <h1 className="text-3xl font-semibold">{heading}</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 mt-5">
        {images.map((image, index) => {
          const isDimmed = currentIndex !== null && currentIndex !== index;
          return (
            <div
              className={`${
                isDimmed ? "opacity-40" : "opacity-100"
              } flex justify-center items-center p-5 rounded-xl transition hover:scale-103 hover:glass`}
              key={index}
              onMouseEnter={() => setcurrentIndex(index)}
              onMouseLeave={() => setcurrentIndex(null)}
            >
              <img src={image} alt={image} className="w-full" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default memo(Skills);
