import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
import { Container, Typography } from '@mui/material';

export default function Gallery() {

    const [randomImg, setRandomImg] = React.useState([])

    React.useEffect(() => {
        ( async () => {
            const res = await axios.get(`https://api.pexels.com/v1/search?query=hospital&per_page=50`, {
                headers: {
                    'Authorization': 'arRDxiNwlGX2seIFxstQK29BqhoOvyqKuBo6ONkRd0ESeHrACV6sd234'
                }
            })

            setRandomImg(res?.data?.photos)
        })()
    }, [])

    console.log(randomImg);

    return (
        <>
        <Container maxWidth='lg' sx={{my: 8}}>
                <Typography variant="h4" textAlign={'center'} color={'#223a66'} fontWeight={'bolder'}>Our Gallery</Typography>
                <div className="divider"></div>
                <Box sx={{ width: '100%', height: '80vh', mx: 'auto', overflowY: 'scroll', scale: '0.9' }}>
                    <ImageList variant="masonry" cols={3} gap={16}>
                        {randomImg?.map((item) => (
                            <ImageListItem key={item?.src?.original}>
                                <img
                                    srcSet={`${item?.src?.original}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item?.src?.original}?w=248&fit=crop&auto=format`}
                                    alt={item?.alt}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
        </Container>
        </>
    );
}

// const itemData = [
//     {
//         img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//         title: 'Bed',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//         title: 'Books',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//         title: 'Sink',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//         title: 'Kitchen',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//         title: 'Blinds',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//         title: 'Chairs',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//         title: 'Laptop',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//         title: 'Doors',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//         title: 'Coffee',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//         title: 'Storage',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//         title: 'Candle',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//         title: 'Coffee table',
//     },
// ];
