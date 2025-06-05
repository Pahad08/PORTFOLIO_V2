import { memo } from "react";

const ContentHeader = ({ heading = "" }) => {
  return (
    <div className="lg:hidden sticky top-0 z-20 p-0 backdrop-blur -mx-6 px-6 py-5 mb-4 w-screen">
      <h1 className="font-bold uppercase tracking-widest">{heading}</h1>
    </div>
  );
};

export default memo(ContentHeader);
