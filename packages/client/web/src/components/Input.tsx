import React, { InputHTMLAttributes } from 'react'

import { InputBlock } from 'src/styles/components/input'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

const Input: React.FC<IInputProps> = ({ label, name, type, ...rest }) => {
  return (
    <InputBlock className="input-block">
      <label htmlFor={name}>{label}</label>
      <input {...rest} type={type || 'text'} id={name} />
    </InputBlock>
  )
}

export default Input
