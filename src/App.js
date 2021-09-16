import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

 const onAdd = (cant) => {
        console.log (cant)
    }

    return (
        <div className="App"
        >

        <NavBar />
        <ItemListContainer greeting="Hola Juan"/>
        <ItemListContainer greeting="Hola Juliano"/>
        <ItemCount />

        
        </div> 
    );
  }

  export default App;
