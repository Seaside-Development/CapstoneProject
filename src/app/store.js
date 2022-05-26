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
