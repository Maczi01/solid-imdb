import {createSignal} from 'solid-js';
import {fetchMovies, getMovieByTitle} from "../api/movies";
import defaultImage from '../assets/default-image.jpg';

export function createGlobalState() {
    const [data, setData] = createSignal<Movie[]>([]);

    fetchMovies().then(initialData => {
        setData(initialData);
    }).catch(error => {
        console.error('Error fetching movies:', error);
    });

    function addMovie(item: Movie) {
        const movieImageUrl = `https://image.tmdb.org/t/p/w200`;
        getMovieByTitle(item.name).then(res => {
            const movie = res[0];
            if (movie && movie.poster_path) {
                item.poster_path = `${movieImageUrl}${movie.poster_path}`;
            } else {
                item.poster_path = defaultImage;
            }
            setData(prev => [...prev, item]);
        }).catch(error => {
            console.error('Error fetching movie by title:', error);
            item.poster_path = defaultImage;
            setData(prev => [...prev, item]);
        });
    }

    function deleteMovie(itemId: string) {
        setData(data().filter(item => item.id !== itemId));
    }

    function getMovieNumber() {
        return data().length;
    }

    return {data, addMovie, deleteMovie, getMovieNumber};
}