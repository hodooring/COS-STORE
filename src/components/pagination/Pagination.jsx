import React from 'react';
import { PaginationWrap } from './PaginatioStyle';
import { useDispatch, useSelector } from 'react-redux';
import { currentPage, nextPage, totalData } from '../../store/modules/paginationSlice';
import { useEffect } from 'react';


const Pagination = () => {
    const {customerData} = useSelector(state=>state.customer)
    const {noticeData} = useSelector(state=>state.notice)
    const {currPage,totalPage} = useSelector (state=>state.pagination)

    const dispatch = useDispatch()

    useEffect (()=>{
        dispatch(totalData())
    },[customerData,noticeData])

    console.log( totalPage )

    //강제배열처리
    const arr = [...Array(totalPage)]
 
    return (
        <PaginationWrap>
            <div>
                <button onClick={()=>dispatch(prevPage())} >{`<<`}</button>
                {
                    arr.map( ( _, idx ) => <button className={currPage===(idx+1)?"on":""} onClick={()=>dispatch(currentPage(idx+1))} >{idx+1}</button> )
                }
                <button onClick={()=>dispatch(nextPage())} >{`>>`}</button>
            </div>
        </PaginationWrap>
    );
};

export default Pagination;