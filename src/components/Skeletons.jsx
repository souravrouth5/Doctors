import { Box, Card, Grid, Skeleton, Stack, } from "@mui/material";


export function BreadcrumbSkeleton() {

    return (
        <>
            <Box sx={{ height: '40vh' }}></Box>
        </>
    )
}

export function DepartmentsSkeleton({ size }) {

    return (
        <>
            {
                Array(size).fill(1).map((_, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} p={2} key={index}>
                            <Skeleton variant="rectangular" height={250} width={'100%'} />
                            <Stack spacing={2}>
                                <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '.75rem' }} />
                            </Stack>
                        </Grid>
                    )
                })
            }
        </>
    )
}

export function DoctorsSkeleton({ size }) {
    return (
        Array(size).fill(1).map((_, index) => {
            return (
                <Grid item xs={12} sm={6} md={3} px={4} py={2} key={index}>
                    <Card sx={{ borderRadius: '10px', boxShadow: 'none' }}>
                        <Skeleton variant="Rectangular" height={300} />
                        <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                        <Skeleton variant="text" sx={{ fontSize: '1.5rem', }} />
                    </Card>
                </Grid>
            )
        })
    )
}

export function BlogsSkeleton({ size }) {
    return (
        <>
            <Grid container maxWidth={'lg'} mx={'auto'} mt={8}>
                <Grid item xs={12} md={8} px={2}>

                    <Grid container>

                        {
                            Array(size).fill(1).map((_, index) => {
                                return (
                                    <Grid item xs={12} pb={4} key={index}>
                                        <Skeleton variant="rectangular" height={400} />
                                        <Stack spacing={2} >
                                            <Skeleton variant="text" sx={{ fontSize: '.75rem', paddingBottom: '16px' }} />

                                            <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                                            <Skeleton variant="text" sx={{ fontSize: '.75rem' }} />
                                        </Stack>
                                        <Skeleton variant="text" sx={{ fontSize: '4rem' }} />
                                    </Grid>
                                )
                            })
                        }

                        <Skeleton variant="rectangular" height={30} width={200} sx={{ m: '10px auto' }} />

                    </Grid>

                </Grid>
                <Grid item xs={12} md={4} px={2}>

                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                    <Skeleton variant="rectangular" height={5} width={'20%'} sx={{ mx: '' }} />
                    <Skeleton variant="rectangular" height={50} sx={{ minWidth: '100%', margin: '25px 0 50px', }} />
                    {/* <Box mb={4}>
                        <Grid container  >
                            <Grid item xs={3}>
                                <Skeleton variant="rectangular" height={75} />
                            </Grid>
                            <Grid item xs={9} pl={2}>
                                <Skeleton variant="text" sx={{ fontSize: '0.875rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '.75rem' }} />
                            </Grid>
                        </Grid>
                    </Box> */}



                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                    <Skeleton variant="rectangular" height={5} width={'20%'} sx={{ margin: '15px 0' }} />
                    <Stack spacing={2}>
                        <Grid container>
                            <Grid item xs={3}>
                                <Skeleton variant="rectangular" height={75} />
                            </Grid>
                            <Grid item xs={9} pl={2}>
                                <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '.75rem' }} />
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={3}>
                                <Skeleton variant="rectangular" height={75} />
                            </Grid>
                            <Grid item xs={9} pl={2}>
                                <Skeleton variant="rounded" height={40} />
                                <Skeleton variant="text" sx={{ fontSize: '.75rem' }} />
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={3}>
                                <Skeleton variant="rectangular" height={75} />
                            </Grid>
                            <Grid item xs={9} pl={2}>
                                <Skeleton variant="rounded" height={40} />
                                <Skeleton variant="text" sx={{ fontSize: '.75rem' }} />
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={3}>
                                <Skeleton variant="rectangular" height={75} />
                            </Grid>
                            <Grid item xs={9} pl={2}>
                                <Skeleton variant="rounded" height={40} />
                                <Skeleton variant="text" sx={{ fontSize: '.75rem' }} />
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={3}>
                                <Skeleton variant="rectangular" height={75} />
                            </Grid>
                            <Grid item xs={9} pl={2}>
                                <Skeleton variant="rounded" height={40} />
                                <Skeleton variant="text" sx={{ fontSize: '.75rem' }} />
                            </Grid>
                        </Grid>

                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export function DoctordetailsSkeleton() {

    return (
        <>
            <Grid container maxWidth={'lg'} mx={'auto'} my={'100px'}>

                <Grid item xs={12} md={4} px={1}>
                    <Skeleton variant="rectangular" height={450} />
                    <Skeleton variant="text" width={'50%'} sx={{ fontSize: '3rem' }} />
                    <Skeleton variant="text" width={'50%'} sx={{ fontSize: '.875rem' }} />
                    <Stack direction={'row'} spacing={2} mt={1}>
                        <Skeleton variant="circular" height={20} width={20} />
                        <Skeleton variant="circular" height={20} width={20} />
                        <Skeleton variant="circular" height={20} width={20} />
                        <Skeleton variant="circular" height={20} width={20} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={8} px={1}>
                    <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                    <Skeleton variant="rectangular" height={5} width={'20%'} sx={{ margin: '15px 0' }} />
                    <Skeleton variant="rounded" height={150} sx={{ fontSize: '1rem' }} /> <br />
                    <Skeleton variant="rounded" height={50} width={'40%'} sx={{ fontSize: '2rem' }} />

                </Grid>
                <Grid item xs={12} mt={8}>
                    <Grid container >
                        <Grid item xs={12} md={4} p={2}>
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            <Skeleton variant="rectangular" height={5} width={'20%'} sx={{ margin: '15px 0' }} />
                            <Skeleton variant="rounded" height={90} sx={{ fontSize: '0.75rem' }} />
                        </Grid>
                        <Grid item xs={12} md={4} p={2}>
                            <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                            <Stack spacing={1}>
                                <Skeleton variant="text" sx={{ fontSize: '0.75rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '0.75rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '0.75rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '0.75rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '0.75rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '0.75rem' }} />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4} bgcolor={'rgb(244, 249, 252)'} px={2} py={1}>
                            <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                            <Skeleton variant="rectangular" height={5} width={'20%'} sx={{ margin: '15px 0' }} />
                            <Stack spacing={2}>
                                <Skeleton variant="rounded" height={7} /><br />
                                <Skeleton variant="rounded" height={7} /><br />

                                <Stack >
                                    <Skeleton variant="text" sx={{ fontSize: '0.75rem' }} />
                                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export function DepartmentdoctorsSkeleton({ size }) {

    return (
        <Grid container maxWidth={'lg'} px={4} mx={'auto'}>
            {Array(size).fill(1).map((_, index) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={index} p={4}>
                        <Skeleton variant="rectangular" height={280} />
                        <Stack spacing={1} px={2}>
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            <Skeleton variant="rounded" height={70} sx={{ fontSize: '.875rem' }} />
                            <Skeleton variant="rectangular" height={50} sx={{ my: 1 }} />
                        </Stack>

                    </Grid>
                )
            })}
        </Grid>
    )
}

export function BlogdetailsSkeleton() {

    return (
        <>
            <Grid container maxWidth={'lg'} mx={'auto'} mt={8} >

                <Grid item xs={12} md={12} px={2}>

                    <Skeleton variant="rectangular" height={500} />
                    <Stack spacing={2}>
                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Skeleton variant="text" width={300} sx={{ fontSize: '2rem' }} />

                            <Stack direction={'row'} spacing={1} my={2}>
                                <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }} />
                                <Skeleton variant="circular" height={20} width={20} sx={{ fontSize: '2rem' }} />
                                <Skeleton variant="circular" height={20} width={20} sx={{ fontSize: '2rem' }} />
                                <Skeleton variant="circular" height={20} width={20} sx={{ fontSize: '2rem' }} />
                                <Skeleton variant="circular" height={20} width={20} sx={{ fontSize: '2rem' }} />
                            </Stack>
                        </Stack>

                        <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                        <Skeleton variant="rouned" height={60} sx={{ fontSize: '.875rem' }} /><br />


                    </Stack>



                    {/* <Stack mt={4}>
                        <Typography variant="h6" fontWeight={'bold'} mb={4}>{blogCommentsResponse?.data?.length} Comments</Typography>

                        {
                            blogCommentsResponse?.data?.map(item => {
                                return (
                                    <Stack key={item._id} ml={3} py={2}>
                                        <Typography variant="body2" fontWeight={'bold'}>{item?.user_id?.name}</Typography>
                                        <Typography variant="caption" color={'rgb(86, 103, 135)'}>Posted on | {new Date(item?.createdAt)?.toUTCString('en-US')?.slice(0, 22)}</Typography>
                                        <Typography variant="body1" mt={1} color={'rgb(86, 103, 135)'}>{item?.comment}</Typography>
                                    </Stack>
                                )
                            })
                        }
                    </Stack> */}

                    {/* <form action="" style={{ margin: '20px 0' }}>
                        <Stack>
                            <Typography variant="h6" fontWeight={'bold'} mb={4}>Write a Comment</Typography>
                            <textarea class="form-control mb-4" name="comment" id="comment" cols="30" rows="5" placeholder="Comment" style={{ border: 'none' }}></textarea>
                        </Stack>
                        <Button variant="contained" sx={{ mt: { xs: 1, md: 2 }, px: 2, py: 1, borderRadius: '20px', bgcolor: '#223a66', boxShadow: 'none', transition: 'all .5s ease', '&:hover': { bgcolor: '#e12454' } }} onClick={() => PostComment(blogdetailsResponse?.data?._id)}> <Typography variant="" fontWeight={'bold'} bottomBannerTxt>Add Comment</Typography> <i className="fa-solid fa-angle-up fa-rotate-90 " style={{ marginLeft: '20px', fontWeight: 'bold' }}></i></Button>
                    </form> */}

                </Grid>
            </Grid>
        </>
    )
}