import { Box, Stack } from '@mui/material';
import './HeadContact.css';

export function HeadContact(){

    return(
        <>
        <Box sx={{ display: { xs: 'none', md: 'block'}}}>
                <div className="headContact">
                    <Stack spacing={2} direction={'row'}>
                        <p><i className="fa-solid fa-envelope" style={{ verticalAlign: 'middle', marginRight: '5px' }}></i>support@doctor.com</p>
                        <p><i className="fa-solid fa-location-dot" style={{ verticalAlign: 'middle', marginRight: '5px' }}></i>Sector V, Salt Lake, Kolkata, India</p>
                    </Stack>
                    <div className="subhdcontact">
                        <i className="fa-solid fa-phone" style={{ verticalAlign: 'middle', marginRight: '5px' }}></i>Call Us: <span style={{ fontWeight: 'bold' }}>+917890123456</span>
                    </div>
                </div>
        </Box>
        </>
    )
}