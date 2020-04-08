import React from "react";
import { Link } from "react-router-dom";

//Styles
import { pokemonListStyles } from "../../styles/";

const PokemonList = ({ loadPrevious, loadNext, displayArr, next, prev }) => {
    const classes = pokemonListStyles();

    return (
        <div>
            {displayArr.map((pokemon, index) => {
                const pokemonId = index + 1
                return (
                    <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/pokemon/${pokemonId}`}
                    >
                        <div className={classes.pokemon}>{pokemon.name}</div>
                    </Link>
                );
            })}
            {prev ? <button onClick={loadPrevious}>Previous</button> : <></>}
            {next ? <button onClick={loadNext}>Next</button> : <></>}
        </div>
    );
};

export default PokemonList;
