import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Products } from '../layout/views/products/Products';
import { Search } from '../layout/views/search/Search';
import { Navbar } from '../layout/views/ui/Navbar';


export const AppRouter = () => {
    return (
        <Router>

            <Navbar />

            <div className="container mt-2">
                <Switch>                    
                    <Route exact path="/minicatalogo/search" component={Search} />
                    <Route exact path="/minicatalogo" component={Products} />
                    <Redirect to="/minicatalogo"/>
                </Switch>
            </div>
        </Router>
    )
}
