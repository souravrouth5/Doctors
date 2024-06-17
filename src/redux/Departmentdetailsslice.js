import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axios/AxiosInstance";


export const fetchDepartmentDoctors = createAsyncThunk('fetchDepartmentDoctors', async(id, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get(`departmentidwisedoctor/${id}`)
        return res?.data
    } catch (error) {
        return rejectWithValue(error?.response?.data)
    }
})

export const DepartmentsDoctorsSlice = createSlice({
    name: 'DepartmentsDoctorsSlice',
    initialState: {
        status: 'idle',
        departmentdoctorsResponse: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDepartmentDoctors.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchDepartmentDoctors.fulfilled, (state,action) => {
                state.status = 'success'
                state.departmentdoctorsResponse = action.payload
            })
            .addCase(fetchDepartmentDoctors.rejected, (state,action) => {
                state.status = 'rejected'
                state.departmentdoctorsResponse = action.payload
            })
    }
})