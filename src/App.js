// import logo from './logo.svg';
import Header from './components/header';
import Footer from "./components/footer"
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from "./components/pages/about";
import Menu from "./components/pages/menu";
import Gallery from "./components/pages/gallery";
// import Contact from "./components/pages/contact";
// import Orderonline from "./components/pages/orderonline";
import Cart from "./components/pages/cart"
import { useState } from 'react';

// ns1-07.azure-dns.com.
// ns2-07.azure-dns.net.
// ns3-07.azure-dns.org.
// ns4-07.azure-dns.info.

// white-rock-013635100.3.azurestaticapps.net
function App() {
    const[cartItems,setCartItems] = useState([]);   
    const addCart=(listItem) =>{
        const listItemExist = cartItems.find((item)=>item.id===listItem.id);
        if(listItemExist) {
            setCartItems(
                cartItems.map((item)=>item.id===listItem.id
                ?{...listItemExist,quantity: listItemExist.quantity+1}
                :item)
            );
        }else{
            setCartItems([...cartItems, {...listItem, quantity: 1}]);
        }
    }

  return (
      <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/menu' element={<Menu addcart={addCart}></Menu>}></Route>
            <Route path='/gallery' element={<Gallery></Gallery>}></Route>
            {/* <Route path='/contact' element={<Contact></Contact>}></Route> */}
            <Route path='/orderonline' element={<Menu></Menu>}></Route>
            <Route path='/cart' element={<Cart cartItems = {cartItems} addCart={addCart} ></Cart>}></Route>
                
            
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
