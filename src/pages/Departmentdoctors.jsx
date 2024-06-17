import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchDepartmentDoctors } from '../redux/Departmentdetailsslice';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb } from '../components/common/Breadcrumb'
import { BottomBanner } from '../components/common/BottomBanner'
import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { DepartmentdoctorsSkeleton } from '../components/Skeletons';

export function Departmentdoctors() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { departmentdoctorsResponse, status } = useSelector(state => state.departmentswisedoctors)

    console.log(id);
    console.log(departmentdoctorsResponse);

    useEffect(() => {
        dispatch(fetchDepartmentDoctors(id))
    }, [id, dispatch])

    return (
        <>
            <Breadcrumb title={'Department\'s Doctor'} />
            {
                status !== 'success' ? <DepartmentdoctorsSkeleton size={4} /> : (
                    <Grid container maxWidth={'lg'} px={4} mx={'auto'}>

                        {
                            departmentdoctorsResponse?.data?.map(item => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} key={item?._id} p={4}>
                                        <Paper sx={{ overflow: 'hidden' }}>
                                            <img src={`https://doctor-service.onrender.com/${item?.image}`} alt="" height={280} width={'100%'} />
                                            <Stack spacing={1} alignItems={''} px={2}>
                                                <Typography variant='h6' fontWeight={'bold'} color={'rgb(34, 58, 102)'}>{item?.name}</Typography>
                                                <Typography variant='body2' color={'rgb(86, 103, 135)'}>{item?.description?.slice(0, 100)}...</Typography>
                                            </Stack>
                                            <Link to={`/appointment/${item?._id}`}><Button variant="contained" sx={{ mt: { xs: 1, md: 2 }, mb: 2, ml: 1, px: 2, py: 1, borderRadius: '30px', bgcolor: '#223a66', boxShadow: 'none', transition: 'all .5s ease', '&:hover': { bgcolor: '#e12454' } }}> <Typography variant="" fontWeight={'bold'} bottomBannerTxt>Book Appointment</Typography> <i className="fa-solid fa-angle-up fa-rotate-90 " style={{ marginLeft: '20px', fontWeight: 'bold' }}></i></Button></Link>
                                        </Paper>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                )
            }
            <BottomBanner />
        </>
    )
}