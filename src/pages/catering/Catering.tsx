'use client';

import React, { useState } from 'react';
import NewExpense from '../../components/organisms/NewExpense';
import Expenses from '../../components/organisms/Expenses';
import { Expense } from '../../types/expense';
import './catering.css';

const DUMMY_EXPENSES: Expense[] = [
  {
    id: 'e1',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e3',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const CateringPage: React.FC = () => {
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
};

export default CateringPage;
