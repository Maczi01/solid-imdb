import {createEffect, For} from "solid-js";
import {Header} from "./components/Header";
import {Card} from "./components/Card";
import {createGlobalState} from "./state";

const App = () => {

    const globalState = createGlobalState();

    function handleDeleteItem(itemId: string) {
        globalState.deleteMovie(itemId);
    }

    createEffect(() => {
        globalState.data();
    });

    return (
        <div>
            <Header globalState={globalState}/>
            <div>
                <div class="flex flex-row flex-wrap">
                    <For each={globalState.data()}>
                        {(movie) => <Card
                            id={movie.id}
                            poster={movie.poster_path || ""}
                            name={movie.name}
                            deleteMovie={handleDeleteItem}/>}
                    </For>
                </div>
            </div>
        </div>
    );
};

export default App;
