import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { MainContent } from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent/>
    </div>
  );
} 

export default App;

