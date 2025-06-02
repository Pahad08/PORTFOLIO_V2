import { memo } from "react";

const Skills = ({ images = [], heading = "" }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold">{heading}</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 mt-5">
        {images.map((image, index) => {
          return (
            <div
              className="flex justify-center items-center p-5 rounded-xl hover:glass hover:scale-103 transition"
              key={index}
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
