import React from "react";

const PokemonList = ({loadPrevious, loadNext, pokeArr, next, prev}) => {
    return (
        <div>
            {pokeArr.map((pokemon) => (
                <div>{pokemon.name}</div>
            ))}
            {prev ? <button onClick={loadPrevious}>Previous</button> : <></>}
            {next ? <button onClick={loadNext}>Next</button> : <></>}
        </div>
    );
};

export default PokemonList;
