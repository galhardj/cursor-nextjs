import React, { Fragment } from 'react';
import ExpenseItem from '../molecules/ExpenseItem';
import { ExpensesListProps } from '../../types/expense';
import './ExpensesList.css';

const ExpensesList: React.FC<ExpensesListProps> = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">There&apos;s no expense yet in the selected year</h2>
    );
  }

  return (
    <Fragment>
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title1={expense.title}
            amount1={expense.amount}
            date1={expense.date}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default ExpensesList;
