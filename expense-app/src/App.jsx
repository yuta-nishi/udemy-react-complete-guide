import Expenses from './components/Expenses/Expenses';

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
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
