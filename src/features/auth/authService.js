import axios from 'axios'

//const API_URL = '/api/users/'
const   API_URL = 'https://seaside-bb.herokuapp.com/'

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}api/users/register`, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(`https://seaside-bb.herokuapp.com/api/users/login`, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
