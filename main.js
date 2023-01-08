function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}
// Aqui a função tocaSom recebe o id de um elemento,
// que será buscado pela função querySelector
// e então reproduzido com a função play

const listaDeTeclas = document.querySelectorAll('.tecla')

// referência/variavel declarada para criar
// uma lista de elementos com a classe .tecla
// servirá para identificar e fornecer a lista de teclas disponíveis

let contador = 0

// referência criada para contabilizar a repetição em "while" (enquanto)
// até que passe por todos os itens da lista de teclas

while (contador < listaDeTeclas.length) {
// enquanto 0 < 9, reproduzir comandos abaixo

    listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_pom')
    };
    // lista de elementos [indice].ação = recebe função anônima
    // função anônima declara uma nova função, assim não executada de imediato
    // nesta nova função, chama a função esperada com parâmetro desejado

    contador = contador + 1

    // para finalizar, a referência de contagem adiciona em 1 o contador
    // até que
    console.log(contador)
}