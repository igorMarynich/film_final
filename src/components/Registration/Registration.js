import React from 'react';

export default class Registration extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            login: '',
            age: 0,
            telephone: '',
            auth: false
        }
    }

    handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })
    }

    handleSubmit = event =>{
        console.log('auth', this.state.auth);
        event.preventDefault();
        console.log('username : ' + this.state.username, typeof this.state.username);
        console.log('password : ' + this.state.password);
        console.log('login : ' + this.state.login);
        console.log('age : ' + this.state.age);
        console.log('telephone : ' + this.state.telephone);

        const url ='https://film-api-go.herokuapp.com/auth';
        const data_user = {
            username: this.state.username,
            password: this.state.password,
            login: this.state.login,
            age: Number(this.state.age),
            telephone: this.state.telephone
        };
        console.log('data_user.age', data_user.age, typeof data_user.age);

        // console.log('data_user', data_user, typeof data_user);

        fetch(url, {  method: 'POST',
            body: JSON.stringify(data_user),
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response =>
                    this.setState({
                        auth: response.success
                    })
                // console.log('Success:', response)
            );
            this.props.updateData(this.state.auth);
    }


    render(){
        console.log('auth', this.state.auth);
        return(
            <form onSubmit={this.handleSubmit}>
                username: <input type='text' name='username' onChange={this.handleChange} /><br />
                password: <input type='password' name='password' onChange={this.handleChange} /><br />
                login: <input type='text' name='login' onChange={this.handleChange} /><br />
                age: <input type='number' name='age' onChange={this.handleChange} /><br />
                telephone: <input type='text' name='telephone' onChange={this.handleChange} /><br />
                <input type='submit' value='Login' />
            </form>
        )
    }
}
