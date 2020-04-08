import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom"

//Components
import ListContainer from './list/listContainer'
import PokemonInfo from "./pokemonInfo/pokemonInfo"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <ListContainer />
            </Route>
            <Route 
                path={`/pokemon/:pokemonId`}
                component={PokemonInfo}
            />
        </Switch>
    )
}

export default Routes
