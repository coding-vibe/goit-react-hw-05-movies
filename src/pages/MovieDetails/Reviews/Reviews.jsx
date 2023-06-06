import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const { movieId } = useParams()

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmExMDMxYmJjZWU5ZmNkMWY4ZjFkNGJjOTMxZGE4NiIsInN1YiI6IjY0N2RkNGZjMGZiMzk4MDBkZTY4M2M4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WR5ImVQ8amW7G2J-1UuzSgjjmqHqiLGhyWoZyb9un5Y'
      }
    }
        
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setReviews(response.results))
      .catch(err => console.error(err));
  }, [movieId]);
  
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
            <hr />
          </li>
        ))
      ) : (
          `We do not have any reviews for this movie.`
      )}
    </ul>
  );
}

export default Reviews;