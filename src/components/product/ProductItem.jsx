import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../../store/modules/cartSlice";

const ProductItem = ( {item} ) => {
    const {id,title,price,description,category,image,rate,count} = item
    const dispatch = useDispatch ()
    const { carts } = useSelector ( state => state.cart )
    return (
        <article>
             <div>
                <img src={image} alt={title}  />
             </div>
             <h3> {title} </h3>
             <h4> {category} </h4>
             <p> 
                {
                    carts.find ( x => x.id === id ) ?
                    <button onClick={()=>dispatch(removeCart(id))} className="off" > 취소 </button> :
                    <button onClick={()=>dispatch(addCart(item))} > 담기 </button>
                }
                <span> {price} 원</span>
             </p>
        </article>
    );
};

export default ProductItem;