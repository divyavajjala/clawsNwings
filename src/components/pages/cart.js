function Cart({cartItems}) {
    return (
        <div>
            <h2>your cart items</h2>
                {cartItems.length===0 &&(
            <div className="items">
                "no items are added in the cart";
            </div>)}
            <div>
                {cartItems.map((item)=>
                    <div key={item.id}>
                    <h3>{item.title}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Cart;