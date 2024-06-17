import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axios/AxiosInstance";

export const fetchrecentBlogs = async () => {
    try {
        const res = await axiosInstance.get(`recentblog`)
        return res?.data
    } catch (error) {
        return error?.response?.data
    }
}
export const fetchAllBlogs = createAsyncThunk('fetchAllBlogs', async (_, {rejectWithValue}) => {
    try {
        const res = await axiosInstance.get(`allblog`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const searchBlog = createAsyncThunk('searchBlog', async(payload, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get(`blogsearch/${payload}`)
        console.log(res?.data);
        return res?.data
    } catch (error) {
        console.log(error);
        return rejectWithValue(error?.response?.data)
    }
})

export const AllBlogsSlice = createSlice({
    name: 'AllBlogsSlice',
    initialState: {
        status: 'idle',
        searchStatus: 'idle',
        allblogsResponse: [],
        searchblogResponse: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBlogs.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllBlogs.fulfilled, (state, action) => {
                state.status = 'success'
                state.allblogsResponse = action.payload
            })
            .addCase(fetchAllBlogs.rejected, (state, action) => {
                state.status = 'rejected'
                state.allblogsResponse = action.payload
            })
            .addCase(searchBlog.pending, (state) => {
                state.searchStatus = 'loading'
            })
            .addCase(searchBlog.fulfilled, (state, action) => {
                state.searchStatus = 'success'
                state.searchblogResponse = action.payload
            })
            .addCase(searchBlog.rejected, (state, action) => {
                state.searchStatus = 'rejected'
                state.searchblogResponse = action.payload
            })
    }
})