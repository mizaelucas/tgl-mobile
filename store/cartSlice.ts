import { createSlice } from '@reduxjs/toolkit';
import { Bet } from '../types/BetTypes';

const initialState: { cart: Bet[], total: number } = { cart: [{ id: '', game_id: 0, price: 0, numbers: '', color: '', type: ''  }], total: 0.00};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addBet: (state, action) => {
            state.cart.push(action.payload);
        },
        removeBet: (state, action) => {
            let newCart = state.cart.filter((cartItem: Bet) => action.payload !== cartItem.id);
            state.cart = newCart;
            return
        },
        incrementTotal: (state, action) => {
            let newTotal = state.total + action.payload;
            state.total = newTotal;
            return
        },
        decrementTotal: (state, action) => {
            let newTotal = state.total - action.payload;
            state.total = newTotal;
            return
        }
    }
});

export const { addBet, removeBet, incrementTotal, decrementTotal } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;