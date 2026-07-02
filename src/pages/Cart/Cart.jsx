

import { useDispatch, useSelector } from "react-redux";
import { addQuantity , removeQuantity} from "../../config/reduxconfig/reducer/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
     {cartItems.map((item)=>{
      return(<div key={item.id}>
       
        <h2>{item.title}</h2>
        <button onClick={()=>{dispatch(addQuantity(item.id))}}>+</button>
        <button onClick={()=>{dispatch(removeQuantity(item.id))}}>-</button>
        <h3>{item.quantity}</h3>
        
        </div>

      )
     })}
      </>
    
  );
};

export default Cart;