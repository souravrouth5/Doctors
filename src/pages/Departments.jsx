import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllDepartments } from '../redux/Departmentsslice';
import { Breadcrumb } from '../components/common/Breadcrumb'
import { BottomBanner } from '../components/common/BottomBanner'
import { Container, Grid, Skeleton, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { DepartmentsSkeleton } from '../components/Skeletons';

export function Departments (){

    const dispatch = useDispatch()
    const { alldepartmentsResponse, status } = useSelector(state => state.alldepartments)

    console.log(alldepartmentsResponse);

    useEffect(() => {
        dispatch(fetchAllDepartments())
    }, [dispatch])
    return(
        <>
        <Breadcrumb title={'Departments'}/>
        
        <Container maxWidth={'xl'} sx={{ my: 2}}>

                <Container maxWidth={'md'} sx={{px: '50px', my: 8}}>
                    <Typography variant='h4' fontWeight={'bold'} textAlign={'center'} color={'rgb(34, 58, 102)'}>{status === 'success' ? 'Award Winning Patient Care' : <Skeleton variant='text' sx={{fontSize: { sm: '15rem', md: '3rem'}}} />}</Typography>
                    {status === 'success' ? <div className="bannerDivider" style={{ margin: '30px auto' }}></div> : <Skeleton variant='rectangular' height={'5px'} width={'20%'} sx={{margin: '20px auto'}} />}
                    {status === 'success' ? <Typography variant='body1' fontSize={'.75rem'} color={'rgb(86, 103, 135)'} textAlign={'center'}>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</Typography> : <Skeleton variant='text' sx={{fontSize: '0.75rem'}} />}
                </Container>

                <Grid container maxWidth={'lg'} mx={'auto'}>
                    {
                        status !== 'success' ? <DepartmentsSkeleton size={5}/> : (
                            alldepartmentsResponse?.data?.map(item => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} key={item._id} p={2}>
                                        <img src={`https://doctor-service.onrender.com/${item?.image}`} alt="" height={250} width={'100%'} />
                                        <Stack spacing={2}>
                                            <Typography variant='h5' fontWeight={'bold'} color={'rgb(34, 58, 102)'}>{item?.departmentName}</Typography>
                                            <Typography variant='caption' color={'rgb(86, 103, 135)'} >{item?.description?.slice(0, 100)}...</Typography>
                                            <Link to={`/departmentdoctors/${item?._id}`} style={{ textDecoration: 'none', display: 'block' }}><Typography variant='caption' sx={{ color: 'rgb(34, 58, 102)', transition: 'all .3s ease', '&:hover': { color: 'rgb(225, 36, 84)' } }}>Choose Department <i class="fa-solid fa-angle-right" style={{ marginLeft: '5px' }}></i></Typography></Link>
                                        </Stack>
                                    </Grid>
                                )
                            })
                        )
                    }
                </Grid>

        </Container>
        <BottomBanner />
        </>
    )
}