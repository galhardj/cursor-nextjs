import React, { useState } from "react";
import Card from "../atoms/Card";
import ExpensesFilter from "../molecules/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { ExpensesProps } from "../../types/expense";
import styles from "./Expenses.module.css";

const Expenses: React.FC<ExpensesProps> = (props) => {
  const [filteredYear, updateFilteredYear] = useState<string>("2021");

  const filterChangeHandler = (selectedYear: string) => {
    updateFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className={styles.expenses}>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart items={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
