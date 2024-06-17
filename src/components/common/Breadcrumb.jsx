import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export function Breadcrumb({title}){

    return(

        <>
        <div className="breadcrumb">
                <Link to={'/'} style={{ textDecoration: 'none', }}><Typography sx={{ color: 'white', marginRight: '5px', transition: 'all .3s ease', '&:hover': { color: '#e12454' } }}>Home</Typography></Link> {'\u27A4'} <Typography style={{ textDecoration: 'none', color: 'white', marginLeft: '5px', transition: 'all .3s ease', '&:hover': { color: '#1151ca' } }}>{title}</Typography>
        </div>
        </>
    )
}