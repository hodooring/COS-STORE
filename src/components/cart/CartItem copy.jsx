import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../store/modules/cartSlice";

const CartItem = ({item}) => {
const {carts} = useSelector (state => state.cart)
const {id,title,image,price} = item
const dispatch = useDispatch()
  return (
        <article>          
          <img src={image} alt={title}/>
          <div>
            <h3> {title} </h3>
            <span> {price} 원</span>
          </div>
          <button onClick={()=>dispatch(removeCart(id))} > 삭제 </button>
        </article>
    );
};

export default CartItem;