class GameView {
    constructor() {
        // Elementos da interface
        this.startScreen = document.getElementById("tela-inicio");
        this.gameScreen = document.getElementById("tela-jogo");
        this.instructions = document.getElementById("msg-instr");
        this.scoreElement = document.getElementById("score-val");
        this.roundElement = document.getElementById("round-val");
        this.boardElement = document.getElementById("board");
    }

    showGameScreen() {
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "flex";
    }

    setInstructions(language) {
        if (language === "pt") {
            this.instructions.innerText =
                "Tente adivinhar a palavra de 5 letras.";
        } else {
            this.instructions.innerText =
                "Guess the 5-letter word.";
        }
    }

    drawBoard(rows, cols) {
        this.boardElement.innerHTML = "";

        for (let row = 0; row < rows; row++) {
            const rowElement = document.createElement("div");
            rowElement.className = "linha";

            for (let col = 0; col < cols; col++) {
                const tile = document.createElement("div");
                tile.className = "tile";
                tile.id = `t-${row}-${col}`;
                rowElement.appendChild(tile);
            }

            this.boardElement.appendChild(rowElement);
        }
    }

    updateTile(row, col, letter) {
        const tile = document.getElementById(`t-${row}-${col}`);
        tile.innerText = letter;
    }

    colorTile(row, col, result) {
        const tile = document.getElementById(`t-${row}-${col}`);

        if (result === "correct") {
            tile.style.background = "#538d4e";
        } else if (result === "present") {
            tile.style.background = "#b59f3b";
        } else {
            tile.style.background = "#3a3a3c";
        }

        tile.style.borderColor = "transparent";
    }

    updateScore(score) {
        this.scoreElement.innerText = score;
    }

    updateRound(round) {
        this.roundElement.innerText = round;
    }

    showMessage(message) {
        alert(message);
    }
}