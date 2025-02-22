import { useState } from 'react'
import { AddCategories, GifGrid } from './components'

const API_GIF_URL = '7j2Dvso0Jva6CwuVkw3pyHvoXxkdjdgN'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Naruto'])

  const onAddCategory = (newCategory) => {
    const newCategoryLower = newCategory.toLowerCase()
    const categoriesLower = categories.map(p => p.toLowerCase())
    const existe = categoriesLower.includes(newCategoryLower)
    if (existe) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategories onNewCategory={onAddCategory} />

      {
        categories.map((categoria) => (
          <GifGrid key={categoria} categoria={categoria} />
        ))
      }

    </>
  )
}

export default GifExpertApp