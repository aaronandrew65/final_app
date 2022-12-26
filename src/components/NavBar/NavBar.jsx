import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import React from 'react';
import { makeStyles } from "@material-ui/core";
import '../../App.css'

const useStyles = makeStyles({
    list_item: {
        textDecoration: 'none',
        color: 'white',
        fontFamily: 'Times new roman',
    },
})

export const NavBar = () => {

    const classes = useStyles();

  return (
    <>
    <div className='navbar'>
            <ul>
                <li>
                    <Button>
                        <Link to='/signin' className={`${classes.list_item}`}>Sign In</Link>
                    </Button>
                </li>
                <li>
                    <Button>
                        <Link to='/movies2watch' className={`${classes.list_item}`}>Movies To Watch</Link>
                    </Button>
                </li>
                <li>
                    <Button>
                        <Link to='/About' className={`${classes.list_item}`}>About Us</Link>
                    </Button>
                </li>
            </ul>      
    </div>
    </>
  )
}