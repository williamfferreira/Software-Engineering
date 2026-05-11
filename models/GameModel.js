class GameModel {
    constructor() {
        // Constantes de configuração
        this.MAX_ROWS = 6;
        this.WORD_LENGTH = 5;
        this.POINTS_FOR_CORRECT_LETTER = 10;
        this.POINTS_FOR_PRESENT_LETTER = 5;

        // Mantém os nomes esperados pelo Controller (compatibilidade)
        this.maxRows = this.MAX_ROWS;
        this.maxCols = this.WORD_LENGTH;

        // Dicionários originais
        this.rawDictionaries = {
            pt: ["TESTE", "CLASSE", "DADOS", "LOGIC", "PILHA", "SUITE"],
            en: ["CLEAN", "SMELL", "PRINT", "CODE", "FILES", "STACK"]
        };

        // Dicionários validados
        // A palavra "CODE" (4 letras) será removida automaticamente.
        this.dictionaries = this.buildValidatedDictionaries();

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
        return Array.from(
            { length: this.MAX_ROWS },
            () => Array(this.WORD_LENGTH).fill("")
        );
    }

    buildValidatedDictionaries() {
        const validatedDictionaries = {};

        for (const language in this.rawDictionaries) {
            validatedDictionaries[language] =
                this.rawDictionaries[language].filter(word =>
                    this.isValidWord(word)
                );
        }

        return validatedDictionaries;
    }

    isValidWord(word) {
        return typeof word === "string" &&
               word.length === this.WORD_LENGTH;
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
        if (this.currentCol < this.WORD_LENGTH) {
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
        return this.currentCol === this.WORD_LENGTH;
    }

    getCurrentWord() {
        return this.board[this.currentRow].join("");
    }

    evaluateCurrentWord() {
        const currentWord = this.getCurrentWord();
        const results = [];

        for (let index = 0; index < this.WORD_LENGTH; index++) {
            if (currentWord[index] === this.secretWord[index]) {
                results.push("correct");
                this.score += this.POINTS_FOR_CORRECT_LETTER;
            } else if (this.secretWord.includes(currentWord[index])) {
                results.push("present");
                this.score += this.POINTS_FOR_PRESENT_LETTER;
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

        if (this.currentRow === this.MAX_ROWS) {
            this.gameEnded = true;
        }
    } 


    
    nextRound() {
        this.round++;
        this.startGame(this.language);
    }
}