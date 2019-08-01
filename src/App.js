import React from 'react';
import './App.css';
import Login from  './components/Login/Login';
import Registration from "./components/Registration/Registration";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header/Header'
import Films from './components/Films/Films'
import RentFilms from "./components/RentFilms/RentFilms";
import Example from './components/Example/Example';
import ExampleRent from './components/ExampleRent/ExampleRent';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    updateData = (value) => {
        this.setState({
            name:value
        })
    }
    render() {
        console.log('name', this.state.name);
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={Login} exact />
                    <Route path="/about" render={() => <Registration updateData={this.updateData} />} />
                    <Route path="/films" component={Films} exact/>
                    <Route path="/rent" render={() => <RentFilms status={this.state.name} />} />
                    <Route path="/films/:id" component={Example} />
                    <Route path="/rented-film/:id" component={ExampleRent} />
                </div>
            </Router>
        );
    }

}

export default App;
