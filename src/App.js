import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer';

function App() {
    return (
        <div className="App"
        >

        <NavBar />
        <ItemListContainer greeting="Hola Juan"/>
        <ItemListContainer greeting="Hola Juliano"/>
        

        
        </div> 
    );
  }

  export default App;
