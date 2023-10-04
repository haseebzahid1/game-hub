import useGenres, { Genre } from '../hooks/useGenres'
// import useData from '../hooks/useData'

const GenreList = () => {
    // const {genres} = useGenres();
    // const {data} = useData<Genre>('/genres')
    const {data} = useGenres();
  return (
    <ul>
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList