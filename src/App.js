import Selection from './components/Selection'
import './App.css';
import TodoApp from './components/TodoApp';
function App() {
  return (
    <div className="App">
      <main>
        <TodoApp/>
        <Selection/>
      </main>
    </div>
  );
}

export default App;
