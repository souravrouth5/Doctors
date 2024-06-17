import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../axios/AxiosInstance';


export const getFeaturedDoctors = createAsyncThunk('getFeaturedDoctors', async (_, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get(`featured`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const getAllDepartments = createAsyncThunk('getAllDepartments', async (_, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get(`alldepartment`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const featuredDoctorsSlice = createSlice({
    name: 'featuredDoctorsSlice',
    initialState: {
        status: 'idle',
        featuredDoctorsResponse: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFeaturedDoctors.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getFeaturedDoctors.fulfilled, (state, action) => {
                state.status = 'success'
                state.featuredDoctorsResponse = action.payload
            })
            .addCase(getFeaturedDoctors.rejected, (state, action) => {
                state.status = 'rejected'
                state.featuredDoctorsResponse = action.payload
            })
    }
})

export const allDepartmentSSlice = createSlice({
    name: 'allDepartmentSSlice',
    initialState: {
        status: 'idle',
        getAllDepartmentsResponse: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllDepartments.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAllDepartments.fulfilled, (state, action) => {
                state.status = 'success'
                state.getAllDepartmentsResponse = action.payload
            })
            .addCase(getAllDepartments.rejected, (state, action) => {
                state.status = 'rejected'
                state.getAllDepartmentsResponse = action.payload
            })
    }
})