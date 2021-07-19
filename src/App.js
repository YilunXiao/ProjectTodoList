import './App.css';
import TodoList from './components/TodoList';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <header>
        <Nav/>
      </header>
      <main>
        <TodoList/>
      </main>
    </div>
  );
}

export default App;
