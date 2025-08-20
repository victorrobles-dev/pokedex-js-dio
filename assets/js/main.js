const offset = 0
const limit = 10

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `<li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name"><b>${pokemon.name}</b></span>

                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>

                    <img src="${pokemon.sprites.other.dream_world.front_default}"
                        alt="${pokemon.name}">
                </div>
            </li>`
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

    const newList = pokemons.map((pokemon) => {
        return convertPokemonToLi(pokemon)
    })
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
   /* const listItems = []
    
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }
        console.log(listItems)
    }) */
  })