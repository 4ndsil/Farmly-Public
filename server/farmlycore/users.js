const axios = require("axios");
const BASE_URL = process.env.CORE_BASE_URL

const findUsers = async ({email, customerId}) => {
    let data =  {      
        'email': email,
        'customerId': customerId      
    }
    
    axios.post(`${BASE_URL}/user-access/user/find/`, data)
        .then((response) => {
          console.log(response)
            return response.data.map((user) => {

            })
          })
        .catch((error) => {
            console.error(error.message)
            return null
        })      
}

const userAuthentication = async({email, password}) => {
  let data =  {      
    'email': email,
    'password': password      
  }

  axios.post(`${BASE_URL}/user-access/user/`, data)
  .then((response) => {
    console.log(response)
    console.log('success')
      return response.data.map((user) => {

      })
    })
  .catch((error) => {
      console.error(error.message)
      return null
  })      
}

module.exports = {
    findUsers,
    userAuthentication
}