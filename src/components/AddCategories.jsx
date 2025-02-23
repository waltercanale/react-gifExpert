import { useState } from 'react'

export const AddCategories = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState('')

  const onInputChange = ({ target }) => {
    setinputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const newValue = inputValue.trim()
    if (newValue.length <= 2) return
    onNewCategory(newValue)
    setinputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar Gifs'
        onChange={onInputChange}
      />
    </form>
  )
}
