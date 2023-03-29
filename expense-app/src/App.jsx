import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'a',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2023, 9, 14),
  },
  { id: 'b', title: 'New TV', amount: 799.49, date: new Date(2023, 3, 12) },
  {
    id: 'c',
    title: 'Car Insurance',
    amount: 294,
    date: new Date(2023, 3, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
