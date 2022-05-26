import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jobService from "../jobrequest/jobService";

const initialState = {
    jobrequest: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

//creating a new job request
export const createJobRequest = createAsyncThunk (
    'jobrequests/createJobRequest',
    async (jobRequest, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await jobService.createJobRequest(jobRequest, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

//Get the job the contractor ID 
export const getJobrequestByContractorId = createAsyncThunk (
    'jobrequests/getJobrequestByContractorId',
    async (contractorId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await jobService.getUserJobRequests(contractorId, token)
        } catch (error) {
            const message =

                (error.response &&  
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

//getting alll the jobs for the signed in user's job requests
export const getUserJobRequests = createAsyncThunk (
    'jobrequests/myjobs',
    async (userId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await jobService.getUserJobRequests(userId, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

//retrieving the user's job requests
export const getJobRequests = createAsyncThunk (
    'jobRequest/getJobRequests',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await jobService.getJobRequests(token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

//deleting a job request
export const deleteJobRequest = createAsyncThunk (
    'jobrequests/deleteJobRequest',
    async (jobRequestId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await jobService.deleteJobRequest(jobRequestId, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
        .addCase(createJobRequest.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createJobRequest.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.jobRequest.push(action.payload)
        })
        .addCase(createJobRequest.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getJobRequests.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getJobRequests.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.jobRequests = action.payload
        })
        .addCase(getJobRequests.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteJobRequest.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteJobRequest.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.jobRequests = state.jobRequests.filter(
                (jobRequests) => jobRequests._id !== action.payload.id
              )
        })
        .addCase(deleteJobRequest.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    },
})

export const { reset } = jobSlice.actions
export default jobSlice.reducer;