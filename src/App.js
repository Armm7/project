import './App.css';
import Featured from './components/featured/featured';
import Header from './components/header/header';
import Imgg1 from "./components/images/firstcart.png"

function App() {
  return (
    <div className="App">
       <Header/>
       <Featured img={Imgg1} /> 

    </div>
  );
}

export default App;
