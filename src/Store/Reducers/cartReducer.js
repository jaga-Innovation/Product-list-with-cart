import { createAction, createReducer } from '@reduxjs/toolkit'

const addItem = createAction('ADD_ITEM');
const removeItem = createAction('REMOVE_ITEM');
const updateItem = createAction('UPDATE_ITEM');
const initialState = { cart: [] }

const cartReducer = createReducer(initialState, (builder) => {       
  builder
    .addCase(addItem, (state, action) => {      
        for(let i = 0; i < state.cart.length; i++){
            if(state.cart[i].name === action.item.name)
                return;
        } 
        state.cart.push(action.item);
    })
    .addCase(removeItem, (state, action) => {
        state.cart = state.cart.filter((item) => {
            if(item.name === action.item.name)
                return false;
            else 
                return true;
        });                     
    })
    .addCase(updateItem, (state, action) => {
        state.cart.forEach((item) => {
            if(item.name === action.item.name)
                item.quantity = action.item.quantity;
        })
    })
})

export default cartReducer;