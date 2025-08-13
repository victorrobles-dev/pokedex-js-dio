const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name"><b>${pokemon.name}</b></span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                        alt="${pokemon.name}">
                </div>
            </li>`
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

    const newList = pokemons.map((pokemon) => {
        return convertPokemonToLi(pokemon)
    })

        const newHtml = newList.join('')

        pokemonList.innerHTML += newHtml
   /* const listItems = []

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }
        console.log(listItems)
    }) */
  })