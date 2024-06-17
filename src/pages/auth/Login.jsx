import { Box, Button, Grid, Typography } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Signin } from "../../redux/Auth";
import { BtnLoader } from "../../components/loader/BtnLoader";


export function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const { status } = useSelector(state => state.auth)

    const onSubmit = (data) => {
        dispatch(Signin(data))
    }

    return (
        <>
            <Grid container maxWidth={'xl'}>
                <Grid item sm={7} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {/* <img src="https://source.unsplash.com/random?wallpapers" alt="" width={'100%'} height={'100%'} /> */}
                    <img src={'https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg'} alt="" width={'100%'} height={'100%'} />
                </Grid>
                <Grid item xs={12} sm={5} display={'flex'} direction={'column'} alignItems={'center'} pt={2}>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'90%'}>
                        <Typography variant="h4" fontWeight={'bolder'} mb={2}>Login Form</Typography>
                        <Button variant="contained" sx={{ bgcolor: 'rgba(235,244,255, 0.7)', color: 'black', mb: 2, px: 4, py: 2, width: '100%', '&:hover': { bgcolor: 'rgba(76,81,191,0.9)', color: 'white' } }}><Typography variant="body2" fontWeight={'bold'} sx={{ textTransform: 'none' }}><GoogleIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> Log In with Google</Typography></Button> <br />
                        <Button variant="contained" sx={{ bgcolor: 'rgba(235,244,255, 0.7)', color: 'black', mb: 2, px: 4, py: 2, width: '100%', '&:hover': { bgcolor: 'rgba(76,81,191,0.9)', color: 'white' } }}><Typography variant="body2" fontWeight={'bold'} sx={{ textTransform: 'none' }}><GitHubIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> Log In with Github</Typography></Button>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'90%'} color={'rgba(113,128,150)'}>

                        <Typography variant="body1" my={4} ><div style={{ display: 'inline-block', width: '30px', height: '1px', backgroundColor: 'rgba(0,0,0,0.4)', verticalAlign: 'middle' }}></div> Or Login with Email <div style={{ display: 'inline-block', width: '30px', height: '1px', backgroundColor: 'rgba(0,0,0,0.4)', verticalAlign: 'middle' }}></div></Typography>
                        <form action="" className="authForm" style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                            <Box pb={2.5}>
                                <input type="text" name="email" placeholder="Enter Your Email" {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ })} />
                                {errors.email?.type === 'required' && <span className="formValidationError" style={{ color: '#e12454', fontSize: '12px', fontWeight: 'bold' }}>@Email is required</span>}
                            </Box>
                            
                            <Box pb={2.5}>
                                <input type="password" name="password" placeholder="Enter Password" {...register('password', { required: true })} />
                                {errors.password?.type === 'required' && <span className="formValidationError" style={{ color: '#e12454', fontSize: '12px', fontWeight: 'bold' }}>@Password is required</span>}
                            </Box>

                            <Button variant="contained" type="submit" sx={{ bgcolor: 'rgba(102,126,234,0.7)', color: 'white', mb: 2, px: 4, py: 2, width: '100%', '&:hover': { bgcolor: 'rgba(76,81,191,0.9)' } }}> {status !== 'loading' ? <Typography variant="body2" fontWeight={'bold'} sx={{ textTransform: 'none' }}><PersonAddIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> Sign In</Typography> : <>Loading... <BtnLoader height={25} /></>}</Button>
                        </form>
                        <Typography variant="caption" textAlign={'center'} width={'70%'}>I agree to abide by templatana's Terms of Service and its Privacy Policy</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}