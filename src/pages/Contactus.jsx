import { Box, Button, Container, Grid, Typography } from "@mui/material";
// import { BottomBanner } from "../components/common/BottomBanner";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { postContact } from "../redux/Contactslice";

export function Contactus() {

    const dispatch = useDispatch()
    const { contactResponse, status } = useSelector(state => state.contact)
    const {register, handleSubmit, formState: {errors}} = useForm()

    console.log(contactResponse);

    const onSubmit = (data) => {
        console.log(data);
        const urlencoded = new URLSearchParams(data)
        dispatch(postContact(urlencoded))
    }
    

    return (
        <>
            <Breadcrumb title={'Get In Touch'} />

            <Grid container maxWidth={'lg'} my={8} mx={'auto'}>

                <Grid item xs={12} sm={6} md={4} px={2} py={1}>

                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} px={16} py={6} border={'5px solid #EEF2F6'}>
                        <i class="fa-solid fa-phone-volume" style={{ fontSize: '50px', marginBottom: '24px', color: '#e12454' }}></i>
                        <Typography variant="h6" mb={1} fontWeight={'bold'}>Call Us</Typography>
                        <Typography variant="caption" color={'#566787'}>+917890123456</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} px={2} py={1}>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} px={16} py={6} border={'5px solid #EEF2F6'}>
                        <i class="fa-solid fa-envelope-open-text" style={{ fontSize: '50px', marginBottom: '24px', color: '#e12454' }}></i>
                        <Typography variant="h6" mb={1} fontWeight={'bold'}>Email Us</Typography>
                        <Typography variant="caption" color={'#566787'}>support@doctor.com</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4} px={2} py={1}>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} px={16} py={6} border={'5px solid #EEF2F6'}>
                        <i class="fa-solid fa-location-dot" style={{ fontSize: '50px', marginBottom: '24px', color: '#e12454' }}></i>
                        <Typography variant="h6" mb={1} fontWeight={'bold'}>Location</Typography>
                        <Typography variant="caption" color={'#566787'}>Sector V, Kolkata</Typography>
                    </Box>
                </Grid>

            </Grid>

            <Container maxWidth='lg' sx={{ my: 12, }}>

                <Typography variant="h3" fontWeight={'bold'} textAlign={'center'} color={'#223a66'} mb={4}>Contact Us</Typography>
                <div className="bannerDivider" style={{ margin: '0 auto', width: '100px', backgroundColor: '#e12454' }}></div>
                <Typography variant="body1" fontSize={'12px'} color={'#566787'} textAlign={'center'} width={'80%'} my={4} mx={'auto'}>Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?</Typography>

                <form action="" className="contactForm" onSubmit={handleSubmit(onSubmit)}>

                    <Grid container maxWidth={'lg'} mx={'auto'} my={4}>
                        <Grid item xs={12} md={6} mb={'20px'} sx={{ pr: { md: 2 } }}>
                            <input type="text" name="name" id="" placeholder="Enter Your Name" {...register('name', { required: true})}/>
                            {errors.name?.type === 'required' && <span><Typography variant="body1" fontSize={'12px'} color={'#e12454'} textAlign={'left'}>@Name is required</Typography></span>}
                        </Grid>
                        <Grid item xs={12} md={6} mb={'20px'} sx={{ pl: { md: 2 } }}>
                            <input type="email" name="email" id="" placeholder="Enter Your Email" {...register('email', { required: true })} />
                            {errors.email?.type === 'required' && <span><Typography variant="body1" fontSize={'12px'} color={'#e12454'} textAlign={'left'}>@Email is required</Typography></span>}
                        </Grid>
                        <Grid item xs={12} md={6} mb={'20px'} sx={{ pr: { md: 2 } }}>
                            <input type="text" name="topic" id="" placeholder=" Enter Your Topic" {...register('topic', { required: true })} />
                            {errors.topic?.type === 'required' && <span><Typography variant="body1" fontSize={'12px'} color={'#e12454'} textAlign={'left'}>@Topic is required</Typography></span>}
                        </Grid>
                        <Grid item xs={12} md={6} mb={'20px'} sx={{ pl: { md: 2 } }}>
                            <input type="number" name="phone" id="" placeholder="Enter Your Number" {...register('phone', { required: true })} />
                            {errors.phone?.type === 'required' && <span><Typography variant="body1" fontSize={'12px'} color={'#e12454'} textAlign={'left'}>@Phone is required</Typography></span>}
                        </Grid>
                        <Grid item xs={12}>
                            <textarea name="msg" id="" placeholder="Type Your Message" cols="30" rows="15" style={{ width: '100%' }} {...register('msg', { required: true })}></textarea>
                            {errors.msg?.type === 'required' && <span><Typography variant="body1" fontSize={'12px'} color={'#e12454'} textAlign={'left'}>@Message is required</Typography></span>}
                        </Grid>
                    </Grid>

                    <Button variant="" type="submit" sx={{ bgcolor: '#223a66', color: 'white', transition: 'all .3s ease', '&:hover': { bgcolor: '#e12454' } }}>{status === 'loading' ? 'Sending...' : 'Send'} <i class="fa-solid fa-paper-plane" style={{ marginLeft: '8px'}}></i></Button>

                </form>

            </Container>

        </>
    )
}