import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllBlogs, fetchrecentBlogs, searchBlog } from '../redux/Allblogsslice';
import { Breadcrumb } from '../components/common/Breadcrumb'
import { BottomBanner } from '../components/common/BottomBanner'
import { Box, Button, Grid, Pagination, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom';
import { BlogsSkeleton } from '../components/Skeletons';

export function Blogs() {

    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const [searchValue, setSearchvalue] = useState(false)
    const { allblogsResponse, searchblogResponse, status } = useSelector(state => state.allblogs)

    // console.log(allblogsResponse);
    console.log(searchblogResponse);

    const { data: recentBlogsResponse } = useQuery({
        queryKey: ['getrecentblogs'],
        queryFn: () => fetchrecentBlogs()
    })

    // console.log(recentBlogsResponse);

    const handleChange = (e) => {
        setSearchvalue(e.target.value)
        dispatch(searchBlog(e.target.value))
    }

    useEffect(() => {
        dispatch(fetchAllBlogs())
    }, [dispatch])

    return (
        <>
            <Breadcrumb title={'Blogs'} />

            {
                status !== 'success' ? <BlogsSkeleton size={2} /> : (
                    <Grid container maxWidth={'lg'} mx={'auto'} mt={8}>

                        <Grid item xs={12} md={8} px={2}>

                            <Grid container>

                                {
                                    allblogsResponse?.data?.slice((page - 1) * 2, (page * 2))?.map(item => {
                                        return (
                                            <Grid item xs={12} key={item._id} pb={4}>
                                                <div className="imgBox2">
                                                    <img src={`https://doctor-service.onrender.com/${item.image}`} alt="" height={400} width={'100%'} />
                                                </div>
                                                <Stack spacing={2} >
                                                    <Typography variant='caption' py={2} color={'rgb(86, 103, 135)'}>
                                                        <i class="fa-solid fa-calendar-days" style={{ marginRight: '5px' }}></i>
                                                        {item?.createdAt?.slice(0, 10)} at 05:{Math.floor(Math.random() * 59)}PM
                                                    </Typography>

                                                    <Typography variant='h5' fontWeight={'bold'}>{item?.title}</Typography>
                                                    <Typography variant='body2' color={'rgb(86, 103, 135)'}>{item?.description?.slice(0, 100)}...</Typography>
                                                </Stack>
                                                <Link to={`/blogdetails/${item._id}`}><Button variant="contained" sx={{ mt: { xs: 1, md: 2 }, px: 2, py: 1, borderRadius: '20px', bgcolor: '#223a66', boxShadow: 'none', transition: 'all .5s ease', '&:hover': { bgcolor: '#e12454' } }}> <Typography variant="" fontWeight={'bold'} bottomBannerTxt>See Blog</Typography> <i className="fa-solid fa-angle-up fa-rotate-90 " style={{ marginLeft: '20px', fontWeight: 'bold' }}></i></Button></Link>

                                            </Grid>
                                        )
                                    })
                                }

                                <Pagination count={Math.ceil(allblogsResponse?.data?.length / 2)} variant="outlined" shape="rounded" page={page} onChange={(e, value) => setPage(value)} sx={{ mx: 'auto', my: 4 }} />

                            </Grid>

                        </Grid>
                        <Grid item xs={12} md={4} px={2}>

                            <Typography variant='h5' fontWeight={'bold'}>Search Blogs</Typography>
                            <div className="bannerDivider"></div>
                            <input type="text" placeholder='Search' style={{ minWidth: '100%', height: '50px', padding: '0 5px', margin: '15px 0 30px', fontSize: '12px', boxSizing: 'border-box' }} onChange={handleChange} />
                            <Box mb={4}>
                                {
                                    searchblogResponse && (
                                        <>
                                            {
                                                searchValue?.length > 0 && (
                                                    <>
                                                        <Typography variant='h5' fontWeight={'bold'}>{searchblogResponse?.count} Blogs Found</Typography>
                                                        <div className="bannerDivider"></div>
                                                        <span>{searchblogResponse?.count === 0 && <Typography variant='caption' color='#e12454' fontWeight={'bold'}>No blog found!</Typography>}</span>
                                                    </>
                                                )
                                            }
                                            {
                                                searchblogResponse?.count > 0 && searchblogResponse?.data?.map(item => {
                                                    return (
                                                        <Grid container key={item._id} >
                                                            <Grid item xs={3}>
                                                                <img src={`https://doctor-service.onrender.com/${item?.image}`} alt="" height={75} width={'100%'} />
                                                            </Grid>
                                                            <Grid item xs={9} pl={2}>
                                                                <Link to={`/blogdetails/${item._id}`} style={{ textDecoration: 'none', }}><Typography variant='body1' sx={{ color: '#223a66', fontWeight: 'bold', transition: 'all .3s ease', '&:hover': { color: '#e12454' } }}>{item?.title}</Typography></Link>
                                                                <Typography variant='caption' color={'rgb(86, 103, 135)'}>
                                                                    <i class="fa-solid fa-calendar-days" style={{ marginRight: '5px' }}></i>
                                                                    {item?.createdAt?.slice(0, 10)} at 05:{Math.floor(Math.random() * 59)}PM
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    )
                                                })
                                            }
                                        </>
                                    )
                                }
                            </Box>



                            <Typography variant='h5' fontWeight={'bold'}>Recent Blogs</Typography>
                            <div className="bannerDivider"></div>
                            <Stack spacing={2}>
                                {
                                    recentBlogsResponse?.data?.map(item => {
                                        return (
                                            <Grid container key={item._id}>
                                                <Grid item xs={3}>
                                                    <img src={`https://doctor-service.onrender.com/${item?.image}`} alt="" height={75} width={'100%'} />
                                                </Grid>
                                                <Grid item xs={9} pl={2}>
                                                    <Link to={`/blogdetails/${item._id}`} style={{ textDecoration: 'none', }}><Typography variant='body1' sx={{ color: '#223a66', fontWeight: 'bold', transition: 'all .3s ease', '&:hover': { color: '#e12454' } }}>{item?.title}</Typography></Link>
                                                    <Typography variant='caption' color={'rgb(86, 103, 135)'}>
                                                        <i class="fa-solid fa-calendar-days" style={{ marginRight: '5px' }}></i>
                                                        {item?.createdAt?.slice(0, 10)} at 05:{Math.floor(Math.random() * 59)}PM
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        )
                                    })
                                }
                            </Stack>
                        </Grid>
                    </Grid>
                )
            }

            <BottomBanner />
        </>
    )
}