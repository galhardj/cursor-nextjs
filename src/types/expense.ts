export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

export interface ExpenseItemProps {
  title1: string;
  amount1: number;
  date1: Date;
}

export interface ExpenseDateProps {
  date2: Date;
}

export interface ExpensesProps {
  items: Expense[];
}

export interface ExpensesFilterProps {
  selected: string;
  onChangeFilter: (selectedYear: string) => void;
}

export interface ExpensesListProps {
  items: Expense[];
}

export interface ExpensesChartProps {
  items: Expense[];
}

export interface ChartBarProps {
  value: number;
  maxValue: number;
  label: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface ChartProps {
  dataPoints: ChartDataPoint[];
}

export interface NewExpenseProps {
  onAddExpense: (expense: Expense) => void;
}

export interface ExpenseFormProps {
  onSaveExpenseData: (expenseData: Omit<Expense, "id">) => void;
  onUpdateExpenseView: () => void;
}
