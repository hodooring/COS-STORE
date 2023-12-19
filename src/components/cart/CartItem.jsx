import { useDispatch, useSelector } from "react-redux";
import { removeCart, totalprice } from "../../store/modules/cartSlice";
import { TiMinus,TiPlus } from "react-icons/ti";
import { useState } from "react";

const CartItem = ({item}) => {
const {carts} = useSelector (state => state.cart)
const {id,title,image,price} = item
const dispatch = useDispatch()
const [cnt,setCnt] = useState(1)
const inc = () => {
  setCnt(cnt+1)
}
const dec = () => {
  setCnt(cnt-1)
}
  return (
        <article>          
          <label htmlFor=""><input type="checkbox" /></label>
          <img src={image} alt={title}/>
          <div className="productbox">
            <div className="product">
              <h4> {title} </h4>
              <span> {price} 원</span>
            </div>
            <div className="info">
                <div className="size_section">
                  <span className="size_label">사이즈</span>
                  <span className="size">XS</span>
                </div>
                <div className="color_section">
                  <span className="color_label">색상</span>
                  <span className="color">블랙</span>
                </div>
                <div className="quantity_section">
                    <span className="quantity_label">수량</span>
                    <TiMinus onClick={dec} /> <span className="quantity">{cnt}</span> <TiPlus onClick={inc} />
                </div>
                <div className="totalprice_section">
                  <span className="totalprice_label">합계</span>
                  <span className="totalprice"> {cnt*price} </span>
                </div>

            </div>
          </div>
          <div className="delbox">
            <button onClick={()=>dispatch(removeCart(id))} > 삭제 </button>
          </div>
        </article>
    );
};

export default CartItem;