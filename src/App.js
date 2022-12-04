import './App.css';
import { Calculator } from './components/Calculator';
import { Display } from './components/Display';

function App() {
  return (
    <div className='container'>
      <Display />
      <Calculator />
    </div>
  );
}

export default App;
