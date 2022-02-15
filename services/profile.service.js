import Axios from 'axios';
import {baseURL} from './config.service';


export const postProfileAxios = async (bodyReq) => {
  try {
    Axios({
      method: 'put',
      url: `${baseURL}/players/${localStorage.getItem('id')}`,
      data: bodyReq,
      headers: {"Content-Type": "application/json"}
    })
    .then(function(response){
      console.log(response.data)
      return alert("Update Profile Berhasil.")
      Axios({
        method: 'get',
        url: `${baseURL}/players/${localStorage.getItem('id')}`,
        data: bodyReq,
        headers: {"Content-Type": "application/json"}
      })
      .then(function(response){
        localStorage.setItem('bio', response.data.bio);
        localStorage.setItem('city', response.data.city);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('name', response.data.name);
       
      }).catch(function (error) {
        alert(error.message);
      });

      window.location = '/profile'
    }).catch(function (error) {
      alert(error.message);
    });

  } catch (error) {
    
  }
}