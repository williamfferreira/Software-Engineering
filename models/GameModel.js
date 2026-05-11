class GameModel {
    constructor() {
        // Dicionários de palavras por idioma
        this.dictionaries = {
            pt: ["TESTE", "CLASSE", "DADOS", "LOGIC", "PILHA", "SUITE"],
            en: ["CLEAN", "SMELL", "PRINT", "CODE", "FILES", "STACK"]
        };

        // Configurações do jogo
        this.maxRows = 6;
        this.maxCols = 5;

        // Estado da partida
        this.language = "";
        this.secretWord = "";
        this.currentRow = 0;
        this.currentCol = 0;
        this.score = 0;
        this.round = 1;
        this.gameEnded = false;

        // Matriz do tabuleiro
        this.board = this.createEmptyBoard();
    }

    createEmptyBoard() {
        return Array.from({ length: this.maxRows }, () =>
            Array(this.maxCols).fill("")
        );
    }

    startGame(language) {
        this.language = language;
        this.secretWord = this.getRandomWord();
        this.currentRow = 0;
        this.currentCol = 0;
        this.gameEnded = false;
        this.board = this.createEmptyBoard();
    }

    getRandomWord() {
        const words = this.dictionaries[this.language];
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex].toUpperCase();
    }

    insertLetter(letter) {
        if (this.currentCol < this.maxCols) {
            this.board[this.currentRow][this.currentCol] = letter;
            this.currentCol++;
        }
    }

    removeLetter() {
        if (this.currentCol > 0) {
            this.currentCol--;
            this.board[this.currentRow][this.currentCol] = "";
        }
    }

    isCurrentWordComplete() {
        return this.currentCol === this.maxCols;
    }

    getCurrentWord() {
        return this.board[this.currentRow].join("");
    }

    evaluateCurrentWord() {
        const currentWord = this.getCurrentWord();
        const results = [];

        for (let i = 0; i < this.maxCols; i++) {
            if (currentWord[i] === this.secretWord[i]) {
                results.push("correct");
                this.score += 10;
            } else if (this.secretWord.includes(currentWord[i])) {
                results.push("present");
                this.score += 5;
            } else {
                results.push("absent");
            }
        }

        return results;
    }

    isCorrectWord() {
        return this.getCurrentWord() === this.secretWord;
    }

    moveToNextRow() {
        this.currentRow++;
        this.currentCol = 0;

        if (this.currentRow === this.maxRows) {
            this.gameEnded = true;
        }
    }

    nextRound() {
        this.round++;
        this.startGame(this.language);
    }
}