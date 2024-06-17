import { useDispatch, useSelector } from 'react-redux'
import { Breadcrumb } from '../components/common/Breadcrumb'
import { BottomBanner } from '../components/common/BottomBanner'
import { Button, Grid, Stack, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { createAppoinment } from '../redux/Appoinmentslice';
import { useEffect } from 'react';
import { fetchSignleDoctor } from '../redux/Doctordetailsslice';
import { useParams } from 'react-router-dom';

export function Appoinment() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))

    const { doctordetailResponse } = useSelector(state => state.doctordetails)

    console.log(doctordetailResponse);

    useEffect(() => {
        dispatch(fetchSignleDoctor(id))
    }, [id, dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        const urlencoded = new URLSearchParams()
        urlencoded.append('user_id', user?._id)
        urlencoded.append('department_id', doctordetailResponse?.data?.department_id?._id)
        urlencoded.append('doctor_id', id)
        urlencoded.append('phone', user?.phone)
        urlencoded.append('message', 'I want to book an appointment for tomorrow')
        dispatch(createAppoinment(urlencoded))
    }

    return (
        <>
            <Breadcrumb title={'Book Appoinment'} />

            <Grid container maxWidth={'lg'} mx={'auto'} my={8}>

                <Grid item md={5} sx={{ display: { xs: 'none', md: 'block' } }} px={2}>
                    <Stack spacing={3}>
                        <SupportAgentIcon sx={{ fontSize: '56px', color: 'rgb(34, 58, 102)' }} />
                        <Typography variant='h4' fontWeight={'bold'}>Call for an Emergency Service!</Typography>
                        <Typography variant='h3' fontWeight={'bold'} color={'rgb(34, 58, 102)'}>+917890123456</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} px={2}>
                    <Typography variant='h3' fontWeight={'bold'} mb={2} color={'rgb(34, 58, 102)'}>Book An Appoitnment</Typography>
                    <Typography variant='caption'>Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</Typography>

                    <form action="" className="contactForm" onSubmit={handleSubmit}>

                        <Grid container maxWidth={'lg'} mx={'auto'} my={4}>
                            <Grid item xs={12} md={6} mb={'20px'} sx={{ pr: { md: 2 } }}>
                                <input type="text" name="name" id="" value={doctordetailResponse?.data?.department_id?.departmentName} readOnly />
                            </Grid>
                            <Grid item xs={12} md={6} mb={'20px'} sx={{ pl: { md: 2 } }}>
                                <input type="text" name="email" id="" value={doctordetailResponse?.data?.name} readOnly />
                            </Grid>
                            <Grid item xs={12} md={6} mb={'20px'} sx={{ pr: { md: 2 } }}>
                                <input type="text" name="topic" id="" value={new Date(+new Date() + 86400000)?.toLocaleDateString()} />
                            </Grid>
                            <Grid item xs={12} md={6} mb={'20px'} sx={{ pl: { md: 2 } }}>
                                <input type="text" name="phone" id="" value={`${(doctordetailResponse?.data?.aperture_time)}AM - ${doctordetailResponse?.data?.departure_time}PM`} readOnly />
                            </Grid>
                            <Grid item xs={12} md={6} mb={'20px'} sx={{ pr: { md: 2 } }}>
                                <input type="text" name="topic" id="" value={user?.name} readOnly />
                            </Grid>
                            <Grid item xs={12} md={6} mb={'20px'} sx={{ pl: { md: 2 } }}>
                                <input type="number" name="phone" id="" value={user?.phone} readOnly />
                            </Grid>
                            <Grid item xs={12}>
                                <textarea name="msg" id="" placeholder="Type Your Message" cols="30" rows="15" style={{ width: '100%' }} defaultValue={'I want to book an appointment for tomorrow'}></textarea>
                            </Grid>
                        </Grid>

                        <Button variant="" type="submit" sx={{ bgcolor: '#223a66', color: 'white', transition: 'all .3s ease', '&:hover': { bgcolor: '#e12454' } }}>Book Appointment <i class="fa-solid fa-paper-plane" style={{ marginLeft: '8px' }}></i></Button>

                    </form>
                </Grid>
            </Grid>

            <BottomBanner />
        </>
    )
}