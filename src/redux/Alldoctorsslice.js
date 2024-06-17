import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axios/AxiosInstance";


export const fetchAllDoctors = createAsyncThunk('fetchAllDoctors', async (_, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get(`alldoctordepartment`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const AllDoctorsSlice = createSlice({
    name: 'AllDoctorsSlice',
    initialState: {
        status: 'idle',
        alldoctorResponse: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllDoctors.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllDoctors.fulfilled, (state, action) => {
                state.status = 'success'
                state.alldoctorResponse = action.payload
            })
            .addCase(fetchAllDoctors.rejected, (state, action) => {
                state.status = 'rejected'
                state.alldoctorResponse = action.payload
            })
    }
})