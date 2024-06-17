import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { getAllDepartments } from "../../redux/Homeslice";


export function Footer() {

    const dispatch = useDispatch()
    const { getAllDepartmentsResponse } = useSelector(state => state.allDepartmentS)

    useEffect(() => {
        dispatch(getAllDepartments())
    }, [dispatch])

    return (
        <>
            <Grid container maxWidth={'lg'} mx={'auto'} my={2}>

                <Grid item xs={12} sm={6} md={3} px={2} py={2}>
                    <Typography variant="h3" fontWeight={'bold'}>
                        <img src={'/img/doctor.png'} alt="" width={'50px'}/>
                        <span style={{color: '#1462F3'}}>D</span>octors</Typography>
                    <Typography variant="caption" color={'rgb(111, 139, 164)'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolorum veritatis inventore cum eligendi nobis, esse ad non omnis vel</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} px={2} py={2}>
                    <Typography variant="h6" fontWeight={'bold'}>Departments</Typography>
                    <div className="bannerDivider"></div>
                    {
                        getAllDepartmentsResponse?.data?.map(item => {
                            return (
                                <>
                                    <Link style={{ textDecoration: 'none', color: 'rgb(111, 139, 164)' }} key={item._id}><Typography variant="caption" sx={{ transition: 'all .3s ease', '&:hover': { color: 'rgb(225, 36, 84)'}}}>{item.departmentName}</Typography></Link>
                                    <br />
                                </>
                            )
                        })
                    }
                </Grid>
                <Grid item xs={12} sm={6} md={3} px={2} py={2}>
                    <Typography variant="h6" fontWeight={'bold'}>Support</Typography>
                    <div className="bannerDivider"></div>
                    <Link style={{textDecoration: 'none', color: 'rgb(111, 139, 164)'}}><Typography variant="caption" sx={{ transition: 'all .3s ease','&:hover': {color: 'rgb(225, 36, 84)'}}}>Terms & Conditions</Typography></Link><br />
                    <Link style={{textDecoration: 'none', color: 'rgb(111, 139, 164)'}}><Typography variant="caption" sx={{ transition: 'all .3s ease','&:hover': {color: 'rgb(225, 36, 84)'}}}>Privacy Policies</Typography></Link><br />
                    <Link style={{textDecoration: 'none', color: 'rgb(111, 139, 164)'}}><Typography variant="caption" sx={{ transition: 'all .3s ease','&:hover': {color: 'rgb(225, 36, 84)'}}}>Company Supports</Typography></Link><br />
                    <Link style={{textDecoration: 'none', color: 'rgb(111, 139, 164)'}}><Typography variant="caption" sx={{ transition: 'all .3s ease','&:hover': {color: 'rgb(225, 36, 84)'}}}>FAQ's</Typography></Link><br />
                    <Link style={{textDecoration: 'none', color: 'rgb(111, 139, 164)'}}><Typography variant="caption" sx={{ transition: 'all .3s ease','&:hover': {color: 'rgb(225, 36, 84)'}}}>Company Licence</Typography></Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3} px={2} py={2}>
                    <Typography variant="h6" fontWeight={'bold'}>Get In Touch</Typography>
                    <div className="bannerDivider"></div>
                    <Typography variant="body2" color='rgb(111, 139, 164)'><i class="fa-solid fa-headset fa-fw" style={{marginRight: '4px'}}></i>Support Available for 24/7</Typography>
                    <Typography variant="h5" fontWeight={'bold'} my={1}>Support@gmail.com</Typography>
                    <Typography variant="body2" color='rgb(111, 139, 164)'><i class="fa-solid fa-calendar-days fa-fw" style={{marginRight: '4px'}}></i>Mon to Fri : 08:30 - 18:00</Typography>
                    <Typography variant="h5" fontWeight={'bold'} my={1}>+917890123456</Typography>
                </Grid>

            </Grid>
        </>
    )
}