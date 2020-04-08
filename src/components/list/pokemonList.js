import React from "react";

const PokemonList = ({loadPrevious, loadNext, displayArr, next, prev}) => {
    return (
        <div>
            {displayArr.map((pokemon) => (
                <div>{pokemon.name}</div>
            ))}
            {prev ? <button onClick={loadPrevious}>Previous</button> : <></>}
            {next ? <button onClick={loadNext}>Next</button> : <></>}
        </div>
    );
};

export default PokemonList;
