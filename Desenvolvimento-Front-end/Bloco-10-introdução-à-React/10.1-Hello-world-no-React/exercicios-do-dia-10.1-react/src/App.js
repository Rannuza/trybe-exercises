import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Acordar', 'Trabalhar', 'Estudar', 'Fazer exercícios']

function App() {
  return (
    <div className="App">
      <ul className="lista">{compromissos.map((compromisso) => Task(compromisso))}</ul>
    </div>
  );
}

export default App;
