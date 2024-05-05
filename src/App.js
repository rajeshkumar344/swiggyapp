import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import PizzaList from './components/PizzaList';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Mycard from './components/Mycard';
import Myorder from './components/Myorder';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header/>

     {/* <Main/> */}
     {/* <PizzaList/> */}

     {/* <ProductDetails/> */}

     {/* <Mycard/> */}

     {/* <Myorder/> */}

     <Routes>
     <Route path='/' element={ <Main/>}/>
     <Route path='/items' element ={<PizzaList/>}/>
      <Route path='/details' element={<ProductDetails/>}/>
      <Route path='/addtocart' element={<Mycard/>}/>
      <Route path='/order' element={<Myorder/>}/>
     </Routes>

     <Footer/>
    </div>
  );
}

export default App;
