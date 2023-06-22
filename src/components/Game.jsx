import "./Game.css";

const Game = ({ verifyLetter }) => {
    return (
        <div className="game">
            <p className="points">
                <span>Pontuação: 000</span>
            </p>
            <div>
                <h1>Adivinhe a palavra</h1>
                <h3 className="tip">Dica sobre a palavra: <span>Dica...</span></h3>
            </div>
            <div className="wordContainer">
                <span className="letter">A</span>
                <span className="blankSquare"></span>
            </div>
            <div className="letterContainer">
                <p>Tente adivinhar uma letra:</p>
                <form>
                    <input type="text" name="letter" maxLength="1" required/>
                    <button>Jogar</button>
                </form>
            </div>
            <div className="wrongLetterContainer">
                <p>Letars já utilizadas:</p>
                <span>a, </span>
                <span>b, </span>
            </div>
        </div>
    )
};

export default Game;