import { useDispatch, useSelector } from "react-redux";
import { CustomerAddWrap } from "./CustomerStyle";
import { useState } from "react";
import { update } from "../../store/modules/customerSlice";
import { useNavigate } from "react-router-dom";


const CustomerEdit = () => {
    const { current } = useSelector(state => state.customer)     
    const [user,setUser] = useState (current)
    const {name,title,content,date} = user
    const [now,setNow] = useState(new Date())
    const navigate = useNavigate ()
    const dispatch = useDispatch()
    const changeInput = (e) => {
        const {value,name} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault ()
        if (!title||!content||!name) return
        user.date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
        dispatch (update(user))
        setUser ({name:'', content:'', title:''})
        navigate(`/customer`)
    }
    const onGo = (e) => {
        e.preventDefault()
        navigate(`/customer`)
    }

    return (
        <CustomerAddWrap>
            <div className="inner">
                <h2> 고객문의수정 </h2>
                <form  className="customer-add" onSubmit={onSubmit}  >
                    <p>  <input type="text" placeholder="제목" name="title" value={title} onChange={changeInput} /></p>
                    <p>  <input type="text" placeholder="작성자" name="name" value={name} onChange={changeInput} /></p>
                    <p>  
                        <textarea cols="100" rows="10" 
                        placeholder="문의하기" name="content" value={content} onChange={changeInput}
                        ></textarea></p>
                    <p>
                        <button onClick={onGo} >목록으로</button>
                        <button type="submit">저장하기</button>
                        <button  >취소하기</button>
                    </p>
                </form>
            </div>
        </CustomerAddWrap>
    );
};

export default CustomerEdit;