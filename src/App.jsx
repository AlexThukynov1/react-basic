import './App.css'
import MovieCard from './components/MovieCard'

function App() {

const movie = {
  title: "Movie 1",
  release_date: "11-05-24",
  src: ""
}
const isVisible = false

  return (
      <div>
        <MovieCard movie={movie}/>
        {isVisible? <MovieCard movie={movie}/> : 'Not visible'}
      </div>
  )
}

export default App
