import React from "react";

const Form = () => {
  return (
    <div>
      <h2 className="header-title">mint</h2>
      <div className="flex flex-col items-center font-Poppins">
        <div className="w-[294px]">
          <label htmlFor="number-mint" className="text-left block pb-[2px]">
            Number
          </label>
          <input
            id="number-mint"
            placeholder="Number"
            className="border-[1.5px] border-[#2F3747] bg-[#0f1e3a] px-4 py-[13px] rounded-[10px] w-full"
          />
        </div>
        <button className="w-[294px] btn btn-primary">Mint</button>
      </div>
    </div>
  );
};

export default Form;
