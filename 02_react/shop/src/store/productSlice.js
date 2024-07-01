import { createSlice } from '@reduxjs/toolkit'

let product = createSlice({
    name : 'cartProduct',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        changeCount(state){
            state[0].count += 1;
        },
        addProduct(state){

        }
    }
});
export let { changeCount, addProduct } = cartProduct.actions;

export default cartProduct;