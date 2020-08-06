import React, { SelectHTMLAttributes } from 'react'

import { SelectBlock } from 'src/styles/components/select'

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  options: Array<{
    value: string
    label: string
  }>
}

const Select: React.FC<ISelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <SelectBlock className="select-block">
      <label htmlFor={name}>{label}</label>
      <select {...rest} id={name}>
        <option value="" disabled selected hidden>
          Selecione uma opção
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </SelectBlock>
  )
}

export default Select
