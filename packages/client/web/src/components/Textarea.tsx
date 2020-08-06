import React, { TextareaHTMLAttributes } from 'react'

import { TextareaBlock } from 'src/styles/components/textarea'

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  name: string
}

const Textarea: React.FC<ITextareaProps> = ({ label, name, ...rest }) => {
  return (
    <TextareaBlock className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea {...rest} id={name} />
    </TextareaBlock>
  )
}

export default Textarea
