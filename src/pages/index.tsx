import Cookie from 'js-cookie'
import { addDays } from 'date-fns'

const SignIn = () => {
  const handleSignIn = () => {
    Cookie.set('token', 'custom-token', {
      expires: addDays(new Date(), 1)
    })
  }

  const handleSignOut = () => {
    Cookie.remove('token')
  }

  return <h1>Página de Login</h1>
}

export default SignIn
