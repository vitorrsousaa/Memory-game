#Memory Game
## 🚀 O projeto

<img src="https://raw.githubusercontent.com/vitorrsousaa/Memory-game/main/MemoryGame-Logo.png" alt="memory-game-logo"/>

<p>
O objetivo deste projeto é construir um jogo da memória com 3 níveis de desafio. O usuário vai selecionar o nível entre easy, medium e hard. Após isto, vai ser criado o tabuleiro com todos os itens para ser clicados na tela do usuário. O game esta sendo criado dentro de um objeto, e vou exportar as funcionalidades no meu HTML.

Tenho como objetivo trabalhar com funcionalidades aleatórias, para permitir que o usuário tenha a experiencia de sempre encontrar um tabuleiro diferente ao iniciar o game.
  
Todas as funçoes de aleatoriedades foram criadas utilizando a biblioteca Math.
</p>
## 📫 Contribuindo para Convert-Coin
1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 📝 Documentário das funções

#Version 1.0

Function init:
- Retorna para dentro do objeto a div onde vai ocorrer o game, para que possa ser feito as alterações em JS

Function getRandomNumber:
- Recebe como parametro min e max
- Retorna um elemento inteiro aleatório dentro deste parametro

Function createListOfId:
- Recebe como parametro o tamanho de ID's 
- Altera na chave IdIcons do nosso objeto todos os ID's gerados aleatórios 

Function draw:
- Imprime os elementos na div board

Function dificulty:
- Recebe como parametro o nível de dificuldade selecionado pelo usuário
- Realiza as alterações no objeto para os parametros de cada dificuldade

Function create:
- Cria a matriz com elementos vazios onde vai ocorrer o game

Function duplicate:
- Recebe como parametro a quantidade de vezes que um array vai ser copiado
- Retorna o array resultado

Function writeBoard:
- Adiciona os Id's em cada posição da matriz de forma aleatória

#Version 2.0

Criei a funcionalidade para acrescentar todas as imagens na nossa página HTML.

Documentário das funções:

Function createBoard:
- Percorre a matriz, e imprime a div com cada item dentro da section memory-game;

Function displayGrid:
- Responsável por alterar o número de colunas do nosso grid conforme a seleção da dificuldade.

Function start:
- Responsável por iniciar o game;
- Chama todas as funções necessárias para que o game inicie.

Function dificulty:
- Adicionei a function start dentro da function dificulty;
- Por último, alterei a exibição do display da section memorygame;

Function draw:
- Exclui a function draw, pois a function createBoard tem a mesma funcionalidade;

#Version 3.0

Adicionar a funcionalidade para acrescentar a imagem que vai ser exibida no back-card do game.

Sobrepor ambas as imagens
