import { useState, useEffect } from 'react';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query')
  const location = useLocation()
  useEffect(() => {
    if (query === '' || query === null) {
      return;
      }
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmExMDMxYmJjZWU5ZmNkMWY4ZjFkNGJjOTMxZGE4NiIsInN1YiI6IjY0N2RkNGZjMGZiMzk4MDBkZTY4M2M4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WR5ImVQ8amW7G2J-1UuzSgjjmqHqiLGhyWoZyb9un5Y'
      }
    }
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results);
            })
          .catch(err => console.error(err));
  }, [query]);
    
    const searchHandler = e => {
    e.preventDefault();
    if (e.target.search.value === '') {
      return;
    }
    setSearchParams({ query: e.target.search.value });

    e.target.reset();
  };
  return (
    <div pd="16">
      <form onSubmit={searchHandler}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <NavLink
                to={`/movies/${movie.id.toString()}`}
                state={{ from: location }}
              >
                {movie.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;