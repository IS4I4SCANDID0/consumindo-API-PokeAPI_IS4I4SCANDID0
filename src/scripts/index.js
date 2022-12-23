async function renderPokeSection(){

    const pokemonList = document.querySelector('.container--list') 
    
    const pokemons = await delightAPI()
    
    pokemonList.innerHTML = ''
    
    pokemons.results.forEach(pokemon => {

        const poke = createPokeSection(pokemon)
    
        pokemonList.appendChild(poke)
    })
}
renderPokeSection()

function createPokeSection (pokemon){
    const listPoke = document.createElement('li')
    const liDiv = document.createElement('div')   
    
    const numberOnPokedex = pokemon.url.slice(34, -1)
    
    const image = document.createElement('img')
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberOnPokedex}.png` 
    image.alt = `${pokemon.name}`
    image.classList.add('pokemons')
    liDiv.appendChild(image)

    const text = document.createElement('h2')
    text.innerText = `${pokemon.name}`   

    listPoke.append(liDiv, text)

    return listPoke
}





async function delightAPI(){
    
    const load = document.querySelector('#loading')
    
    const PokemonAPI = await fetch(`https://pokeapi.co/api/v2/pokemon`, {
        method: 'GET' ,
        headers: {
            'Content-type': 'application/json'
        }
    })

    .then(
        response => response.json()
        )
    
        .then(
        response => response 
    )
    
    .catch(
        error => console.log(error)
        )    
        
        load.classList.add('hidden')
        
        return PokemonAPI
    
}
delightAPI()


    
  
  


async function getPokemonByName(pokemonName){

    const pokeName = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
        method:'GET' ,
        headers: {
            'Content-Type': 'application/json'
        }
    }) 
    .then(response => response.json())
    .then(response => {
        
        renderPokeSection(response)
        return response
    })
    
    return pokeName
}


function renderSearch() {

    const searchInput = document.querySelector('input')
    const searchIcon = document.querySelector('.search')
    
    searchIcon.addEventListener('click', () => {

        getPokemonByName(searchInput.value.toLowerCase().trim())
    })
}

console.log(getPokemonByName())

conlose.log(renderSearch())

// funçãop getPokemonByName está retornando em promessa, tem q ser convertida em realidade kkkkk.
// brinks tem que ser convertida em objeto JavaScript
// dar uma olhada na função de renderSearch, 
// tentar fazer uma animação simples para ficar bonito