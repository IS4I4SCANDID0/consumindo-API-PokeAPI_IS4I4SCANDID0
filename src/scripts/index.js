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

            // renderPokeList()

            return response
        })

    return name
}

// async function auxiliarySearch({ species }) {

//     const pokemonUl = document.querySelector('.container--list')

//     const numberOnPoke = species.url.slice(41, -1)

//     const auxliary = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${numberOnPoke}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'applicatio/json'
//         }
//             .them(response => response.json())
//             .them(response => {
//                 console.log(response)
//                 // getPokemonByName(searchInput.value.toLowerCase())

//                 return response
//             })

//     })

//     pokemonUl.innerHTML = ''

//     // renderPokeList()

//     pokemonUl.insertAdjacentHTML('beforeed', `
//             <li>
//                 <img  
//                     src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberOnPoke}.png" 
//                     alt=${get}>
//                 <h2>${searchInput.value.toLowerCase()}</h2>
//             </li> 

//         `)


//     return auxliary
// }
// auxiliarySearch(name, url)

function renderSearch() {

    const searchInput = document.querySelector('.pokemonSearch')
    const searchIcon = document.querySelector('#search')

    searchIcon.addEventListener('click', () => {

        getPokemonByName(searchInput.value.toLocaleLowerCase())

        // const getOnePokemon = species

        // const {name, url} = 



        // const pokemonUl = document.querySelector('.container--list')

        // pokemonUl.innerHTML = ''
        // renderPokeList(getPokemonByName())
        // renderPokeList()

        // pokemonUl.insertAdjacentHTML('beforeed', `
        //     <li>
        //         <img  
        //             src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberOnPokedex}.png" 
        //             alt=${searchInput.value}>
        //         <h2>${searchInput.value.toLowerCase()}</h2>
        //     </li> 

        // `)
    })
}
delightAPI()
renderSearch()




// console.log(renderSearch())





//slice(41, -1) ou slice(42,-1)

// tenho que descobrir o poruqe a função getpokemonByName está retornando promessa{problema peersiste desde ontem}
//**ACHO Q RESOLVI ESSE PROBLEMA PQ NO CONSOLE NÃO MOSTRA NADA**







