class GameController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Registra o evento de teclado
        window.onkeydown = (event) => {
            this.handleKeyDown(event);
        };
    }

    startGame(language) {
        // Inicializa o jogo no Model
        this.model.startGame(language);

        // Atualiza a interface na View
        this.view.showGameScreen();
        this.view.setInstructions(language);
        this.view.drawBoard(
            this.model.maxRows,
            this.model.maxCols
        );
        this.view.updateScore(this.model.score);
        this.view.updateRound(this.model.round);
    }

    handleKeyDown(event) {
        // Ignora teclas se o jogo terminou ou não foi iniciado
        if (this.model.gameEnded || this.model.language === "") {
            return;
        }

        const key = event.key.toUpperCase();

        // BACKSPACE
        if (key === "BACKSPACE") {
            this.handleBackspace();
            return;
        }

        // ENTER
        if (key === "ENTER") {
            this.handleEnter();
            return;
        }

        // Letras A-Z
        if (/^[A-Z]$/.test(key)) {
            this.handleLetter(key);
        }
    }

    handleBackspace() {
        if (this.model.currentCol > 0) {
            this.model.removeLetter();

            this.view.updateTile(
                this.model.currentRow,
                this.model.currentCol,
                ""
            );
        }
    }

    handleLetter(letter) {
        if (this.model.currentCol < this.model.maxCols) {
            const row = this.model.currentRow;
            const col = this.model.currentCol;

            this.model.insertLetter(letter);
            this.view.updateTile(row, col, letter);
        }
    }

    handleEnter() {
        if (!this.model.isCurrentWordComplete()) {
            return;
        }

        // Avalia a palavra
        const results = this.model.evaluateCurrentWord();

        // Atualiza as cores do tabuleiro
        for (let col = 0; col < this.model.maxCols; col++) {
            this.view.colorTile(
                this.model.currentRow,
                col,
                results[col]
            );
        }

        // Atualiza score
        this.view.updateScore(this.model.score);

        // Verifica vitória
        if (this.model.isCorrectWord()) {
            const message =
                this.model.language === "pt"
                    ? "Acertou!"
                    : "Correct!";

            this.view.showMessage(message);

            this.model.nextRound();

            this.view.updateRound(this.model.round);
            this.view.drawBoard(
                this.model.maxRows,
                this.model.maxCols
            );

            return;
        }

        // Próxima linha
        this.model.moveToNextRow();

        // Verifica derrota
        if (this.model.gameEnded) {
            this.view.showMessage(
                "Fim/End! Word: " + this.model.secretWord
            );
        }
    }
}