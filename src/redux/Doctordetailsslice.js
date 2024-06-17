import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axios/AxiosInstance";


export const fetchSignleDoctor = createAsyncThunk(`fetchSignleDoctor`, async (id, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get(`doctordetails/${id}`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const DoctorDetailSlice = createSlice({
    name: 'DoctorDetailSlice',
    initialState: {
        status: 'idle',
        doctordetailResponse: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSignleDoctor.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchSignleDoctor.fulfilled, (state, action) => {
                state.status = 'success'
                state.doctordetailResponse = action.payload
            })
            .addCase(fetchSignleDoctor.rejected, (state, action) => {
                state.status = 'rejected'
                state.doctordetailResponse = action.payload
            })
    }
})