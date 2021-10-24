import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const Button = ({ ...children }: ButtonProps) => <S.Wrapper {...children} />

export default Button
