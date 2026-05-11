# 🎮 Wordle Multi

### 📚 Projeto de Engenharia de Software

**Universidade Federal de Goiás (UFG)**

---

## 👨‍🎓 Integrantes

**William Félix Ferreira Alves da Silva** — 202405859
**Arthur Rodrigues Martins** — 202405845

---

## 📌 Descrição

Este projeto apresenta uma versão do jogo **Wordle Multi**, desenvolvida com foco na aplicação de boas práticas de **Engenharia de Software**.

O objetivo principal foi aplicar conceitos como:

* Arquitetura **MVC (Model-View-Controller)**
* Refatoração de código
* Organização e versionamento com **Git**

---


## 📌 Descrição

Este projeto apresenta uma versão do jogo **Wordle Multi**, desenvolvida com foco em boas práticas de **Engenharia de Software**. O objetivo principal foi aplicar conceitos como:

* Arquitetura **MVC (Model-View-Controller)**
* Refatoração de código
* Organização e versionamento com **Git**

A proposta busca não apenas funcionalidade, mas também **qualidade, legibilidade e manutenção do código**.

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para executar o projeto em sua máquina:

### 1. Clonar o repositório

No terminal, execute:

```bash
git clone https://github.com/williamfferreira/Software-Engineering.git
```

### 2. Acessar a pasta do projeto

```bash
cd Software-Engineering
```

### 3. Executar o projeto

Abra o arquivo `index.html` diretamente em seu navegador.

---

### ⚠️ Observação

Este projeto não requer instalação de dependências ou configuração adicional, pois foi desenvolvido utilizando apenas:

* HTML
* CSS
* JavaScript puro

---


## 🧠 Arquitetura do Projeto (MVC)

O sistema foi estruturado utilizando o padrão **MVC**, garantindo separação de responsabilidades e melhor organização.

### 📦 Model

Responsável pela lógica central do sistema:

* Regras do jogo
* Controle de pontuação
* Gerenciamento de dicionários
* Estado da partida

---

### 🎨 View

Responsável pela interface com o usuário:

* Renderização do tabuleiro
* Exibição de mensagens
* Interface gráfica

---

### 🎮 Controller

Responsável pela comunicação entre Model e View:

* Captura de eventos (teclado/clique)
* Controle do fluxo do jogo
* Integração entre lógica e interface

---

## 🧼 Relatório de Refatoração (Code Smells e Correções)

### 1. 🔤 Variáveis com nomes pouco descritivos

O código original utilizava nomes pouco intuitivos, dificultando a leitura:

| Antes | Depois     |
| ----- | ---------- |
| r_a   | currentRow |
| c_a   | currentCol |
| sc    | score      |
| m     | board      |

✔️ Resultado: maior clareza e melhor manutenção.

---

### 2. 🔢 Uso de números mágicos

Valores fixos estavam espalhados pelo código sem contexto:

```js
const MAX_ROWS = 6;
const WORD_LENGTH = 5;
const POINTS_CORRECT = 10;
const POINTS_PRESENT = 5;
```

✔️ Resultado: melhor entendimento e facilidade para ajustes futuros.

---

### 3. ⚠️ Falta de validação de dados

O dicionário original permitia entradas inválidas.

✔️ Solução implementada:

* Verificação se o valor é uma *string*
* Validação do tamanho da palavra
* Remoção de palavras inválidas

✔️ Resultado: maior robustez e confiabilidade.

---

## 🛠️ Melhorias Aplicadas

* Código mais **legível e organizado**
* Separação clara de responsabilidades (**MVC**)
* Redução de acoplamento
* Maior facilidade de manutenção
* Sistema mais robusto
* Melhor base para evolução futura

---

## 📂 Estrutura do Projeto

```
/model
/view
/controller
index.html
style.css
README.md
DTP-01.md
DTP-02.md
```

---

## 🔧 Controle de Versão (Git)

O desenvolvimento seguiu boas práticas de versionamento:

* Commits **incrementais e descritivos**
* Uso de **branches por funcionalidade**
* Integração via **Pull Requests**
* Histórico de alterações bem documentado

### 🌿 Exemplo de Branches

* `main`
* `feature/mvc-architecture`
* `feature/qualidadeeboaspraticas`
* `feature/relatorios`

---

## ✅ Considerações Finais

O projeto demonstra a importância de aplicar boas práticas desde o início do desenvolvimento. A adoção de padrões como MVC e o uso adequado de Git tornam o sistema:

* Mais profissional
* Mais fácil de manter
* Mais preparado para crescimento

---
