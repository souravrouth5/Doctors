import { Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom'

export function BottomBanner(){

    return(
        <>
            <div className="bottomBanner">
                <div className="bannerTxt">
                    <div className="bannerDivider"></div>
                    <Typography variant="" fontWeight={'bolder'} fontSize={'50px'} className="bottomBannerTxt">We are pleased to offer <span style={{ color: '#1462f3' }} >you the chance to have the healthy life</span><br />
                    </Typography>
                    {/* <Button variant="contained" sx={{ py: '10px', px: '20px', mt: 2, borderRadius: '30px', bgcolor: '#1462f3', transition: 'all .2s ease', '&:hover': { scale: '1.1' } }}>
                            <Typography variant="body1" fontWeight={'bold'} fontSize={'12px'}>
                                Book Appointment
                            </Typography>
                            <i className="fa-solid fa-angle-up fa-rotate-90 " style={{ marginLeft: '20px', fontWeight: 'bold' }}></i>
                        </Button> */}
                    <Link to={`/departments`}><Button variant="contained" sx={{ mt: { xs: 1, md: 4 }, px: 2, py: 1, borderRadius: '30px', bgcolor: '#223a66', boxShadow: 'none', transition: 'all .5s ease', '&:hover': { bgcolor: '#e12454' } }}> <Typography variant="" fontWeight={'bold'} bottomBannerTxt>Book Appointment</Typography> <i className="fa-solid fa-angle-up fa-rotate-90 " style={{ marginLeft: '20px', fontWeight: 'bold' }}></i></Button></Link>
                </div>
            </div>
        </>
    )
}