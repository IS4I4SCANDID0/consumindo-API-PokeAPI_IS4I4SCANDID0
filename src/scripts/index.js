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
    
    // renderPokeSection()
    
    .catch(error => console.log(error))   
    
    load.innerHTML = ''

    load.classList.add('hidden')
    
    return PokemonAPI
    
}
delightAPI()
    


async function renderPokeList() {

    const pokemonUl = document.querySelector('.container--list')
    
    const pokemonList = await delightAPI()

    pokemonList.results.forEach(pokemon => {

        const numberOnPokedex = pokemon.url.slice(34, -1)

        pokemonUl.insertAdjacentHTML('beforeend', `
            <li>
                <img  
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberOnPokedex}.png" 
                    alt=${pokemon.name}>
                <h2>${pokemon.name}</h2>
            </li>        
        `)
    })
                    
}                
renderPokeList()  
        


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
       console.log(searchIcon)
        getPokemonByName(searchInput.value.toLowerCase())

        // const pok = getPokemonByName()
        // console.log(pok)
    })

    // const pkm = renderSearch()
    // console.log(pkm)
}
renderSearch

    
    








// falta rederizar a pesquisa de nome no input 
//[hipótese o ícone de pesquisa está causando conflito, pq ele é o responsável por renserizar todos]

// dar uma olhada na função de renderSearch, 
// tentar fazer uma animação simples para ficar bonito


    
  
  


