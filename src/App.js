import './App.css';
import AddToDo from './components/AddToDo.js/AddToDo';
import ToDoList from './components/ToDoList.js/ToDoList';

function App() {
  return (
    <div className="App">
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default App;
