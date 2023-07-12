import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';

function App() {
  return (
    <div>
      <h3>Primer componente</h3>
      <C01componente />
      <h3>Seguncom componente</h3>
      <C02contador />
    </div>
  );
}

export default App;
