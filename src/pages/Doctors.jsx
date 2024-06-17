import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDoctors } from "../redux/Alldoctorsslice";
import { BottomBanner } from '../components/common/BottomBanner';
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Link } from "react-router-dom";
import { DoctorsSkeleton } from "../components/Skeletons";

export function Doctors() {

    const dispatch = useDispatch()
    const { alldoctorResponse, status } = useSelector(state => state.alldoctors)

    console.log(alldoctorResponse);

    useEffect(() => {
        dispatch(fetchAllDoctors())
    }, [dispatch])

    return (
        <>
        <Breadcrumb title={'Doctors'}/>
            <Grid container maxWidth={'xl'}>
                {
                    status !== 'success' ? <DoctorsSkeleton size={8} /> : (
                        alldoctorResponse?.data?.map(item => {
                            return (
                                <Grid item xs={12} sm={6} md={3} px={4} py={2}>
                                    <Card sx={{ borderRadius: '10px', boxShadow: 'none' }}>
                                        <CardMedia
                                            component={'img'}
                                            image={`https://doctor-service.onrender.com/${item?.image}`}
                                            height={300}
                                            sx={{ width: '100%' }}
                                        />

                                        <CardContent>
                                            <Link to={`/doctordetails/${item._id}`} style={{ textDecoration: 'none' }}><Typography variant="h5" fontWeight={'bold'} sx={{ color: 'black', transition: 'all .3s ease', '&:hover': { color: 'rgb(225, 36, 84)' } }}>{item?.name}</Typography></Link>
                                            <Typography variant="body2">{item?.department_details[0]?.departmentName}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    )
                }
            </Grid>
            <BottomBanner/>
        </>
    )
}