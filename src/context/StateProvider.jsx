import { createContext, useContext, useEffect, useRef, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const formRef = useRef();

  const [income, setIncome] = useState(
    localStorage.getItem("income") !== null ? localStorage.getItem("income") : 0
  );
  const [expense, setExpense] = useState(
    localStorage.getItem("expense") !== null
      ? localStorage.getItem("expense")
      : 0
  );

  const [history, setHistory] = useState(
    localStorage.getItem("history") !== null
      ? JSON.parse(localStorage.getItem("history"))
      : []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = formRef.current[0].value;
    const money = formRef.current[1].value;
    const type = money > 0 ? "income" : "expense";
    formRef.current[0].value = "";
    formRef.current[1].value = "";
    localStorage.setItem(
      "history",
      JSON.stringify([
        ...history,
        {
          name: transaction,
          amount: Math.abs(Number(money)),
          type,
        },
      ])
    );
    setHistory(JSON.parse(localStorage.getItem("history")));
    if (money > 0) {
      localStorage.setItem("income", Number(income) + Number(money));
      setIncome(localStorage.getItem("income"));
    } else {
      localStorage.setItem(
        "expense",
        Number(expense) + Math.abs(Number(money))
      );
      setExpense(localStorage.getItem("expense"));
    }
  };

  const clear = () => {
    if (confirm("Are you sure to reset")) {
      localStorage.clear();
      location.reload();
    }
  };

  console.log(income, expense, history);
  return (
    <StateContext.Provider
      value={{ formRef, handleSubmit, income, expense, history, clear }}>
      {children}
    </StateContext.Provider>
  );
};

export const useCustomHook = () => useContext(StateContext);
