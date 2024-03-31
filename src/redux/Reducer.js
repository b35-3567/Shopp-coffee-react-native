import { createAction, createReducer } from '@reduxjs/toolkit';

// khởi tạo action
const tang = createAction('TANG');
const giam = createAction('GIAM');
const tangTheoGiaTri = createAction('TANG_THEO_GIA_TRI');

// khởi tạo state
const initialState = {
    count: 10,
    products: []
};

// khởi tạo reducer
const counterReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(tang, (state) => {
                state.count++;
            })
            .addCase(giam, (state) => {
                state.count--;
            })
            .addCase(tangTheoGiaTri, (state, action) => {
                state.count += action.payload;
            });
    }
);

export { tang, giam, tangTheoGiaTri, counterReducer };






