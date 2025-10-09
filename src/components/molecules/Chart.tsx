import React from "react";
import ChartBar from "../atoms/ChartBar";
import { ChartProps } from "../../types/expense";
import styles from "./Chart.module.css";

const Chart: React.FC<ChartProps> = (props) => {
  const expenseValues = props.dataPoints.map(
    (expenseValue) => expenseValue.value
  );
  const maxValue = Math.max(...expenseValues);

  return (
    <div className={styles.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
