import { createSlice } from '@reduxjs/toolkit'

let cartProduct = createSlice({
    name : 'cartProduct',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        changeCount(state, action){
            let 번호 = state.findIndex((a)=>{ return a.id === action.payload })
            state[번호].count++;
        },
        addItem(state, action){
            // 중복 체크(요거 물어보자)
            let checkItem = state.findIndex((a)=> { return a.id == action.payload.id });

            if(checkItem === -1){
                state.push(action.payload);
            } else {
                state[checkItem].count++;
            }
        },
        removeItem(state, action){
            let id = state.findIndex((a)=> a.id == action.payload );
            state.splice(id, 1);
        }
    }
});
export let { changeCount, addItem, removeItem } = cartProduct.actions;

export default cartProduct;