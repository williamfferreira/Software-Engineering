# Relatório DTP 02 – Construção de Software (Code Complete & Kent Beck)

## Objetivo

O objetivo desta etapa foi melhorar a qualidade interna do código do jogo Wordle Multi, aplicando princípios de construção de software baseados em legibilidade, manutenibilidade e robustez. As alterações seguiram boas práticas descritas em obras como Code Complete e os princípios de simplicidade defendidos por Kent Beck.

---

## Problemas Encontrados no Código Original

O código legado apresentava diversos problemas de construção:

1. Variáveis com nomes pouco descritivos.
2. Uso de números mágicos espalhados pelo código.
3. Ausência de validação dos dicionários.
4. Lógica de pontuação com valores fixos embutidos.
5. Dificuldade de manutenção e evolução.

Exemplos identificados:
- `r_a`, `c_a`, `sc`, `m`.
- Valores como `6`, `5`, `10` e `5` utilizados diretamente no código.
- Palavra `"CODE"` no dicionário inglês, com apenas 4 letras.

---

## Melhorias Aplicadas

### Nomenclatura Significativa

As variáveis com nomes abreviados foram substituídas por nomes que revelam claramente sua intenção.

| Nome original | Nome refatorado |
|--------------|----------------|
| `r_a` | `currentRow` |
| `c_a` | `currentCol` |
| `sc` | `score` |
| `rd` | `round` |
| `end` | `gameEnded` |
| `m` | `board` |
| `p_s` | `secretWord` |
| `i_escolhido` | `language` |
| `u_w` | `currentWord` |

---

### Eliminação de Números Mágicos

Os valores fixos foram centralizados em constantes de configuração no `GameModel`.

```javascript
this.MAX_ROWS = 6;
this.WORD_LENGTH = 5;
this.POINTS_FOR_CORRECT_LETTER = 10;
this.POINTS_FOR_PRESENT_LETTER = 5;