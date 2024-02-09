// Retorne no console todas as imagens do site
const minhasImagens = document.querySelectorAll("img");

console.log(minhasImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const palavraImagem = document.querySelectorAll('img[src^="img/imagem"]');

console.log(palavraImagem);

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');

console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2animais = document.querySelector(".animais-descricao h2");
console.log(h2animais);

// Selecione o último p do site
const ultimoP = document.querySelectorAll("p");

console.log(ultimoP[ultimoP.length - 1]);

//----------------------------------------------
//Exercicio 002

// Mostre no console cada parágrado do site
const paragrafosTodos = document.querySelectorAll("p");
console.log(paragrafosTodos);

// Mostre o texto dos parágrafos no console

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach(item, (index) => {
    console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

imgs.forEach(() => i++);
