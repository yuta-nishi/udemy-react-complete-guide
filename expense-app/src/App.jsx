import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

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
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
