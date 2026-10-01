import "./App.css";

function MyButton(){
    return (
        <button>
        I'm a button
        </button>
    );
}

/*function List(){
    const games = [
        {title: 'Elden Ring', id: 1},
        {title: 'Hollow Knight', id: 2},
        {title: 'Deadlock', id: 3},
    ];

        const gameslist = games.map(game =>
            <li key = {game.id}>
            {game.title}
            </li>
        )

    return (
        <ul>{gameslist}</ul>
    );
}*/

export default function App() {
    return (
        <div className="app">
            <h1>Game Launcher</h1>
            <p>Welcome to my game launcher!</p>
            <MyButton />
        {/*<List />*/}
        </div>
    );
}
