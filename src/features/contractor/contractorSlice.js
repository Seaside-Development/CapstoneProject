import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import contractorService from './contractorService'

const initialState = {
    contractors: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

//creating a new contractor
export const createContractor = createAsyncThunk (
    'contractor/createContractor',
    async (contractor, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await contractorService.createContractor(contractor, token)
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

//retrieving the user's contractors
export const getContractors = createAsyncThunk (
    'contractor/getContractors',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await contractorService.getContractors(token)
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

//deleting a contractor
export const deleteContractor = createAsyncThunk (
    'contractor/deleteContractor',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await contractorService.deleteContractor(id, token)
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

export const contractorSlice = createSlice({
    name: 'contractor',
    initialState,
    reducers: {
        reset: (state) =>  initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createContractor.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createContractor.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.contractors.push(action.payload)
            })
            .addCase(createContractor.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            }
            )
            .addCase(getContractors.pending, (state) => {
                state.isLoading = true
            }
            )

            .addCase(getContractors.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.contractors = action.payload
            })
            .addCase(getContractors.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            }
            )
            .addCase(deleteContractor.pending, (state) => {
                state.isLoading = true
            }
            )
            .addCase(deleteContractor.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.message = action.payload
                state.contractors = state.contractors.filter(contractor => contractor._id !== action.payload)
            })
            .addCase(deleteContractor.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            }   
            )
    },
})

export const {reset} = contractorSlice.actions
export default contractorSlice.reducer