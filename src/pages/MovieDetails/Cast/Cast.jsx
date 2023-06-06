import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
    const [cast, setCast] = useState([])
    const { movieId } = useParams()
    
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmExMDMxYmJjZWU5ZmNkMWY4ZjFkNGJjOTMxZGE4NiIsInN1YiI6IjY0N2RkNGZjMGZiMzk4MDBkZTY4M2M4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WR5ImVQ8amW7G2J-1UuzSgjjmqHqiLGhyWoZyb9un5Y'
            }
        }
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
        .then(response => response.json())
        .then(response => setCast(response.cast))
          .catch(err => console.error(err));
        }, [movieId]);
    
    return (
        <ul>
            {cast &&
                cast.map(actor => (
                    <li key={actor.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                            alt="poster"
                            width="100"
                        />
                        <p>{actor.character}</p>
                        <p>{actor.name}</p>
                        <hr />
                    </li>
                ))}
        </ul>
    );
}

export default Cast;