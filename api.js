const axios = require('axios');

const fetchPokemom = async () => {
    const {data} = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/"
    );
    console.log(data);
};

fetchPokemom();