import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';

function App() {
  return (
    <div>
      <h1>Primer componente</h1>
      <C01componente />
      <h1>Segundo componente</h1>
      <C02contador />
      <h1>Tercer componente</h1>
    </div>
  );
}

export default App;
