# Relatório DTP 01 – Arquitetura e Padrão MVC

## Objetivo

O objetivo desta etapa foi refatorar o código original do jogo Wordle Multi, que estava concentrado em um único arquivo HTML, aplicando o padrão arquitetural MVC (Model-View-Controller). O propósito dessa reorganização foi reduzir o acoplamento entre as partes do sistema e facilitar manutenção, testes e evolução do software.

---

## Problemas Encontrados no Código Original

No código legado, toda a aplicação estava implementada em um único bloco de JavaScript embutido no `index.html`. Isso gerava diversos problemas:

1. Lógica de negócio misturada com manipulação da interface.
2. Variáveis globais acessíveis por qualquer parte do código.
3. Funções com múltiplas responsabilidades.
4. Dificuldade de manutenção e reutilização.
5. Alto acoplamento entre regras do jogo e elementos visuais.

Um exemplo disso era a função `comecar()`, que ao mesmo tempo:
- Escolhia o idioma.
- Manipulava a interface.
- Selecionava a palavra secreta.
- Inicializava o tabuleiro.

---

## Aplicação do Padrão MVC

A solução adotada foi dividir o sistema em três camadas principais.

### Model (`models/GameModel.js`)

Responsável por armazenar e manipular os dados da aplicação.

#### Responsabilidades:
- Armazenar os dicionários de palavras.
- Selecionar aleatoriamente a palavra secreta.
- Controlar o estado da partida.
- Manter a matriz do tabuleiro.
- Calcular a pontuação.
- Controlar rodadas e tentativas.

O Model não possui qualquer acesso ao DOM ou a elementos visuais.

---

### View (`views/GameView.js`)

Responsável exclusivamente pela interface com o usuário.

#### Responsabilidades:
- Exibir e ocultar telas.
- Renderizar o tabuleiro.
- Atualizar letras digitadas.
- Colorir os blocos com base no resultado.
- Atualizar score e rodada.
- Exibir mensagens e alertas.

A View não contém regras de negócio.

---

### Controller (`controllers/GameController.js`)

Responsável por coordenar a comunicação entre Model e View.

#### Responsabilidades:
- Capturar eventos do teclado.
- Receber a seleção do idioma.
- Solicitar ao Model alterações no estado do jogo.
- Solicitar à View a atualização da interface.

O Controller atua como intermediário entre as demais camadas.

---

## Modularização do Projeto

O projeto foi reorganizado na seguinte estrutura:

```text
Software-Engineering/
├── index.html
├── style.css
├── script.js
├── models/
│   └── GameModel.js
├── views/
│   └── GameView.js
├── controllers/
│    └── GameController.js
├── DTP-01-relatorio.md
├── DTP-02-relatorio.md
└── README.md