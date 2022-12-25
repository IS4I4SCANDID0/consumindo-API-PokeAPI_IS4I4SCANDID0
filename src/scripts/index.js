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

    console.log(getPokemonByName('metapod'))
    // console.log(name)
    return name

}

  
        
function renderSearch() {

    const searchInput = document.querySelector('.pokemonSearch')
    const searchIcon = document.querySelector('#search')
    
    searchIcon.addEventListener('click', () => {
    //    console.log('click')
        getPokemonByName(searchInput.value.toLowerCase())

    })
}
renderSearch()

    
    








//problema de renderizar um o card persite e ainda não encontrei nada no console, mas Deus vai me mostrar pra eu concertar  
// tentar fazer uma animação simples para ficar bonito


    
  
  


