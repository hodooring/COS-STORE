import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { totalCart,totalprice } from "../../store/modules/cartSlice";
import { CartListWrap } from "./CartStyle";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";


const CartList = () => {
   const {carts, cartTotal} = useSelector(state=>state.cart)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   useEffect ( ()=> {
    dispatch(totalCart())
   },[carts])
    const [cnt,setCnt] = useState(1)
    const inc = () => {
    setCnt(cnt+1)
    }
    const dec = () => {
    setCnt(cnt-1)
    }
    
    return (
        <CartListWrap>
            <div className="cart-list">
                <p className="cart">장바구니</p>
                {
                    carts.map ( item => <CartItem key = {item.id} item={item} /> )
                }
                
            </div>
            <div className="cart-bottom">
                <h3>주문요약</h3>
            </div>
            <div className="summary">
                <div className="total_section">
                  <span className="total_label">총 개수</span>
                  <span className="total"> {carts.length} 개</span>
                </div>     
                <div className="fee_section">
                  <span className="fee_label">배송비</span>
                  <span className="fee"> 0 원</span>
                </div>     
                <div className="totalcnt_section">
                  <span className="totalcnt_label">총 상품 금액</span>
                  <span className="totalcnt"> {cartTotal} 원</span>
                </div>     
            </div>
            <div className="goshopping">
                <button onClick={()=>navigate(-1)} >쇼핑하러가기<GoArrowRight /></button>
            </div>
        </CartListWrap>
    );
};

export default CartList;