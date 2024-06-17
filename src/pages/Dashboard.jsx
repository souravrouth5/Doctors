import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircleIcon from '@mui/icons-material/Circle';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getDashboard } from '../redux/Auth';
import { Box, Container, Grid, Stack, Typography } from '@mui/material'


export function Dashboard() {

    const dispatch = useDispatch()
    const { dashboardResponse } = useSelector(state => state.auth)
    const id = JSON.parse(localStorage.getItem('user'))?._id
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(id);

    console.log(dashboardResponse);

    useEffect(() => {
        dispatch(getDashboard(id))
    }, [id, dispatch])

    return (
        <>
            <Container maxWidth='md' disableGutters sx={{ my: 8, }}>
                <Grid container border={'1px solid rgba(0,0,0,0.3)'} borderRadius={'10px'} overflow={'hidden'}>
                    <Grid item xs={12} md={6} py={4} bgcolor={'#223a66'} color={'white'} textAlign={'center'}>
                        <Stack spacing={1}>
                            <Typography variant='h6' fontWeight={'bold'}>{user?.name}</Typography>
                            <Typography variant='caption'>Email: {user?.email}</Typography><br />
                            <Typography variant='caption'>Contact: {user?.phone}</Typography><br />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6} py={4} px={4} bgcolor={''} color={'black'} textAlign={''}>
                        <Typography variant='body2' fontWeight={'bold'}>Information</Typography>
                        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(0,0,0,0.2)', marginTop: 10, marginBottom: 20 }}></div>
                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Typography variant='body2' fontWeight={'bold'}>Email</Typography>
                            <Typography variant='body2' fontWeight={'bold'}>Phone</Typography>
                        </Stack>
                        <Stack direction={'row'} mt={2} justifyContent={'space-between'}>
                            <Typography variant='caption' >{user?.email}</Typography>
                            <Typography variant='caption' >{user?.phone}</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth='lg' disableGutters sx={{ my: 8 }}>
                <Box >
                    <Typography variant='h5' fontWeight={'bold'} bgcolor={'#223a66'} color={'white'} p={2}>Your Appointments</Typography>
                </Box>

                <TableContainer component={Paper} sx={{ px: 4, mb: 4, boxSizing: 'border-box', boxShadow: 'none' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ fontWeight: 'bold' }}>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '14px' }}>#</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '14px' }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '14px' }}>Date</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '14px' }}>Message</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '14px' }}>Department</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '14px' }}>Doctor's Pic</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '14px' }}>Doctor's name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '14px' }}>Time</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '14px' }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dashboardResponse?.data?.map((row, index) => {
                                return (
                                    <TableRow
                                        hover
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="" sx={{ fontSize: '12px' }}>{index + 1}</TableCell>
                                        <TableCell align="" sx={{ fontSize: '12px' }}>{user?.name}</TableCell>
                                        <TableCell align="" sx={{ fontSize: '12px' }}>{row?.createdAt?.slice(0, 10)}</TableCell>
                                        <TableCell align="" sx={{ fontSize: '12px' }}>{row?.message}</TableCell>
                                        <TableCell align="" sx={{ fontSize: '12px' }}>{row?.department_id?.departmentName}</TableCell>
                                        <TableCell align="" sx={{ fontSize: '12px' }}><img src={`https://doctor-service.onrender.com/${row?.doctor_id?.image}`} alt="" height={50} width={50} /></TableCell>
                                        <TableCell align="" sx={{ fontSize: '12px' }}>{row?.doctor_id?.name}</TableCell>
                                        <TableCell align="" sx={{ fontSize: '12px' }}>{row?.doctor_id?.departure_time}</TableCell>
                                        <TableCell align="" sx={{ fontSize: '12px' }}>{row?.isPending === false ? <> <CircleIcon color='error' sx={{ fontSize: '16px', verticalAlign: 'middle' }} /> Pending </> : <> <CircleIcon color='success' sx={{ fontSize: '16px', verticalAlign: 'middle' }} /> Active </>}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}