// import Header from "../header";
import { useState } from "react"
import Category from "./categories";
import items from "../pages/data"
import "../../../src/App.css"
import borderimage from "../../assets/My project.png"

const allCategories = ["all",...new Set(items.map((item)=> item.category))]; 

function Menu() {
    const [menuItems,setMenuItems] = useState(items);
    const [activeCategory, setActiveCategory] = useState("");
    const [categories] = useState(allCategories);
    const filterItems = (category)=> {
        setActiveCategory(category);
        if(category==="all"){
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item)=>item.category===category);
        setMenuItems(newItems);
    };

    // const categoryItems = items.filter(item=>
    //     item.category==="Ice-creams");
        const listItems = menuItems.map(item=>
        <li className="menulist-item" key={item.id}>
            <h3 className="itemname">{item.title}</h3>
            {/* <span className="category">{item.category}</span> */}
            <span className="price">{item.price}<span>Rs</span></span>
            <p className="description">{item.description}</p>
            <button className = "addtocart-btn" onClick={addcart}>Add to cart</button>
        </li>
    );
    return(
        <div>
            {/* <Header></Header> */}
            <h2>Here is our Menu</h2>
            <span><img className = "border-img" src={borderimage} alt="border"></img></span>
            <Category categories={categories} activeCategory={activeCategory} filterItems = {filterItems}></Category>
            <ul className = "menulist-container">{listItems}</ul>
        </div>
    )
}
function addcart() {
     
}
export default Menu;