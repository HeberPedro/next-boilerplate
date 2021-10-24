import { useRouter } from 'next/router'
import { ElementType, useEffect } from 'react'
import Cookie from 'js-cookie'

const withAuth = (WrappedComponent: ElementType) =>{
  const Wrapper = (props: unknown) => {
    const router = useRouter()

    useEffect(() => {
      const token = Cookie.get('token')

      if (!token) {
        router.replace('/')
      }
    }, [router])

    return <WrappedComponent {...props} />
  }

  return Wrapper
}

export default withAuth