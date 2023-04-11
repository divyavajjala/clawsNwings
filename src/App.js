// import logo from './logo.svg';
import Header from './components/header';
import Footer from "./components/footer"
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from "./components/pages/about";
import Menu from "./components/pages/menu";
import Gallery from "./components/pages/gallery";
import Contact from "./components/pages/contact";
import Orderonline from "./components/pages/orderonline";
import { useState } from 'react';


function App() {
    // const[shoppingcart,setCart] = useState([]);
    // const addItems=(item)=>{
    //     console.log(item);
    // }
  return (
      <BrowserRouter>
        <Header size={5}></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/menu' element={<Menu></Menu>}></Route>
            <Route path='/gallery' element={<Gallery></Gallery>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/orderonline' element={<Orderonline></Orderonline>}></Route>
                
            
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
