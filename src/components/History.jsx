import React from "react";
import { useCustomHook } from "../context/StateProvider";
import HistoryCard from "./HistoryCard";

const History = () => {
  const { history } = useCustomHook();
  return (
    <div className=" w-full">
      <h2 className=" mb-3 text-lg font-semibold border-b-2 border-gray-500 pb-2">
        History
      </h2>
      {history.map((item, index) => (
        <HistoryCard key={index} item={item} />
      ))}
    </div>
  );
};

export default History;
