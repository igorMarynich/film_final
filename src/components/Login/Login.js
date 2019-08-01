import React from 'react';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            login:'',
            password:'',
        }
    }

    handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log('User name : ' + this.state.login);
        console.log('User Email : ' + this.state.password);

        const url ='https://film-api-go.herokuapp.com/login';
        const data = {
            login: this.state.login,
            password: this.state.password
        };

        fetch(url, {  method: 'POST',
                          body: JSON.stringify(data),
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    .then(res => res.json())
            .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response)); }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                Login: <input type='text' name='login' onChange={this.handleChange} /><br />
                Password: <input type='password' name='password' onChange={this.handleChange} /><br />
                <input type='submit' value='Login' />
            </form>
        )
    }
}
