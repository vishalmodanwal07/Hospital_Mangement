import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    deliveries : [],
};

const deliverySlice = createSlice({
    name: 'deliveries',
    initialState,
    reducers: {
        setDeliveries : (state, action) => {
            state.deliveries = action.payload;
        },
        updateDeliveryStatus : (state, action) => {
            const {id , status} = action.payload;
            const delivery = state.deliveries.find(delivery => delivery.id === id);
            if(delivery){
                delivery.status = status;
            }
        },
    },
});

export const { setDeliveries, updateDeliveryStatus } = deliverySlice.actions;
export default deliverySlice.reducer;