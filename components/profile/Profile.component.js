import React from "react";
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {postLoginAxios} from '../../services/auth.service';
// import { Link } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-ui/core";
import { useEffect } from "react";

export default function FormProfile(){
    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
          username: '',
          password: '',
          fullname:'',
          email: ''
        }
      });

      useEffect(() => {
        // Perform localStorage action
        const item = localStorage.getItem('name')
        console.log(item)
      }, [])
    const onSubmit = data => {
        console.log(data);
        const dataJSON = JSON.stringify(data);
        postLoginAxios(dataJSON);
    };

    const gridFormStyle = {
        padding: "50px"
    };
    
    const textFieldStyle = {
        marginBottom: "20px",
        border: 1, 
        px: 1,
        borderRadius: 1,
        width: "100%"
    };
    
    return(
    <Card sx={{ minWidth: 275 }} >
      <CardContent style={gridFormStyle}>
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="label">Full Name</label>
            <Controller
            name="fullname"
            control={control}
            rules={{ required: true }}
            render={({ field }) => 
              <Input {...field} type="text" style={textFieldStyle} placeholder="Full Name" />
            }
            />
            {
              errors.fullname?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
            }
            <br/>
            <label htmlFor="label">Email</label>
            <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => 
              <Input {...field} type="text" style={textFieldStyle} placeholder="Email" />
            }
            />
            {
              errors.email?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
            }
            <br/>
            <label htmlFor="label">Username</label>
            <Controller
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field }) => 
              <Input {...field} type="text" style={textFieldStyle} placeholder="Username" />
            }
            />
            {
              errors.username?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
            }
            <br/>
            <label htmlFor="label">Password</label>
            <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => 
              <Input {...field} type="password" style={textFieldStyle} placeholder="Password" />
            }
            />
            {
              errors.password?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
            }
            <br/>
            
            <Button type="submit" variant="contained" sx={{width:"100%" , my:2}}>Submit</Button>
            <p style={{textAlign: "right"}}>
              {/* <Link style={{ color: 'black' }} to="/register"> */}
                Register Now!
              {/* </Link> */}
            </p>
          </form>
        </Container>
      </CardContent>
      
    </Card>
    )
}
