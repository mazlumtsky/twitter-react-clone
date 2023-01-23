import './App.css';
import Conteiner from './Components/Conteiner';
import Content from './Components/Content';
import Slidebar from './Components/Slidebar';
import Widgets from './Components/Widgets';

function App() {
  return (
    <Conteiner>
      <Slidebar />
      <Content />
      <Widgets />
    </Conteiner>
  );
}


export default App;
