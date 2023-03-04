import React from "react";

const HistoryCard = ({ item }) => {
  return (
    <div
      className={`w-full p-3 bg-white rounded-l-md border-r-4 flex justify-between  mb-3 shadow-md ${
        item.type == "income" ? "border-green-500" : "border-red-500"
      } `}>
      <span>{item.name}</span>
      <span>{item.amount}</span>
    </div>
  );
};

export default HistoryCard;
