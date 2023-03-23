import ExpenseItem from './components/ExpenseItem';

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
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
};

export default App;
