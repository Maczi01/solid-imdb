import axios from "axios";

export const fetchMovies = async () => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/tv?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&first_air_date_year=2019&page=1&vote_count.gte=500&include_null_first_air_dates=false');
        return response.data.results.splice(0, 8).map((movie: any) => ({
            id: movie.id,
            name: movie.name,
            poster_path: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
        }));
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
};

export const getMovieByTitle = async (title: string) => {
    console.log('title:', title)
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&query=${title}&page=1`);
        return response.data.results.map((movie: any) => ({
            id: movie.id,
            name: movie.name,
            poster_path: movie.poster_path,
        }));
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}