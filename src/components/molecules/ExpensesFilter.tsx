import React from 'react';
import { ExpensesFilterProps } from '../../types/expense';
import './ExpensesFilter.css';

const ExpensesFilter: React.FC<ExpensesFilterProps> = (props) => {
  const yearPickHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearPickHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
