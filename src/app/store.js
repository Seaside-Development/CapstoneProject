<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import jobRequestReducer from "../features/jobrequest/jobSlice";
import contractorReducer from "../features/contractor/contractorSlice";

// The initial state of the auth slice
export const store = configureStore({
    reducer: {
        auth: authReducer,
        jobRequest: jobRequestReducer,
        contractor: contractorReducer,
    },
});
=======
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';



export const store=configureStore({
    reducer: {
        auth: authReducer,
    },

})
>>>>>>> 7513dbdd715c7783dd66185f569645f86a2b8dd0
