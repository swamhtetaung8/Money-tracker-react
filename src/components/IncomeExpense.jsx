import React from "react";
import { useCustomHook } from "../context/StateProvider";

const IncomeExpense = () => {
  const { income, expense } = useCustomHook();
  return (
    <div className=" w-full bg-white shadow-sm flex justify-evenly p-1 md:p-2">
      <div className=" text-center">
        <h1 className=" font-semibold uppercase text-sm md:text-lg">Income</h1>
        <p className=" text-green-500 font-medium md:text-lg text-sm">
          {income}
        </p>
      </div>
      <div className=" h-12 w-[1px] bg-gray-400"></div>
      <div className=" text-center">
        <h1 className=" font-semibold uppercase text-sm md:text-lg">Expense</h1>
        <p className=" text-red-500 font-medium md:text-lg text-sm">
          {expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
