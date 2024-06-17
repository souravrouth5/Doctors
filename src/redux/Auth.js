import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axios/AxiosInstance";
import { toast } from 'react-toastify'


export const Signup = createAsyncThunk('Signup', async (payload, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post(`register`, payload)
        console.log(res?.data);
        if (res?.data?.success) {
            toast.success(res?.data?.message)
            window.location.href = '/login'
        } else {
            toast.error(res?.data?.message)
        }
        return res?.data
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message)
        toast.error(error?.response?.data?.msg)
        return rejectWithValue(error?.response?.data)
    }
})

export const Signin = createAsyncThunk('Signin', async (payload, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post(`login`, payload)
        console.log(res?.data);
        if (res?.data?.status === 200) {
            // toast.success(res?.data?.message)
            toast.success(`Welcome ${res?.data?.data?.name}`)
            window.location.href = '/departments'
        } else {
            toast.error(res?.data?.message)
        }
        return res?.data
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message)
        toast.error(error?.response?.data?.msg)
        return rejectWithValue(error?.response?.data)
    }
})

export const getDashboard = createAsyncThunk('getDashboard', async (id, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.get(`userdash/${id}`)
        console.log(res?.data);
        return res?.data
    } catch (error) {
        console.log(error?.response?.data);
        return rejectWithValue(error?.response?.data)
    }
})

// export const Authslice = createSlice({
//     name: 'Authslice',
//     initialState: {
//         status: 'idle',
//         signinResponse: [],
//         dashboardResponse: [],
//         isLoggedIn: false,
//     },
//     reducers: {
//         logout: (state) => {
//             localStorage.removeItem('token')
//             localStorage.removeItem('user')
//             if (localStorage.getItem('token') || localStorage.getItem('user')) {
//                 toast.error('Something went wrong')
//             } else {
//                 toast.success('Logged Out Successfully')
//                 state.isLoggedIn = false
//             }
//         },

//         checkToken: (state) => {
//             if (localStorage.getItem('token') || localStorage.getItem('user')) {
//                 state.isLoggedIn = true
//             }
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(Signin.pending, (state) => {
//                 state.status = 'loading'
//             })
//             .addCase(Signin.fulfilled, (state, action) => {
//                 state.status = 'success'
//                 state.signinResponse = action.payload
//                 console.log(action.payload);
//                 localStorage.setItem('token', action.payload?.token)
//                 localStorage.setItem('user', JSON.stringify(action.payload?.data))
//                 state.isLoggedIn = true
//             })
//             .addCase(Signin.rejected, (state, action) => {
//                 state.status = 'rejected'
//                 state.signinResponse = action.payload
//             })
//             .addCase(getDashboard.pending, (state) => {
//                 state.status = 'loading'
//             })
//             .addCase(getDashboard.fulfilled, (state, action) => {
//                 state.status = 'success'
//                 state.dashboardResponse = action.payload
                
//             })
//             .addCase(getDashboard.rejected, (state, action) => {
//                 state.status = 'rejected'
//                 state.dashboardResponse = action.payload
//             })
//     }
// })

export const Authslice = createSlice({
    name: 'Authslice',
    initialState: {
        status: 'idle',
        signinResponse: [],
        dashboardResponse: [],
        isLoggedIn: false,
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            if (localStorage.getItem('token') || localStorage.getItem('user')) {
                toast.error('Something went wrong')
            } else {
                toast.success('Logged Out Successfully')
                state.isLoggedIn = false
            }
        },

        checkToken: (state) => {
            if (localStorage.getItem('token') || localStorage.getItem('user')) {
                state.isLoggedIn = true
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(Signin.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(Signin.fulfilled, (state, action) => {
                state.status = 'success'
                state.signinResponse = action.payload
                console.log(action.payload);
                localStorage.setItem('token', action.payload?.token)
                localStorage.setItem('user', JSON.stringify(action.payload?.data))
                state.isLoggedIn = true
            })
            .addCase(Signin.rejected, (state, action) => {
                state.status = 'rejected'
                state.signinResponse = action.payload
            })

            .addCase(Signup.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(Signup.fulfilled, (state) => {
                state.status = 'success'
            })
            .addCase(Signup.rejected, (state) => {
                state.status = 'rejected'
            })

            .addCase(getDashboard.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getDashboard.fulfilled, (state, action) => {
                state.status = 'success'
                state.dashboardResponse = action.payload

            })
            .addCase(getDashboard.rejected, (state, action) => {
                state.status = 'rejected'
                state.dashboardResponse = action.payload
            })
    }
})

export const { logout, checkToken } = Authslice.actions