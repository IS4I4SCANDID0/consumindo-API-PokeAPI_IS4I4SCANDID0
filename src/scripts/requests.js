// async function delightAPI() {

//     const load = document.querySelector('#loading')

//     const PokemonAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json'
//         }
//     })

//     .then(response => response.json())

//     .then(response => {

//         return response
//     })
//     // .catch(error => console.log(error))   

//     load.innerHTML = ''

//     load.classList.add('hidden')

//     return PokemonAPI

// }
// delightAPI ()