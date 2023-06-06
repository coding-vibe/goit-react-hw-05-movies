import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
// import HomePage from '../../pages/HomePage';
// import Movies from '../../pages/Movies';
// import MovieDetails from '../../pages/MovieDetails'
// import Cast from '../../pages/MovieDetails/Cast';
// import Reviews from '../../pages/MovieDetails/Reviews';

const HomePage = lazy(() => import('../../pages/HomePage'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('../../pages/MovieDetails/Cast'));
const Reviews = lazy(() => import('../../pages/MovieDetails/Reviews'));

const RoutesList = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='movies' element={<Movies />} />
                
                <Route path='movies/:movieId' element={<MovieDetails />}>
                    <Route path='cast' element={<Cast />} />
                    <Route path='reviews' element={<Reviews />} />
                </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default RoutesList;