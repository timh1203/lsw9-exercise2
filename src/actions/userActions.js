import axios from 'axios'
export const UPDATE_USER = 'users:updateUser'

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export function apiRequest() {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  return {
    type: null,
    payload: null
  }
}