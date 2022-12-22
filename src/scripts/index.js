function renderPokeSection(pokemons){

    const pkemonList = document.querySelector('.container--list') 

    pokemons.forEach(pokemon => {
        
        const poke = createPokeSection(pokemon)
        
        pkemonList.appendChild(poke)
    })
}


// function createPokeSection (pokemon){}