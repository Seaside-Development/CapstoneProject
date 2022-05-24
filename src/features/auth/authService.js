import axios from "axios";


const API_URL='https://seaside-bb.herokuapp.com/'


//login user
const login=async(userData)=>{
    const response =await axios.post(`${API_URL}`+`api/users/login`, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data

}

const logout=()=>{
    localStorage.removeItem('user')
}




const authService={
    login,
    logout
}


export default authService;