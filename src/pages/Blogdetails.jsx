import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBlogComments, fetchBlogDetails, postComment } from "../redux/Blogdetailsslice"
import { useParams } from "react-router-dom"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import { fetchrecentBlogs } from "../redux/Allblogsslice"
import { Breadcrumb } from "../components/common/Breadcrumb"
import { BottomBanner } from "../components/common/BottomBanner"
import { Button, Grid, Stack, Typography } from "@mui/material"
import { BlogdetailsSkeleton } from "../components/Skeletons"


export function Blogdetails() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { blogdetailsResponse, status } = useSelector(state => state.blogdetails)
    // const [commentsResponse, setCommentsResponse] = useState([])

    // console.log(blogdetailsResponse);

    // const { data: recentBlogsResponse } = useQuery({
    //     queryKey: ['getrecentblogs'],
    //     queryFn: () => fetchrecentBlogs()
    // })

    const queryClient = useQueryClient()

    const { data: blogCommentsResponse } = useQuery({
        queryKey: ['getBlogComments', id],
        queryFn: () => fetchBlogComments(id)
    })

    const mutation = useMutation({
        mutationFn: (payload) => postComment(payload),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['getBlogComments', id] })
    })

    // console.log(commentsResponse);

    const PostComment = (blog_id) => {
        // console.log(blog_id);
        const urlencoded = new URLSearchParams()
        urlencoded.append('blog_Id', blog_id)
        urlencoded.append('user_id', JSON.parse(localStorage.getItem('user'))?._id)
        urlencoded.append('comment', document.getElementsByName('comment')[0].value)
        mutation.mutate(urlencoded)
    }

    useEffect(() => {
        dispatch(fetchBlogDetails(id))
        // dispatch(fetchBlogComments(id))
    }, [id, dispatch])

    return (
        <>

            <Breadcrumb title={'Blog details'} />

            {
                status !== 'success' ? <BlogdetailsSkeleton /> : (
                    <Grid container maxWidth={'lg'} mx={'auto'} mt={8} >

                        <Grid item xs={12} md={12} px={2}>

                            <img src={`https://doctor-service.onrender.com/${blogdetailsResponse?.data?.image}`} alt="" width={'100%'} height={500} style={{ marginBottom: '16px' }} />
                            <Stack spacing={2}>
                                <Stack direction={'row'} justifyContent={'space-between'}>
                                    <Typography variant='body2' my={2} color={'rgb(86, 103, 135)'}>
                                        <i class="fa-solid fa-calendar-days" style={{ marginRight: '10px' }}></i>
                                        {blogdetailsResponse?.data?.createdAt?.slice(0, 10)} at 05:{Math.floor(Math.random() * 59)}PM
                                        <i class="fa-solid fa-message" style={{ margin: '0 10px' }}></i>
                                        {blogCommentsResponse?.data?.length} Comments
                                    </Typography>

                                    <Stack direction={'row'} spacing={1} my={2}>
                                        <Typography variant="body2" display={'inline'} color={'rgb(86, 103, 135)'}>Share: </Typography>
                                        <i class="fa-brands fa-facebook"></i>
                                        <i class="fa-brands fa-instagram"></i>
                                        <i class="fa-brands fa-twitter"></i>
                                        <i class="fa-brands fa-linkedin"></i>
                                    </Stack>
                                </Stack>

                                <Typography variant="h4" fontWeight={'bold'} mb={2}>{blogdetailsResponse?.data?.title}</Typography>
                                <Typography variant="body2" mb={2} color={'rgb(86, 103, 135)'}>{blogdetailsResponse?.data?.description}</Typography>


                            </Stack>



                            <Stack mt={4}>
                                <Typography variant="h6" fontWeight={'bold'} mb={4}>{blogCommentsResponse?.data?.length} Comments</Typography>

                                {
                                    blogCommentsResponse?.data?.map(item => {
                                        return (
                                            <Stack key={item._id} ml={3} py={2}>
                                                <Typography variant="body2" fontWeight={'bold'}>{item?.user_id?.name}</Typography>
                                                <Typography variant="caption" color={'rgb(86, 103, 135)'}>Posted on | {new Date(item?.createdAt )?.toUTCString('en-US')?.slice(0, 22)}</Typography>
                                                <Typography variant="body1" mt={1} color={'rgb(86, 103, 135)'}>{item?.comment}</Typography>
                                            </Stack>
                                        )
                                    })
                                }
                            </Stack>

                            <form action="" style={{ margin: '20px 0' }}>
                                <Stack>
                                    <Typography variant="h6" fontWeight={'bold'} mb={4}>Write a Comment</Typography>
                                    <textarea class="form-control mb-4" name="comment" id="comment" cols="30" rows="5" placeholder="Comment" style={{ border: '1px solid rgba(0, 0, 0, 0.134)', padding: '5px 10px', backgroundColor: '#f4f9fc', color: '#495057', fontSize: '14px', lineHeight: '1.5', resize: 'vertical' }}></textarea>
                                </Stack>
                                <Button variant="contained" sx={{ mt: { xs: 1, md: 2 }, px: 2, py: 1, borderRadius: '20px', bgcolor: '#223a66', boxShadow: 'none', transition: 'all .5s ease', '&:hover': { bgcolor: '#e12454' } }} onClick={() => PostComment(blogdetailsResponse?.data?._id)}> <Typography variant="" fontWeight={'bold'} bottomBannerTxt>Add Comment</Typography> <i className="fa-solid fa-angle-up fa-rotate-90 " style={{ marginLeft: '20px', fontWeight: 'bold' }}></i></Button>
                            </form>

                        </Grid>

                        {/* <Grid item xs={12} md={4} px={2}>

                    <Typography variant='h4' fontWeight={'bold'}>Recent Blogs</Typography>
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
                                            <Link to={`/blogdetails/${item._id}`} style={{ textDecoration: 'none', }}><Typography variant='body1' sx={{ color: 'black', fontWeight: 'bold', transition: 'all .3s ease', '&:hover': { color: '#223a66' } }}>{item?.title}</Typography></Link>
                                            <Typography variant='caption' >
                                                <i class="fa-solid fa-calendar-days" style={{ marginRight: '5px' }}></i>
                                                {item?.createdAt?.slice(0, 10)} at 05:{Math.floor(Math.random() * 59)}PM
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }
                    </Stack>
                </Grid> */}
                    </Grid>
                )
            }

            <BottomBanner />

        </>
    )
}