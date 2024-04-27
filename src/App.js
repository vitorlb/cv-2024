import Wrapper from './components/Wrapper';
import { Provider as SolidsProvider } from './context/SolidsContext';
import { HashRouter } from 'react-router-dom';
import './App.scss';
function App() {
  return (
    <div className="App px-2 px-md-0">
      <SolidsProvider>
        <Wrapper />
      </SolidsProvider>
    </div>
  );
}

export default App;
