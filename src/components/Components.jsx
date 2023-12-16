import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home3';
import AboutUs from './Pages/AboutUs';
import Gallery from './Pages/Gallery';
import ContactUs from './Pages/ContactUs';
import InteriorPainting from './Pages/InteriorPainting';
import ExteriorPainting from './Pages/ExteriorPainting';
import Cabinets from './Pages/Cabinets';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/aboutUs' exact component={AboutUs} />
                            <Route path='/contactUs' exact component={ContactUs} />
                            <Route path='/gallery' exact component={Gallery} />
                            <Route path='/interiorPainting' exact component={InteriorPainting} />
                            <Route path='/exteriorPainting' exact component={ExteriorPainting} />
                            <Route path='/cabinets' exact component={Cabinets} />
                            <Route component={Error} />
                            
                            <Route component={Error} />
                        </Switch>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;