import React from "react";
import { useCustomHook } from "../context/StateProvider";

const Transition = () => {
  const { formRef, handleSubmit } = useCustomHook();

  return (
    <div className=" w-full">
      <h2 className="mb-3 text-lg font-semibold border-b-2 border-gray-500 pb-2">
        Add new transaction
      </h2>
      <form action="" onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor="">Text</label>
          <input
            type="text"
            className=" block p-2 w-full outline-none my-2"
            placeholder="Enter text .."
            required
          />
        </div>
        <div>
          <label htmlFor="">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            className=" block p-2 w-full outline-none my-2"
            placeholder="Enter Amount .."
            required
          />
        </div>
        <button className=" w-full py-2 mt-3 rounded bg-purple-300">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default Transition;
