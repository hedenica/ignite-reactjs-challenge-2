import { MovieCard } from '../components/MovieCard';

interface ContentProps {
  movies: Array<{
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>
  selectedGenre: string;
}

export function Content({ movies, selectedGenre }: ContentProps) {
  return (
    <div className="container">
    <header>
      <span className="category">Categoria:<span>{selectedGenre}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.Title} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}