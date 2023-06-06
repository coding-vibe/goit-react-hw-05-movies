import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { Btn, MovieWrap, MovieTitle, NavWrap, Title, GenresList, NavItem } from './MovieDetails.styled.js';

const MovieDetails = () => {
	const { movieId } = useParams()
	const [movie, setMovie] = useState({})
	const location = useLocation()
	const navigate = useNavigate()
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmExMDMxYmJjZWU5ZmNkMWY4ZjFkNGJjOTMxZGE4NiIsInN1YiI6IjY0N2RkNGZjMGZiMzk4MDBkZTY4M2M4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WR5ImVQ8amW7G2J-1UuzSgjjmqHqiLGhyWoZyb9un5Y'
			}
		}
		fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
			.then(response => response.json())
			.then(response => setMovie(response))
			.catch(err => console.error(err));
	}, [movieId])
	return (
		<>
			{location.pathname !== '/' && (
				<Btn onClick={() => navigate(-1)}>Go Back</Btn>
			)}
			<MovieWrap>
				<img
					src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`}
					alt="poster"
				/>
				<div>
					<MovieTitle>{movie?.title}</MovieTitle>
					<p>User score: {(movie?.vote_average * 10).toFixed(0)}%</p>
					<Title>Overview</Title>
					<p>{movie?.overview}</p>
					
					<Title>Genres</Title>
					<GenresList>
						{movie?.genres && movie.genres.map(genre => (
							<li key={genre.id}>{genre.name}</li>))}
					</GenresList>
				</div>
			</MovieWrap>
			<Title>Additional information</Title>
			<NavWrap>
				<NavItem to={`/movies/${movieId}/cast`} state={{ from: location.state.from }}>Cast</NavItem>
				<NavItem to={`/movies/${movieId}/reviews`} state={{ from: location.state.from }}>Reviews</NavItem>
			</NavWrap>
			<Outlet />
		</>
	);
}

export default MovieDetails;