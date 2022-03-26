import './App.css';
import Helloworld from './components/Helloworld';
import MapAdd from './components/MapAdd';

function App() {
  return (
    <div className="App container">
      <Helloworld firstName="Hi" lastName="Coders!"/>
      <Helloworld firstName="Umit" lastName="S.!"/>
      <Helloworld firstName="Hans" lastName="Wiedermann!"/>
      <MapAdd />
    </div>
  );
}

export default App;
