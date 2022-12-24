async function renderPokeSection(){

    const pokemonList = document.querySelector('.container--list') 
    
    const pokemons = await delightAPI()
    
    pokemonList.innerHTML = ''
    
    pokemons.results.forEach(pokemon => {
        
        const poke = createPokeSection(pokemon)
        
        pokemonList.appendChild(poke)
        
    
    })
    
}




function createPokeSection (pokemon){
    // console.log(pokemon)
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
   

    const PokemonAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })

    .then(response => response.json())
        
    .then(response => response) 

    renderPokeSection()
        
    .catch(error => console.log(error))   
    
    return PokemonAPI
    
}



    


async function getPokemonByName(pokemonName){
    
    const name = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }) 
    
    .then(response => response.json())
    
    .then(response => {

        // console.log(response)
        return(response)
    })
    // console.log(name)
    return name

}

  
        
function renderSearch() {

    const searchInput = document.querySelector('input')
    const searchIcon = document.querySelector('#search')
    
    searchIcon.addEventListener('click', () => {
       
        getPokemonByName(searchInput.value.toLowerCase())
       
    })

    // const pk = getPokemonByName("metapod")
    // console.log(pk)
}

renderSearch()

delightAPI()





// falta rederizar a pesquisa de nome no input 
//[hipótese o ícone de pesquisa está causando conflito, pq ele é o responsável por renserizar todos]

// dar uma olhada na função de renderSearch, 
// tentar fazer uma animação simples para ficar bonito


    
  
  


