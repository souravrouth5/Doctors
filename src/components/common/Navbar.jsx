import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkToken, logout } from '../../redux/Auth';
import { stringAvatar } from './Avatar';
import { Slide, useScrollTrigger } from '@mui/material';

function HideOnScroll({children}) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}


function Navbar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { isLoggedIn } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const initialPages = ['Home', 'Departments', 'Doctors', 'Blogs', 'Contact', 'Register', 'Login', ];
    const protectedPages = ['Home', 'Departments', 'Doctors', 'Blogs', 'Contact', 'Dashboard', 'Logout']
    const initialSettings = ['Login', 'Register'];
    const Protectedsettings = ['Dashboard', 'Logout'];

    let pages;
    isLoggedIn ? pages = protectedPages : pages = initialPages;

    let settings;
    isLoggedIn ? settings = Protectedsettings : settings = initialSettings;

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    

    console.log(isLoggedIn);
    const username = JSON.parse(localStorage.getItem('user'))?.name ?? 'Guest'

    React.useEffect(()=>{
        dispatch(checkToken())
    }, [dispatch])

    return (
        <HideOnScroll {...props}>

        <AppBar position="sticky" sx={{ bgcolor: 'white',py: '10px', px: {sm: '', md: '100px'}, boxShadow: 'none', backdropFilter: 'blur(2px)' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <img src={'/img/doctor.png'} alt="" width={'50px'} />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        <span style={{ color: '#1462F3' }}>D</span>OCTOR
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }, color: 'black'
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"><NavLink to={`/${page === 'Home' || page === 'Logout' ? '' : page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }} onClick={() => { page === 'Logout' && dispatch(logout()) }}>{page}</NavLink></Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                        <img src={'/img/doctor.png'} alt="" width={'30px'} />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        <span style={{ color: '#1462F3' }}>D</span>OCTOR
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', fontWeight: 'bold', display: 'block' }}
                            >
                                <NavLink to={`/${page === 'Home' || page === 'Logout' ? '' : page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'black', }} onClick={() => { page === 'Logout' && dispatch(logout()) }}>{page}</NavLink>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { md: 'none', xs: 'block' } }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar {...stringAvatar(username)} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    {/* <Typography textAlign="center" style={{ textDecoration: 'none', color: 'black' }}>{setting}</Typography> */}
                                    <Typography textAlign="center"><NavLink to={`/${setting === 'Home' || setting === 'Logout' ? '' : setting.toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }} onClick={() => { setting === 'Logout' && dispatch(logout()) }}>{setting}</NavLink></Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        
        </HideOnScroll>
    );
}
export default Navbar;