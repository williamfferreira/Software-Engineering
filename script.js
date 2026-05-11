window.onload = function () {
    if (
        typeof GameModel === "undefined" ||
        typeof GameView === "undefined" ||
        typeof GameController === "undefined"
    ) {
        console.error("Erro: arquivos MVC não foram carregados corretamente.");
        return;
    }

    const model = new GameModel();
    const view = new GameView();
    const controller = new GameController(model, view);

    window.comecar = function (idioma) {
        controller.startGame(idioma);
    };
};