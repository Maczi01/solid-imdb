export const Card = ({id, poster, name, deleteMovie}: {
    id: string,
    poster: string,
    name: string,
    deleteMovie: (id: string) => void
}) => {
    return (
        <div
            class="w-48 flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
            <img class="rounded-t-lg" src={poster} alt="poster"/>
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </div>
            <button onClick={() => deleteMovie(id)}
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">Delete
            </button>
        </div>

    )
}