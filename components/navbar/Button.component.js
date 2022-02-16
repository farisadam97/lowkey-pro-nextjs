import * as React from 'react';
import Button from '@mui/material/Button';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { incrementCounterAction } from '../../redux/actions/counters'
import Link from 'next/link';

export const ButtonNavbar = () =>{
	
	const dispatch = useDispatch()
    const counters = useSelector(state => state.counters);

    const navbarReducer = useSelector(store => store.navbar);

    console.log(navbarReducer);

	/* testing redux add score
    const handleChange = (e) => {
		dispatch(
			incrementCounterAction()
		)
		localStorage.setItem('total_score', counters.value+1)
    }
	*/
	
    const onLogoutClick = (e) => {
        e.preventDefault();
        window.localStorage.clear();
        alert("Anda telah logout");
        window.location = "/login/";
    }
	
	const isUserLogin = ""
	var name = ""
	
	if (typeof window !== 'undefined') {
		isUserLogin = navbarReducer.status;
    // isUserLogin = localStorage.getItem('status');
		name = localStorage.getItem('name');
	}
    console.log(isUserLogin)
    return (
        <>
            {
              isUserLogin === "Login Success" ? 
              (
                <div>
                    {/* testing redux add score
                      <a onClick={handleChange}>Testing redux add score</a>
                    */}

                <Link href="/profile" style={{ textDecoration: 'none', color: 'black'}}>
                  <a style={{ fontFamily: 'Roboto,Helvetica,Arial,sans-serif', fontSize: '0.875rem', lineHeight: '1.75', textTransform: 'uppercase', textDecoration: 'none', padding: '4px 15px' }}><span style={{ padding: '2px 6px'}}>{name}</span> <span style={{ backgroundColor: '#55daab', color: 'white', borderRadius: '3px', padding: '2px 6px'}}>Score: {counters.value}</span></a> 
                </Link>
                

                <Button variant="outlined" style={{ borderRadius: "90px" }}>
                  <Link href="/home-page" style={{ textDecoration: 'none', color: 'black'}}>
                   <a> Dashboard</a>
                  </Link>
                </Button>
    
                <Button variant="outlined" style={{ borderRadius: "90px" }}>
                  <Link href="/profile" style={{ textDecoration: 'none', color: 'black'}}>
                   <a> My Profile</a>
                  </Link>
                </Button>
                
                <Button variant="outlined" color="error" style={{ borderRadius: "90px" }}>
                  <Link href="/login" onClick={onLogoutClick} style={{ textDecoration: 'none', color: 'black'}}>
                    <a onClick={onLogoutClick}>Logout</a>
                  </Link>
                </Button>
					
              </div>
              ) : (
                <div>
                  <Button variant="outlined" style={{ borderRadius: "90px" }}>
                    <Link href="/register" style={{ textDecoration: 'none', color: 'black'}}>
                      <a>Sign Up Free</a>
                    </Link>
                  </Button>
                  <Button variant="outlined" color="success" style={{ borderRadius: "90px" }}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} href="/login">
                      <a>Login</a>
                    </Link>
                  </Button>
                </div>
              ) 
            }
        </>
    )
}