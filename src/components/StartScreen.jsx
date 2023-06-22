import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
    return <div className="start">
        <h1>Secret Word</h1>
        <button onClick={startGame}>Jogar</button>
        <p>Clique no botão para começar a jogar!</p>
    </div>;
};

export default StartScreen;