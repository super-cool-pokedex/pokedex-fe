import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./pokemonList";
import Search from "./search";

const ListContainer = () => {
    //TODO: move pokeArr into a context store, put in/pull out of localStorage
    const [pokeArr, setPokeArr] = useState([]);
    const [displayArr, setDisplayArr] = useState([]);
    const [search, setSearch] = useState("");

    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon`)
            .then((res) => {
                setPokeArr(res.data.results);
                setDisplayArr(res.data.results);
                setNext(res.data.next);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const loadNext = () => {
        axios
            .get(`${next}`)
            .then((res) => {
                setPokeArr(res.data.results);
                setDisplayArr(res.data.results);
                setNext(res.data.next);
                setPrev(res.data.previous);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const loadPrevious = () => {
        axios
            .get(`${prev}`)
            .then((res) => {
                setPokeArr(res.data.results);
                setDisplayArr(res.data.results);
                setPrev(res.data.previous);
                setNext(res.data.next);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const searchChange = (e) => {
        const val = e.target.value;
        setSearch(val);
        setDisplayArr(
            pokeArr.filter((element) => {
                return element.name.includes(val);
            })
        );
    };

    return (
        <div>
            <Search search={search} searchChange={searchChange} />
            <PokemonList
                loadNext={loadNext}
                loadPrevious={loadPrevious}
                displayArr={displayArr}
                next={next}
                prev={prev}
            />
        </div>
    );
};

export default ListContainer;
