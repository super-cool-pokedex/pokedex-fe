import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
    const [pokeArr, setPokeArr] = useState([]);

    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon`)
            .then((res) => {
                setPokeArr(res.data.results);
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
                setPrev(res.data.previous);
                setNext(res.data.next);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="App">
            {pokeArr.map((pokemon) => (
                <div>{pokemon.name}</div>
            ))}
            {
                prev ? 
                <button onClick={loadPrevious}>Previous</button>
                :
                <></>
            }
            {
                next ?
                <button onClick={loadNext}>Next</button>
                :
                <></>
            }
        </div>
    );
}

export default App;
