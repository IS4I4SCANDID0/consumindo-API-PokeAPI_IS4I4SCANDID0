async function renderPokeSection(pokemons){

    const pkemonList = document.querySelector('.container--list') 

    // pkemonList.innerHTML = ''

    pokemons.forEach(pokemon => {
        
        const poke = //createPokeSection(pokemon)
        
        pkemonList.appendChild(poke)
    })
}


function createPokeSection (pokemon){

    const listPoke = document.createElement('li')
    const liDiv = document.createElement('div')   
    
    const numberOnPokedex = pokemon
    const image = document.createElement('img')
    image.src = 
    image.alt = `${pokemon.name}`
    liDiv.appendChild(image)

    const text = document.createElement('h2')
    text.innerText = `${pokemon.name}`   

    // listPoke.
}