import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom"
import ListContainer from './list/listContainer'

const Routes = () => {
    return (
        <Switch>
            <Route path="/">
                <ListContainer />
            </Route>
        </Switch>
    )
}

export default Routes
