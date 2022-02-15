import React from "react";
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { postProfileAxios } from '../../services/profile.service';
// import { Link } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-ui/core";
import { useEffect } from "react";

var uname   = localStorage.getItem('name')
var uemail  = localStorage.getItem('email')
var ubio    = localStorage.getItem('bio')
var ucity   = localStorage.getItem('city')
var uid     = localStorage.getItem('id')

export default function FormProfile(){
    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
          name: uname,
          email: uemail,
          bio: ubio,
          city: ucity,
        }
      });

     
    const onSubmit = data => {
        console.log(data);
        const dataJSON = JSON.stringify(data);
        postProfileAxios(dataJSON);
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
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => 
              <Input {...field} type="text" style={textFieldStyle} placeholder="Full Name" />
            }
            />
            {
              errors.name?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
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
            <label htmlFor="label">City</label>
            <Controller
            name="city"
            control={control}
            rules={{ required: true }}
            render={({ field }) => 
              <Input {...field} type="text" style={textFieldStyle} placeholder="city" />
            }
            />
            {
              errors.city?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
            }
            <br/>
            <label htmlFor="label">Bio</label>
            <Controller
            name="bio"
            control={control}
            rules={{ required: true }}
            render={({ field }) => 
              <Input {...field} type="text" style={textFieldStyle} placeholder="bio" />
            }
            />
            {
              errors.bio?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
            }
           
            
            <Button type="submit" variant="contained" sx={{width:"100%" , my:2}}>Submit</Button>
            <p style={{textAlign: "right"}}>
              {/* <Link style={{ color: 'black' }} to="/register"> */}
                {/* Register Now! */}
              {/* </Link> */}
            </p>
          </form>
        </Container>
      </CardContent>
      
    </Card>
    )
}
