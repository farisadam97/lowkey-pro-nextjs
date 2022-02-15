import Axios from 'axios';
import {baseURL} from './config.service';

export const postLoginAxios = async (bodyReq) => {
    try{
        Axios({
            method: 'post',
            url: `${baseURL}/login`,
            data: bodyReq,
            headers: {"Content-Type": "application/json"}
          })
          .then(function (response) {
            console.log(response.data);
            localStorage.setItem('id', response.data.id);
            localStorage.setItem('bio', response.data.bio);
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('password', response.data.password);
            localStorage.setItem('city', response.data.city);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('total_score', response.data.total_score);
            localStorage.setItem('status', "Login Success");
            window.location = "/home-page/";
          })
          .catch(function (error) {
            alert(error.message);
          });
    }catch(error){
        console.log(error)
    }
}

export const postRegisterAxios = async (bodyReq) => {
  try {
    Axios({
      method: 'post',
      url: `${baseURL}/players`,
      data: bodyReq,
      headers: {"Content-Type": "application/json"}
    })
    .then(function(response){
      console.log(response.data)
      alert("Akun anda sudah terdaftar, silahkan login.")
      window.location = '/login'
    }).catch(function (error) {
      alert(error.message);
    });

  } catch (error) {
    
  }
}
