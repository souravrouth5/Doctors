import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from "../axios/AxiosInstance";
import { toast } from 'react-toastify'

export const createAppoinment = createAsyncThunk('createAppoinment', async(payload, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post(`createappointment`, payload)
        console.log(res?.data);
        if(res?.data?.status){
            toast.success(res?.data?.message)
        } else {
            toast.error(res?.data?.message)
        }
        return res?.data
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message)
        return rejectWithValue(error?.response?.data)
    }
})

