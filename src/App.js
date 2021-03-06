import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
    faBars,
    faBrush,
    faCode,
    faDatabase,
    faDownload,
    faObjectUngroup,
    faPaintBrush,
    faPaperPlane,
    faTimes,
    faArrowAltCircleRight,
    faArrowAltCircleLeft
} from '@fortawesome/free-solid-svg-icons';

import Header from "./components/Header";
import Announcement from "./components/Announcement";
import "./scss/App.css";
import Content from "./components/Content";
import About from "./views/About";
import Services from "./views/Services";
import Footer from "./components/Footer";
import Contact from "./views/Contact";
import Articles from "./views/Articles";

library.add(fab, faBars, faDownload, faPaperPlane, faTimes, faPaintBrush, faCode, faObjectUngroup, faBrush, faDatabase,
    faArrowAltCircleLeft, faArrowAltCircleRight);

class App extends Component {

    render() {
        const announcement = "This website has been updated to cchris.netlify.app";
        return (
            <Fragment>
                <Router>
                   <Announcement message={announcement} />
                    <Switch>
                        <Route exact path="/articles" component={Articles}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/services" render={props => (
                            <Fragment>
                                <Header />
                                <Services/>
                            </Fragment>
                        )}/>
                        <Route exact path="/" render={props => (
                            <Fragment>
                                <Header />
                                <Content/>
                            </Fragment>
                        )}/>
                    </Switch>
                    <Footer/>
                </Router>
            </Fragment>
        );
    }

}

export default App;
