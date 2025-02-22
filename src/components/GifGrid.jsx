import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ categoria }) => {
  const { images, isLoading } = useFetchGifs(categoria)

  console.log({ images, isLoading })

  return (
    <>
      <h3>{categoria}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }

      <div className='card-grid'>
        {images.map(imag => (
          // {...imag} pasamos tods las proipiedades de imag de esta manera, sirve cuando son muchas
          <GifItem key={imag.id} {...imag} />
        ))}
      </div>
    </>
  )
}
