"use client";

import React, { useState } from "react";
import NewExpense from "../../components/organisms/NewExpense";
import Expenses from "../../components/organisms/Expenses";
import "./catering.css";
import { DUMMY_EXPENSES } from "@/constants/expenses";
import { Expense } from "@/types/expense";

export default function CateringPage() {
  const [expenses, setExpenses] = useState<Expense[]>(DUMMY_EXPENSES);

  const addExpenseHandler = (expense: Expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="catering-page">
      <div className="catering-header">
        <h1>Expense Tracker</h1>
        <p>Track and manage your expenses efficiently</p>
      </div>

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
