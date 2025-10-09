import React from "react";
import ExpenseDate from "../atoms/ExpenseDate";
import Card from "../atoms/Card";
import { ExpenseItemProps } from "../../types/expense";
import styles from "./ExpenseItem.module.css";

const ExpenseItem: React.FC<ExpenseItemProps> = (props) => {
  return (
    <li>
      <Card className={styles["expense-item"]}>
        <ExpenseDate date2={props.date1} />
        <div className={styles["expense-item__description"]}>
          <h2>{props.title1}</h2>
          <div className={styles["expense-item__price"]}>
            Rp {props.amount1},-
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
