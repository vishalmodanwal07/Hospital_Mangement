import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import patientReducer from './slices/patientSlice.js';
import pantryReducer from './slices/pantrySlice.js';
import deliveryReducer from './slices/deliverySlice.js';

const store = configureStore({
  reducer: {
    auth : authReducer,
    pantry: pantryReducer,
    patient   : patientReducer,
    delivery : deliveryReducer,
  }
});

export default store;