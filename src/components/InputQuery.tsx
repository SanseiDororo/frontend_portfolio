import React, { useState, KeyboardEvent } from 'react'

interface UserInputProps {
  onEnter: (inputText: string) => void
}

const InputQuery: React.FC<UserInputProps> = ({ onEnter }) => {
  const [textInput, setTextInput] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value)
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onEnter(textInput)
    }
  }

  return (
    <input
      className="w-full bg-transparent border-b-2 text-white placeholder-white outline-none"
      type="text"
      value={textInput}
      onChange={handleInputChange}
      onKeyDown={handleKeyPress}
      placeholder="Chose City"
    />
  )
}

export default InputQuery
