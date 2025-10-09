import React, { useState } from "react";
import styles from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";
import { NewExpenseProps, Expense } from "../../types/expense";
import { logEvent } from "../../lib/analytics";

const NewExpense: React.FC<NewExpenseProps> = (props) => {
  const [expenseView, updateExpenseView] = useState<boolean>(false);

  const expenseViewHandler = () => {
    updateExpenseView(!expenseView);
    logEvent("Button", "Clack", "Subscribe Button");
  };

  const saveExpenseDataHandler = (enteredExpenseData: Omit<Expense, "id">) => {
    const expenseData: Expense = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className={styles["new-expense"]}>
      {!expenseView && (
        <button type="button" onClick={expenseViewHandler}>
          Add New Expense
        </button>
      )}
      {expenseView && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onUpdateExpenseView={expenseViewHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
