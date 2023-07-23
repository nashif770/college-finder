import React from "react";

const Heading = ({title}) => {
  return (
    <div>
      <h1 className="text-5xl mt-20 text-center font-bold text-black">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
