import React from 'react';

class Example extends React.Component {
    state = {
        activeFilms: []
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log('film_id : ' + this.state.login);

        const url ='https://film-api-go.herokuapp.com/api/v1/finish';
        const data = {
            film_id: this.state.film_id,
        };

        fetch(url, {  method: 'POST',
            body: JSON.stringify(data),
            headers : {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTgyNDgxNzAsIm5hbWUiOiJsZW1waXkiLCJ1c2VyX2lkIjoxfQ.8O_rCqLSBnYaHsZph2Yp8JeV4wtQ_MHv3D5c_5_WTw8`
            }
        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));


    }

    componentDidMount = () => {
        fetch('https://film-api-go.herokuapp.com/api/v1/film')
            .then(response => response.json())
            .then((responseData) => {
                this.setState({
                    activeFilms: responseData.result[this.props.match.params.id - 1]
                });
            })


    }
    render() {
        console.log('active', this.state.activeFilms);
        return (
            <div>
                <h1>{this.state.activeFilms.name}</h1>
                <p>{this.state.activeFilms.year}</p>
                <h6>{this.state.activeFilms.added_at}</h6>
                <button onClick={this.handleSubmit}>Rent films</button>

            </div>

        );
    }
}
export default Example;
