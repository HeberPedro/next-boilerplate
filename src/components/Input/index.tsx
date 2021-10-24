import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
}

const Input = ({ children }: InputProps) => <S.Wrapper>{children}</S.Wrapper>

export default Input
