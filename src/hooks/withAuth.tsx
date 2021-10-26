import { useRouter } from 'next/router'
import { ElementType, useEffect } from 'react'
import { parseCookies } from 'nookies'

const withAuth = (WrappedComponent: ElementType) => {
  const Wrapper = (props: unknown) => {
    const router = useRouter()

    useEffect(() => {
      const token = parseCookies(null, 'token')

      if (!token) {
        router.replace('/')
      }
    }, [router])

    return <WrappedComponent {...props} />
  }

  return Wrapper
}

export default withAuth
