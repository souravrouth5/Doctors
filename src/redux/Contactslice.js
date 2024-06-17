import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from "../axios/AxiosInstance";
import { toast } from 'react-toastify';

export const postContact = createAsyncThunk('postContact', async (payload, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post(`createcontact`, payload)
        console.log(res?.data);
        return res?.data
    } catch (error) {
        console.log(error);
        return rejectWithValue(error?.response?.data)
    }
})

export const Contactslice = createSlice({
    name: 'Contactslice',
    initialState: {
        status: 'idle',
        contactResponse: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postContact.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(postContact.fulfilled, (state, action) => {
                state.status = 'success'
                state.contactResponse = action.payload
                // console.log(action.payload);
                if(action.payload?.status){
                    toast.success(action.payload?.message)
                } else {
                    toast.error(action.payload?.message)
                }
            })
            .addCase(postContact.rejected, (state, action) => {
                state.status = 'rejected'
                // console.log('gah', action.payload);
                state.contactResponse = action.payload
                toast.error(action.payload?.message)
            })
    }
})