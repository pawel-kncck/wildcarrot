import { Avatar, makeStyles, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import AppsIcon from '@material-ui/icons/Apps'
import { AuthContext } from '../contexts/AuthContext'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        display: 'flex',
        width: '100%',
        height: '48px',
        background: theme.palette.primary,
        boxShadow: theme.shadows[2]
    },
    brand: {
        flexGrow: 1
    }
}))

const NavBar = () => {
    const classes = useStyles();
    const { user } = useContext(AuthContext)

    return (
        <div className={classes.root}>
            <AppsIcon />
            <div className={classes.brand}>
                <Typography variant='h3'>{process.env.REACT_APP_APP_NAME}</Typography>
            </div>
            <Avatar>P</Avatar>
        </div>
    )
}

export default NavBar;