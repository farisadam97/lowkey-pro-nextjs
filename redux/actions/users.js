import Axios from "axios"
import {baseURL} from '../../services/config.service';
import { GET_USERS } from "../constants/users"

export const getUser = (payload) => {
    return {
        type: GET_USERS,
        payload
    }
}

export const getUserAction = () => async (dispatch) => {
    const {data} = await Axios.get(`${baseURL}/players`)

    const payload = data.message.map(val => {
        return {
            id: val.id,
            name: val.name,
            email: val.email,
            username: val.username,
            city: val.city,
            total_score: val.total_score
        }
    })

    return dispatch(
        getUser(payload)
    )
}