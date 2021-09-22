
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
// import ItemDetail from './components/ItemDetail/ItemDetail';
import {ItemDetailContainer} from './components/Containers/ItemDetailContainer';


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
        <ItemDetailContainer />
        <ItemCount/>

        
        </div> 
    );
  }

  export default App;
