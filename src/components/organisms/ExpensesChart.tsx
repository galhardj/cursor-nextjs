import React from "react";
import Chart from "../molecules/Chart";
import styles from "./ExpensesChart.module.css";
import { ExpensesChartProps, ChartDataPoint } from "../../types/expense";

const ExpensesChart: React.FC<ExpensesChartProps> = (props) => {
  const expenses: ChartDataPoint[] = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const item of props.items) {
    const itemMonth = item.date.getMonth();
    expenses[itemMonth].value += item.amount;
  }

  return (
    <div className={styles.chart}>
      <Chart dataPoints={expenses} />
    </div>
  );
};

export default ExpensesChart;
