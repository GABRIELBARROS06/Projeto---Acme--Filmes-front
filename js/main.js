'use strict'

import { getFilme, getFilmes } from "./filmes.js"

function criarCards(filme){
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = filme.foto_capa
    img.classList.add('capa')

    card.append(img)
    return card    
}

async function mostrarCards(){
    const container = document.getElementById('container')
    const container2 = document.getElementById('container2')
    const filmes = await getFilmes()


    filmes.forEach(filme => {
        const card = criarCards(filme)
        container.appendChild(card)
        console.log(card)        
    });

    filmes.forEach(filme => {
        const card = criarCards(filme)
        container2.appendChild(card)
        console.log(card)        
    });
}

mostrarCards();