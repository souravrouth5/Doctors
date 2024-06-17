import { Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllDepartments, getFeaturedDoctors } from "../redux/Homeslice";
import { BottomBanner } from "../components/common/BottomBanner";
import { Link } from 'react-router-dom'
// import { Loader } from "../components/loader/Loader";
import { Loader2 } from "../components/loader/Loader2";
import Gallery from "../components/Gallery";


export function Home() {

    const { featuredDoctorsResponse, status } = useSelector(state => state.featuredDoctos)
    const { getAllDepartmentsResponse } = useSelector(state => state.allDepartmentS)
    const dispatch = useDispatch()

    console.log(getAllDepartmentsResponse);

    

    useEffect(() => {
        dispatch(getFeaturedDoctors())
        dispatch(getAllDepartments())
    }, [dispatch])

    if (status === 'loading') {
        return <h1 style={{ height: '100vh' }}><Loader2 /></h1>
    }

    return (
        <>
            <Container maxWidth='xl' disableGutters>

                {/* banner and info */}
                <Grid container m={'0'}>

                    {/* banner */}

                    <Grid item xs={12} m={'0'} sx={{ minHeight: { xs: '65vh', md: '80vh' } }} className="banner">
                        {/* <img src="http://labartisan.net/demo/mukti/assets/images/banner/1.jpg" alt="http://labartisan.net/demo/mukti/assets/images/banner/1.jpg" width={'100%'}/> */}
                        <div className="bannerTxt">
                            <Typography variant="h5" fontWeight={'bold'} fontSize={'calc(24px + 0.5vw)'} mb={4}>Best Medical Clinic</Typography>
                            <Typography variant="h3" fontWeight={'bolder'} fontSize={'calc(36px + 0.5vw)'} mb={4}><span style={{ color: '#1462f3' }}>Bringing Health</span> To Life For The Whole Family</Typography>
                            <Typography variant="h5" fontSize={'calc(10px + 0.5vw)'} mb={4} color={'rgba(0,0,0,0.7)'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deleniti obcaecati velit ab atque nihil.
                            </Typography>
                            <Link to={`/departments`}><Button variant="contained" sx={{ py: '10px', px: '20px', mb: 4, borderRadius: '30px', bgcolor: '#223a66', transition: 'all .3s ease', '&:hover': { scale: '1.1', bgcolor: '#e12454' } }}> <Typography fontWeight={'bold'}>Book Appointment</Typography> <i className="fa-solid fa-angle-up fa-rotate-90 " style={{ marginLeft: '20px', fontWeight: 'bold' }}></i></Button></Link>
                        </div>
                    </Grid>

                    {/* end of banner */}

                    {/* Information */}

                    <Grid item xs={12} sx={{ mt: { sm: '-50px', md: '-100px' } }} className="info">

                        <Grid container maxWidth={'lg'} mx={'auto'} py={1}>
                            <Grid item xs={12} md={4} px={2} py={2}>
                                <Paper elevation={4} sx={{ py: '10px', px: '25px', minHeight: '280px', borderRadius: '10px' }}>
                                    <p><i className="fa-solid fa-hospital-user" style={{ fontSize: '42px', fontWeight: '' }}></i></p>
                                    <Typography variant="subtitle1">24 Hours service</Typography>
                                    <Typography variant="h5" fontWeight={'bold'} mb={2}>Online Appointment</Typography>
                                    <Typography variant="caption" color={'rgba(0,0,0,0.6)'}>Get ALl time support for emergency.We have introduced the principle of family medicine.</Typography> <br />
                                    <Link to={`/departments`}><Button variant="contained" sx={{ py: '10px', px: '20px', borderRadius: '20px', bgcolor: '#223a66', color: 'white', mt: '16px', transition: 'all .5s ease', '&:hover': { bgcolor: '#e12454' } }}> <Typography variant="caption" color={'white'} fontWeight={''} >Book Appointment</Typography> </Button></Link>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} px={2} py={2} >
                                <Paper elevation={4} sx={{ py: '10px', px: '25px', minHeight: '280px', borderRadius: '10px' }}>
                                    <p><i className="fa-regular fa-clock" style={{ fontSize: '42px', fontWeight: '' }}></i></p>
                                    <Typography variant="subtitle1">timing schedule</Typography>
                                    <Typography variant="h5" fontWeight={'bold'} mb={2}>Working Hours</Typography>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Typography variant="caption" color={'rgba(0,0,0,0.6)'}>Sun - Wed :</Typography>
                                        <Typography variant="caption" color={'rgba(0,0,0,0.6)'}>8:00 - 17:00</Typography>
                                    </Stack>
                                    <hr style={{ opacity: '0.2' }} />
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Typography variant="caption" color={'rgba(0,0,0,0.6)'}>Thu - Fri :</Typography>
                                        <Typography variant="caption" color={'rgba(0,0,0,0.6)'}>9:00 - 17:00</Typography>
                                    </Stack>
                                    <hr style={{ opacity: '0.2' }} />
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Typography variant="caption" color={'rgba(0,0,0,0.6)'}>Sat - Sun :</Typography>
                                        <Typography variant="caption" color={'rgba(0,0,0,0.6)'}>10:00 - 17:00</Typography>
                                    </Stack>
                                    <hr style={{ opacity: '0.2' }} />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} px={2} py={2}>
                                <Paper elevation={4} sx={{ py: '10px', px: '25px', minHeight: '280px', borderRadius: '10px' }}>
                                    <p><i className="fa-solid fa-headset" style={{ fontSize: '42px', fontWeight: 'bold' }}></i></p>
                                    <Typography variant="subtitle1">emergency cases</Typography>
                                    <Typography variant="h5" fontWeight={'bold'} mb={2}>1-800-700-6200</Typography>
                                    <Typography variant="caption" color={'rgba(0,0,0,0.6)'}>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* end of information */}
                </Grid>

                {/* end of banner and info */}

                {/* Experts */}

                <Grid container maxWidth={'lg'} mx={'auto'} my={4}>

                    <Grid item xs={12} textAlign={'center'} m={4}>
                        <Typography variant="h4" color={'#223a66'} fontWeight={'bolder'}>Our Specialists</Typography>
                        <div className="divider"></div>
                        <Typography variant="caption" color={'rgba(0,0,0,0.6)'}>Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles</Typography>
                    </Grid>

                    {/* cards */}
                    {
                        featuredDoctorsResponse?.data?.slice(1, 7)?.map(item => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={item._id} p={2}>
                                    <Stack spacing={2} alignItems={'center'} className="featured">
                                        <div className="imgBox">
                                            <img src={`https://doctor-service.onrender.com/${item.image}`} alt={item.image} />
                                        </div>
                                        <Typography variant="h6" fontWeight={'bolder'}>{item.name}</Typography>
                                        {/* <Typography variant="body2" color={'rgba(0,0,0,0.6)'}>{item.description.slice(0, 150)}</Typography> */}
                                        <Typography variant="body2" fontWeight={'bold'} color={'#13a2b7'}>{item.department_details[0].departmentName}</Typography>
                                        <Stack spacing={3} direction={'row'}>
                                            <i class="fa-brands fa-facebook-f"></i>
                                            <i class="fa-brands fa-instagram"></i>
                                            <i class="fa-brands fa-twitter"></i>
                                            <i class="fa-brands fa-linkedin-in"></i>
                                        </Stack>
                                    </Stack>
                                </Grid>
                            )
                        })
                    }
                    {/* cards */}
                </Grid>
                {/* end of experts */}

                {/* services */}

                <Grid container maxWidth={'lg'} mx={'auto'} my={2}>

                    <Grid item xs={12} textAlign={'center'} m={4}>
                        <Typography variant="h4" color={'#223a66'} fontWeight={'bolder'}>Our Services</Typography>
                        <div className="divider"></div>
                        <Typography variant="caption" color={'rgba(0,0,0,0.6)'}>Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles</Typography>
                    </Grid>

                    {
                        getAllDepartmentsResponse?.data?.map(item => {
                            return (
                                <Grid item xs={12} sm={6} key={item._id} p={2}>
                                    <Grid container >
                                        <Grid item xs={12} md={5}>
                                            <img src={`https://doctor-service.onrender.com/${item.image}`} alt="" style={{ height: '150px', width: '100%', objectFit: 'cover' }} />
                                        </Grid>
                                        <Grid item xs={12} md={7} sx={{ pl: { md: 2 } }}>
                                            <Stack spacing={2}>
                                                <Typography variant="body" fontWeight={'bold'}>{item.departmentName}</Typography>
                                                <Typography variant="caption" >{item.description.slice(0, 300)}</Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                    {/* <Stack sx={{ flexDirection: {xs: 'column', sm: 'row'}, gap: '10px'}}>
                                        <img src={`https://doctor-service.onrender.com/${item.image}`} alt="" style={{ minHeight: '150px', maxHeight: '150px', minWidth: '200px', maxWidth: '200px', objectFit: 'cover'}}/>
                                        <Stack spacing={2}>
                                            <Typography variant="body" fontWeight={'bold'}>{item.departmentName}</Typography>
                                            <Typography variant="caption" >{item.description.slice(0, 300)}</Typography>
                                        </Stack>
                                    </Stack> */}
                                </Grid>
                            )
                        })
                    }
                </Grid>
                {/* end of services */}

                {/* Gallery */}
                <Gallery />
                {/* Gallery */}

                {/* appointment bottom banner */}
                <BottomBanner/>
                {/* appointment bottom banner */}

            </Container>
        </>
    )
}