import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (categoria) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const buscadorImg = async () => {
    const img = await getGifs(categoria)
    setImages(img)
    setIsLoading(false)
  }

  useEffect(() => {
    // getGifs(categoria)
    //   .then(img => setImages(img))
    buscadorImg()
  }, [])

  return {
    images,
    isLoading
  }
}
