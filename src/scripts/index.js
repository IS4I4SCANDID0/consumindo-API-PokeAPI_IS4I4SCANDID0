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


async function delightAPI () {
    
    const load = document.querySelector('#loading')
    load.classList.add('hidden')

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
    
    return PokemonAPI
}

async function getPokemonByName(pokemonName){

    const pokeName = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
        method:'GET' ,
        headers: {
            'Content-type' : 'application/json'
        }
    }) 
    .then(response => response.json())
    .then(response => {
        return response
    })
    
    return pokeName
}
renderPokeSection()
// getPokemonByName('')

// a resposta para a entrega está aqui
//  || 
//  \/

//https://demos-kenzie-academy-brasil.s3.amazonaws.com/set22/m2/Sprint_5/m2-turma15-sprint5-demo3.mp4