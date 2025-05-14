import MovieCard from "../components/MovieCard"

export default function HomePage() {

const movies = [
    {
        id: 0,
        title: "Movie 1",
        release_date: "11-05-24",
        src: ""
    },
    {
        id: 1,
        title: "Movie 1",
        release_date: "11-05-24",
        src: ""
    },
    {
        id: 2,
        title: "Movie 1",
        release_date: "11-05-24",
        src: ""
    },
    {
        id: 3,
        title: "Movie 1",
        release_date: "11-05-24",
        src: ""
    }
]


    return (
        <div className="home-page">
            <div className="movies-grid">
                {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    )
}