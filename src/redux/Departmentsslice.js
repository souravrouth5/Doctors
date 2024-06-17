import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../axios/AxiosInstance"


export const fetchAllDepartments = createAsyncThunk('fetchAllDepartments', async(_, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get(`alldepartment`)
        return res?.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const alldepartmentsSlice = createSlice({
    name: 'alldepartmentsSlice',
    initialState: {
        status: 'idle',
        alldepartmentsResponse: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllDepartments.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllDepartments.fulfilled, (state, action) => {
                state.status = 'success'
                state.alldepartmentsResponse = action.payload
            })
            .addCase(fetchAllDepartments.rejected, (state, action) => {
                state.status = 'rejected'
                state.alldepartmentsResponse = action.payload
            })
    }
})