const BASE_URL = 'https://strangers-things.herokuapp.com/api/2007-LSU-RM-WEB-PT'
export const getToken = () => {
  return localStorage.getItem('auth-token')
}

export const clearToken = () => {
  localStorage.removeItem('auth-token')
}

export const setToken = (token) => {
  localStorage.setItem('auth-token', token)
}
export const RegisterUser = async (username, password) => {
  const result = await fetch(`${BASE_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  })
  const { success, error, data } = await result.json()
  if (error) {
    alert(error.message)
  }
  if (data && data.token) {
    setToken(data.token)
  }
  console.log(data)
  return data
}
