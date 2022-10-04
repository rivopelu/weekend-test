import axios from "axios";
import swal from "sweetalert";
export const endpoint = process.env.REACT_APP_BASE_ENDPOINT

export const requestGet = (url) => {
    return axios.get(endpoint + url)
}

export const createError = (err, title) => {
    const message = err.response.data.message
    const titleMessage = () => {
        if (title) {
            return title
        } else {
            return "Error"
        }
    }
    return swal(titleMessage(), message, "error")
}