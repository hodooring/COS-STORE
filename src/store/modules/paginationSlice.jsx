import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pageData : [],
  currPage : 1,
  totalPage : 1,
  postsPerPage : 10, //한페이지당 나오는 게시글 수?
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    prevPage : (state,action) => {
        if(state.currPage===1){
            state.currPage=1
        }else{
            state.currPage--
        }
    },
    nextPage : (state,action) => {
        if(state.currPage===state.totalPage){
            state.currPage = state.totalPage
        } else {
            state.currPage++
        }
    },   
    currentPage : (state,action) => {
        state.currPage = action.payload
    },
    addData : (state,action) => {
         state.pageData  = action.payload 
    },
    totalData : (state,action) => {
        state.currPage = 1
        state.totalPage = Math.ceil(state.pageData.length/state.postsPerPage)
        //개수에 해당하는걸 나누면 소수점 뒷자리가 나오니까
    }    
}
})

export const {prevPage,nextPage,currentPage,addData,totalData} = paginationSlice.actions
export default paginationSlice.reducer