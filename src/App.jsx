import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';
import { addTodo, toggleTodo, removeTodo } from './features/todo/todoSlice';

function App() {
  const count = useSelector(state => state.counter.value);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
          <div className="flex space-x-4 mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch(incrementByAmount(5))}
            >
              Increment by 5
            </button>
          </div>

          <h2 className="text-2xl font-bold mb-4">Todos:</h2>
          <ul>
            {todos.map(todo => (
              <li key={todo.id} className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                />
                <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1 mt-4"
            placeholder="Add todo"
            onKeyDown={e => {
              if (e.key === 'Enter') {
                dispatch(addTodo({ id: Date.now(), text: e.target.value, completed: false }));
                e.target.value = '';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;