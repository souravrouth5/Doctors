import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { fetchSignleDoctor } from "../redux/Doctordetailsslice"
import { Button, Grid, Stack, Typography } from "@mui/material"
import { Breadcrumb } from "../components/common/Breadcrumb"
import { BottomBanner } from "../components/common/BottomBanner"
import { DoctordetailsSkeleton } from "../components/Skeletons"


export function Doctordetails() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { doctordetailResponse, status } = useSelector(state => state.doctordetails)

    console.log(doctordetailResponse);

    useEffect(() => {
        dispatch(fetchSignleDoctor(id))
    }, [id, dispatch])


    return (
        <>
            <Breadcrumb title={'Doctor Details'} />
            {
                status !== 'success' ? <DoctordetailsSkeleton /> : (
                    <Grid container maxWidth={'lg'} mx={'auto'} my={'100px'}>

                        <Grid item xs={12} md={4} px={1}>
                            <img src={`https://doctor-service.onrender.com/${doctordetailResponse?.data?.image}`} alt="" width={'100%'} height={450} style={{ marginBottom: '16px' }} />
                            <Typography variant="h5" fontWeight={'bold'} mb={2}>{doctordetailResponse?.data?.name}</Typography>
                            <Typography variant="body2" mb={2}>Department: {doctordetailResponse?.data?.department_id?.departmentName}</Typography>
                            <Stack direction={'row'} spacing={2}>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-linkedin"></i>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={8} px={1}>
                            <Typography variant="h3" fontWeight={'bold'}>Introducing myself</Typography>
                            <div className="bannerDivider"></div>
                            <Typography variant="body2" >{doctordetailResponse?.data?.description}</Typography>
                            <Link to={`/appointment/${doctordetailResponse?.data?._id}`}><Button variant="contained" sx={{ py: '10px', px: '20px', mt: 4, borderRadius: '30px', bgcolor: '#223a66', boxShadow: 'none', transition: 'all .5s ease', '&:hover': { bgcolor: '#e12454' } }}> <Typography fontWeight={'bold'}>Book Appointment</Typography> <i className="fa-solid fa-angle-up fa-rotate-90 " style={{ marginLeft: '20px', fontWeight: 'bold' }}></i></Button></Link>

                        </Grid>
                        <Grid item xs={12} mt={8}>
                            <Grid container >
                                <Grid item xs={12} md={4} p={1}>
                                    <Typography variant="h6" fontWeight={'bold'}>My Skills</Typography>
                                    <div className="bannerDivider"></div>
                                    <Typography variant="caption" color={'rgb(86, 103, 135)'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque recusandae magni, asperiores laborum eius enim commodi soluta repudiandae corrupti ullam assumenda, qui molestiae aspernatur. Ex facilis aperiam nostrum atque natus?</Typography>
                                </Grid>
                                <Grid item xs={12} md={4} p={1}>
                                    <Typography variant="h6" fontWeight={'bold'} mb={2}>Expertise Area</Typography>
                                    <Stack spacing={1} >
                                        <Typography variant="caption" color={'rgb(86, 103, 135)'}><i class="fa-solid fa-check" style={{ marginRight: '5px', color: 'rgb(225, 36, 84)' }}></i>International Drug Database</Typography>
                                        <Typography variant="caption" color={'rgb(86, 103, 135)'}><i class="fa-solid fa-check" style={{ marginRight: '5px', color: 'rgb(225, 36, 84)' }}></i>Stretchers and Stretcher Accessories</Typography>
                                        <Typography variant="caption" color={'rgb(86, 103, 135)'}><i class="fa-solid fa-check" style={{ marginRight: '5px', color: 'rgb(225, 36, 84)' }}></i>Cushions and Mattresses</Typography>
                                        <Typography variant="caption" color={'rgb(86, 103, 135)'}><i class="fa-solid fa-check" style={{ marginRight: '5px', color: 'rgb(225, 36, 84)' }}></i>Cholesterol and lipid tests</Typography>
                                        <Typography variant="caption" color={'rgb(86, 103, 135)'}><i class="fa-solid fa-check" style={{ marginRight: '5px', color: 'rgb(225, 36, 84)' }}></i>Critical Care Medicine Specialists</Typography>
                                        <Typography variant="caption" color={'rgb(86, 103, 135)'}><i class="fa-solid fa-check" style={{ marginRight: '5px', color: 'rgb(225, 36, 84)' }}></i>Emergency Assistance</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={4} bgcolor={'rgb(244, 249, 252)'} px={2} py={1}>
                                    <Typography variant="h6" fontWeight={'bold'} mb={2}>Make Appointment</Typography>
                                    <div className="bannerDivider"></div>
                                    <Stack spacing={2}>
                                        <Stack direction={'row'} justifyContent={'space-between'}>
                                            <Typography variant="caption" color={'rgb(86, 103, 135)'}>Mon - Fri</Typography>
                                            <Typography variant="caption" color={'rgb(86, 103, 135)'}>11:00 am - 12:30 pm</Typography>
                                        </Stack>
                                        <Stack direction={'row'} justifyContent={'space-between'}>
                                            <Typography variant="caption" color={'rgb(86, 103, 135)'}>Sunday</Typography>
                                            <Typography variant="caption" color={'rgb(86, 103, 135)'}>Closed</Typography>
                                        </Stack>

                                        <Stack >
                                            <Typography variant="caption" color={'rgb(86, 103, 135)'}>Need Urgent Help ?</Typography>
                                            <Typography variant="h5" fontWeight={'bold'} color={'rgb(225, 36, 84)'}>+917890123456</Typography>
                                        </Stack>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                )
            }
            <BottomBanner />
        </>
    )
}