import { useContext } from "react";
import { CartContext } from "../Context/cartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);
console.log(cartItems,"")
  return (
    <>
      <div className="pt-20">
        dsffff
        {cartItems.map((item) => (
          <div key={item._id} className="cart-item">
            <img src={item.productImage} alt={item.productName} />
            <h3>{item.productName}</h3>
            <p>Price: ₹{item.currentPrice * item.quantity}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
