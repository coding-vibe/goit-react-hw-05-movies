import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HomePageWrap } from './HomePage.styled';

const HomePage = () => {
    const [movies, setMovies] = useState([])
    const location = useLocation()
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmExMDMxYmJjZWU5ZmNkMWY4ZjFkNGJjOTMxZGE4NiIsInN1YiI6IjY0N2RkNGZjMGZiMzk4MDBkZTY4M2M4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WR5ImVQ8amW7G2J-1UuzSgjjmqHqiLGhyWoZyb9un5Y'
            }
        }
        fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
            .then(response => response.json())
            .then(response => setMovies(response.results))
            .catch(err => console.error(err))
    }, [])
    return (
        <HomePageWrap>
            <h1>Trending today</h1>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <NavLink to={`/movies/${movie.id.toString()}`}
                            state={{ from: location }}>{movie.original_title}
                        </NavLink>
                    </li>
                ))}
        </HomePageWrap>
    );
}

export default HomePage;