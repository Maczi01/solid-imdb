import {Accessor, createSignal} from "solid-js";
import {Modal} from "./Modal";

type HeaderProps = {
    globalState: {
        data: Accessor<Movie[]>,
        addMovie: (item: Movie) => void,
        deleteMovie: (itemId: string) => void,
        getMovieNumber: () => number
    }
}

export const Header = ({globalState}: HeaderProps) => {

    const [isModalOpen, setIsModalOpen] = createSignal(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen());
    };

    return (
        <>
            <header>
                <nav class="bg-slate-400 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="https://flowbite.com" class="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9"
                                 alt="Flowbite Logo"/>
                            <span
                                class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">IMDB</span>
                        </a>
                        <div>
                            <span
                                class="text-white dark:text-white">Number of movies: {globalState.data().length}
                            </span>
                        </div>
                        <div class="flex items-center lg:order-2">
                            <button
                                onClick={toggleModal}
                                type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add
                                movie
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            <Modal isOpen={isModalOpen} onClose={toggleModal} addMovie={globalState.addMovie}/>
        </>
    );
}