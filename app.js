//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = []
function adicionarAmigo() {
  // Obtém o elemento de input e a lista
  let inputNome = document.getElementById('amigo')
  let listaAmigos = document.getElementById('listaAmigos')

  // Obtém o valor digitado
  let novoAmigo = inputNome.value

  if (novoAmigo === '') {
    alert('Por favor, insira um nome!')
    return
    exibiramigos()
  }

  // Adiciona o novo item à lista
  amigos.push(novoAmigo)

  // Cria um novo elemento de lista
  let novoItem = document.createElement('li')
  novoItem.textContent = novoAmigo

  // Limpa o campo de texto
  inputNome.value = ''

  exibiramigos()
}
function sortearAmigo() {
  const listaAmigos = document.getElementById('listaAmigos')

  const nomes = Array.from(listaAmigos.children).map(li => li.textContent)
  console.log(nomes)
  // Verifica se há pelo menos dois nomes
  if (nomes.length < 2) {
    alert('Adicione pelo menos dois nomes para realizar o sorteio.')
    return
  }

  // Sorteia um nome aleatório e exibe o resultado
  const sorteado = nomes[Math.floor(Math.random() * nomes.length)]
  const resultado = document.getElementById('resultado')
  resultado.textContent = `O amigo secreto é: ${sorteado}`
}

function exibiramigos() {
  const listaAmigos = document.getElementById('listaAmigos')

  // Limpa a lista existente
  listaAmigos.innerHTML = '' // Linha adicionada

  // Percorre o array amigos e adiciona cada nome como um elemento <li>
  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i]
    const novoItem = document.createElement('li')
    novoItem.textContent = amigo
    listaAmigos.appendChild(novoItem)
  }
}
