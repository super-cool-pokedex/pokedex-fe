import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

const PokemonInfo = () => {
    let { pokemonId } = useParams();

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(res => {
                console.log(res.data)
                setPokemon(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {
                pokemon 
                ? 
                    <>
                        <div>
                            {pokemon.name}
                        </div>
                        <div>
                            {pokemon.stats.map((stat) => (
                                <div key={stat.stat.name}>{stat.stat.name} : {stat.base_stat}</div>
                            ))}
                        </div>
                    </>
                :
                    <div>loading...</div>
            }
        </div>
    )
}

export default PokemonInfo
