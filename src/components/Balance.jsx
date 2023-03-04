import React from "react";
import { useCustomHook } from "../context/StateProvider";

const Balance = () => {
  const { clear, income, expense } = useCustomHook();
  return (
    <div className=" w-full">
      <h2 className=" uppercase font-bold text-xl">Your Balance</h2>
      <div className=" flex items-center justify-between">
        <p className=" uppercase font-bold text-xl">MMK {income - expense}</p>
        <button
          onClick={clear}
          className=" bg-red-400 p-2 rounded-md text-white px-4">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Balance;
