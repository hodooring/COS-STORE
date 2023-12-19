import { useDispatch, useSelector } from "react-redux";
 
import CustomerItem from "./CustomerItem";
import { CustomerListWrap } from "./CustomerStyle";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addData } from "../../store/modules/paginationSlice";

const CustomerLIst = () => {
   const {customerData} = useSelector (state=>state.customer)
   const navigate = useNavigate ()
   const { currPage,postsPerPage } =useSelector ( state => state.pagination )
   const lastPost = currPage * postsPerPage //1 * 10 => 10 .....
   const firstPost = lastPost - postsPerPage
   const currentPosts = customerData.slice(firstPost,lastPost)
   const dispatch = useDispatch()

 useEffect( () => {
   dispatch( addData(customerData))
 },[])

    return (
        <CustomerListWrap>
        <table className="customerTable">
        <caption>게시판</caption>
        <colgroup>
            <col className="num" />
            <col className="title" />               
            <col className="name" />               
            <col className="date" />               
        </colgroup>
        <thead>
            <tr>
                <th>번호</th>
                <th>내용</th>              
                <th>작성자</th>
                <th>작성일</th>
            </tr>
        </thead>
        <tbody>
             {
                currentPosts.map ( item => <CustomerItem key = {item.id} item={item} /> )
             }
       </tbody>
       </table>
            <p><button onClick={()=>navigate(`/customer/customeradd`)} >글 작성 </button></p>
       </CustomerListWrap>
    );
};

export default CustomerLIst;