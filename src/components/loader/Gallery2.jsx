import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import { Box, ImageList, ImageListItem } from '@mui/material';

// ....

// className "owl-theme" is optional
export function Gallery2() {

    const [randomImg, setRandomImg] = React.useState([])

    React.useEffect(() => {
        (async () => {
            const res = await axios.get(`https://api.pexels.com/v1/search?query=hospital&per_page=50`, {
                headers: {
                    'Authorization': 'arRDxiNwlGX2seIFxstQK29BqhoOvyqKuBo6ONkRd0ESeHrACV6sd234'
                }
            })

            setRandomImg(res?.data?.photos)
        })()
    }, [])

    console.log(randomImg);

    const options = {
        items: 3,
        nav: true,
        rewind: true,
        autoplay: true,
        autoplayTimeout: 1000,
        fluidSpeed: true,
        // autoplaySpeed: true,
        slideTransition: 'linear',
        autoplayHoverPause: true,
        vertical: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    };

    return (
        <>
            <Box sx={{ width: '100%', height: '80vh', mx: 'auto', overflowY: 'scroll', scale: '0.9' }}>
                <ImageList variant="masonry" cols={3} gap={16}>
                    <OwlCarousel className='owl-theme' {...options}>
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
                    </OwlCarousel>;
                </ImageList>
            </Box>
        </>
    )
}