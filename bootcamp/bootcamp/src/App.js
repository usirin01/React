
import ChooseFruits from './components/ChooseFruits';
import './App.css';
import Helloworld from './components/Helloworld';
import Postman from './components/Postman';
import Delete from './components/Delete';

function App() {
  return (
    <div className="App container">
      <Helloworld firstName="Hi" lastName="Coders!"/>
      <Helloworld firstName="Umit" lastName="S.!"/>
      <Helloworld firstName="Hans" lastName="Wiedermann!"/>
      <ChooseFruits />
      <Postman />
      <Delete />
    </div>
  );
}

export default App;
