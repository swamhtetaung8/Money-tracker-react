import React from "react";
import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import History from "./components/History";
import IncomeExpense from "./components/IncomeExpense";
import Transition from "./components/Transition";
import { StateProvider } from "./context/StateProvider";
const App = () => {
  return (
    <StateProvider>
      <div className=" min-w-full min-h-screen flex justify-center items-center bg-slate-100 py-10">
        <div className=" w-[80%] md:w-[50%] lg:w-[40%] flex flex-col justify-center items-center gap-10">
          <Header />
          <Balance />
          <IncomeExpense />
          <History />
          <Transition />
        </div>
      </div>
    </StateProvider>
  );
};

export default App;
