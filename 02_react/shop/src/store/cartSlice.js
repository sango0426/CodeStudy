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
            state.push(action.payload);
        }
    }
});
export let { changeCount, addItem } = cartProduct.actions;

export default cartProduct;