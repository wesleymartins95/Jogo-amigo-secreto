# Jogo-amigo-secreto

## Índice

1. Descrição do Projeto
2. Status do Projeto
3. Funcionalidades
4. Demonstração da Aplicação
5. Acesso ao Projeto
6. Tecnologias Utilizadas
7. Instalação
8. Dependências
9. Como Executar o Projeto
10. Possíveis Problemas e Soluções
11. Pessoas Contribuidoras
12. Pessoas Desenvolvedoras
13. Licença

## 1. Descrição do Projeto

Este projeto é uma aplicação web simples que permite aos usuários inserir nomes de amigos em uma lista e, em seguida, realizar um sorteio aleatório para determinar quem será o "amigo secreto" de cada um.

## 2. Status do Projeto

[ ] Em desenvolvimento
[x] Concluído

## 3. Funcionalidades

* Adicionar nomes de amigos através de um campo de texto e um botão "Adicionar".
* Exibir os nomes inseridos em uma lista na página.
* Realizar um sorteio aleatório ao clicar no botão "Sortear Amigo".
* Exibir o resultado do sorteio na tela.

## 4. Demonstração da Aplicação

[Sem demonstrações]

## 5. Acesso ao Projeto

[Link para a aplicação online] (https://jogo-pink-omega.vercel.app/)

## 6. Tecnologias Utilizadas

* HTML
* CSS
* JavaScript

## 7. Instalação

1. Clone o repositório: `git clone https://github.com/wesleymartins95/amigo-secreto.git`
2. Abra o arquivo `index.html` no seu navegador.

## 8. Dependências

Nenhuma dependência é necessária para executar este projeto.

## 9. Como Executar o Projeto

1. Abra o arquivo `index.html` no seu navegador.
2. Insira os nomes dos amigos no campo de texto e clique em "Adicionar".
3. Clique em "Sortear Amigo" para realizar o sorteio.

## 10. Possíveis Problemas e Soluções

* **Duplicação de nomes na lista:**
    * **Problema:** Ao adicionar um novo amigo, a lista exibe o nome duas vezes.
    * **Solução:** Certifique-se de que a função `exibirAmigos()` esteja limpando a lista (`listaAmigos.innerHTML = '';`) antes de adicionar os novos nomes.

* **Erro de "nomes.length < 2":**
    * **Problema:** Ao clicar em "Sortear Amigo" com menos de dois nomes na lista, o sorteio não funciona.
    * **Solução:** Adicione uma verificação dentro da função `sortearAmigo()` para garantir que haja pelo menos dois nomes no array `amigos` antes de realizar o sorteio.

## 11. Pessoas Contribuidoras

[Wesley]

## 12. Pessoas Desenvolvedoras

* [Wesley]

## 13. Licença

[[Badge de Licença](https://img.shields.io/badge/License-MIT-blue.svg)]
