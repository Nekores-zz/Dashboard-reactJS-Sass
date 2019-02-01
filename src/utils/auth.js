// Cookies
import Cookies from 'universal-cookie'

// Redux Auth Wrapper
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

// Initiate cookies object
const cookies = new Cookies()

/**
 * return true if found cookie MYI-CRM_TOKEN
 */
export const checkAuth = () => {
  const authToken = cookies.get('MYI-CRM_TOKEN')
  return !!authToken
}

/**
 * set token to cookie
 */
export const saveToken = (token, expiryDate) => {
  if(expiryDate){
    cookies.set('MYI-CRM_TOKEN', token, {
      expires:  new Date(expiryDate)
    })
  }else{
    cookies.set('MYI-CRM_TOKEN', token)
  }
}

/**
 * delete token from cookie
 */
export const removeToken = () => {
  cookies.remove('MYI-APP_TOKEN')
}

/**
 * wrap component to make it accessable only if user is authenticated
 * checkAuth should return true
 */
export const authenticated = connectedRouterRedirect({
  redirectPath: '/signin',
  authenticatedSelector: () => true //checkAuth()
})

/**
 * wrap component to make it accessable only if user is not authenticated
 * checkAuth should return false
 */
export const notAuthenticated = connectedRouterRedirect({
  redirectPath: '/',
  allowRedirectBack: true,
  authenticatedSelector: () => !checkAuth()
})
