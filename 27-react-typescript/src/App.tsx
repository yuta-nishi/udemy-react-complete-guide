import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/Todo';

const App = () => {
  const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  const addTodoHandler = (todoText: string): void => {};

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
};

export default App;
