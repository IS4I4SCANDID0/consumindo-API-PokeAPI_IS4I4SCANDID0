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


async function showPokemonByName(pokemonName) {

    const nameSearch = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(response => {

            const find = response.species
            
            const pokemonUl = document.querySelector('.container--list')

            const newPokedex = find.url.slice(41, -1)
            
            pokemonUl.innerHTML = ''

            pokemonUl.insertAdjacentHTML('beforeend', `
                <li>
                    <img  
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${newPokedex}.png" 
                        alt=${find.name}>
                    <h2>${find.name}</h2>
                </li>        
            `)
            
        })
        

    return nameSearch
}
                  

async function renderSearch() {

    const searchInput = document.querySelector('.pokemonSearch')
    
    const searchIcon = document.querySelector('#search')
    
    searchIcon.addEventListener('click', (e) => {
        e.preventDefault()
            
        showPokemonByName(searchInput.value.toLocaleLowerCase())
        
    })
    
}
renderSearch()
        










                
                
                
                







                
                
//slice(41, -1) ou slice(42,-1)
                
                
                
                
                
                
                
                
                