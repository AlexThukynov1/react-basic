import './App.css'
import MovieCard from './components/MovieCard'

function App() {

const movie = {
  title: "Movie 1",
  release_date: "11-05-24",
  src: ""
}

  return (
      <div>
        <MovieCard movie={movie}/>
      </div>
  )
}

export default App
