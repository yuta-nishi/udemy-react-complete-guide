import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2023, 1, 1),
    },
    {
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2023, 1, 1),
    },
    {
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2023, 1, 1),
    },
    {
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2023, 1, 1),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
