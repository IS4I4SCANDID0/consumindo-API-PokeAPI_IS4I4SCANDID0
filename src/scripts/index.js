async function delightAPI() {

    const load = document.querySelector('#loading')

    const PokemonAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            return response
        })
    // .catch(error => console.log(error))   

    load.innerHTML = ''

    load.classList.add('hidden')

    return PokemonAPI

}




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
// console.log(renderPokeList())





async function getPokemonByName(pokemonName) {

    const name = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => {

            const find = response.species
            
            console.log (find)
            // return response
        })

    return name
}

// preciso mesclar as funções de renderizar e de pesquisar para ter resultado, pq o response só é válido dentro do escopo do .them
// atualmente consegui acessar a chave 'species' q contém op nome e a url com imagens do pkemons  
async function renderSearch() {

    const searchInput = document.querySelector('.pokemonSearch')
    
    const searchIcon = document.querySelector('#search')
    
    searchIcon.addEventListener('click', (e) => {
        e.preventDefault()
            
        getPokemonByName(searchInput.value.toLocaleLowerCase())
    })
    
}

renderSearch()

    
   


// delightAPI()


                
                
                
                







                
                
//slice(41, -1) ou slice(42,-1)
                
// tenho que descobrir o poruqe a função getpokemonByName está retornando promessa{problema peersiste desde ontem}
//**ACHO Q RESOLVI ESSE PROBLEMA PQ NO CONSOLE NÃO MOSTRA NADA**
                
                
                
                
                
                
                
                