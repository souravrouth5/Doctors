import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axios/AxiosInstance";
import { toast } from 'react-toastify'

// export const fetchBlogComments = createAsyncThunk('fetchBlogComments', async (id, { rejectWithValue }) => {
//     try {
//         const res = await axiosInstance.get(`getblogcomment/${id}`)
//         return res.data
//     } catch (error) {
//         return rejectWithValue(error?.response?.data)
//     }
// })

export const fetchBlogComments = async(id) => {
    try {
        const res = await axiosInstance.get(`getblogcomment/${id}`)
        return res.data
    } catch (error) {
        return error?.response?.data
    }
}

export const postComment = async(payload) => {
    try {
        const res = await axiosInstance.post(`createblogcomment`, payload)
        // console.log(res?.data);
        if(res?.data?.status === 200){
            toast.success(res?.data?.message)
        } else {
            toast.error(res?.data?.message)
        }
        return res?.data
    } catch (error) {
        // console.log(error);
        toast.error(error?.response?.data?.msg)
        toast.error(error?.response?.data?.message)
        return error?.response?.data
    }
}

export const fetchBlogDetails = createAsyncThunk('fetchBlogDetails', async (id, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get(`singleblog/${id}`)
        return res?.data
    } catch (error) {
        rejectWithValue(error?.response?.data)
    }
})

export const BlogDetailsSlice = createSlice({
    name: 'BlogDetailsSlice',
    initialState: {
        status: 'idle',
        blogdetailsResponse: [],
        blogCommentsResponse: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogDetails.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchBlogDetails.fulfilled, (state, action) => {
                state.status = 'success'
                state.blogdetailsResponse = action.payload
            })
            .addCase(fetchBlogDetails.rejected, (state, action) => {
                state.status = 'rejected'
                state.blogdetailsResponse = action.payload
            })
            // .addCase(fetchBlogComments.pending, (state) => {
            //     state.status = 'loading'
            // })
            // .addCase(fetchBlogComments.fulfilled, (state, action) => {
            //     state.status = 'success'
            //     state.blogCommentsResponse = action.payload
            // })
            // .addCase(fetchBlogComments.rejected, (state, action) => {
            //     state.status = 'rejected'
            //     state.blogCommentsResponse = action.payload
            // })
    }
})