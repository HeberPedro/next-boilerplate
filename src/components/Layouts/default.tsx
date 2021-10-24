import withAuth from 'hooks/withAuth'

interface DefaultProps {
  children: React.ReactNode
}

const Default = ({ children }: DefaultProps) => <div>{children}</div>

export default withAuth(Default)
