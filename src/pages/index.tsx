import { setCookie, destroyCookie } from 'nookies'
import { addDays } from 'date-fns'

const SignIn = () => {
  const handleSignIn = () => {
    setCookie(null, 'token', 'custom-token', {
      expires: addDays(new Date(), 1)
    })
  }

  const handleSignOut = () => {
    destroyCookie(null, 'token')
  }

  return <h1>Página de Login</h1>
}

export default SignIn
