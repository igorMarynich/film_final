import React from 'react';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "Commando",
            year: 1990,
            genres: 'drama',
            data: [],
            url: 'https://film-api-go.herokuapp.com/api/v1/film',
            limit: 0,
            offset: 0,
            genre: 0,
        }
    }

    componentDidMount = () => {
        fetch(this.state.url)
            .then(response => response.json())
            .then((responseData) => {
                this.setState({
                    data: responseData.result
                });
            })


    }

    handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log('name : ' + this.state.name);
        console.log('year : ' + this.state.year);
        console.log('genres :' + this.state.genres);

        const url ='https://film-api-go.herokuapp.com/api/v1/film';
        const data = {
            name: this.state.name,
            year: this.state.year,
            genres: this.state.genres
        };

        fetch(url, {  method: 'POST',
            body: JSON.stringify(data),
            headers : {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTgyNDgxNzAsIm5hbWUiOiJsZW1waXkiLCJ1c2VyX2lkIjoxfQ.8O_rCqLSBnYaHsZph2Yp8JeV4wtQ_MHv3D5c_5_WTw8`
            }
        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(res => console.log('Success:', res));
        if(this.state.limit !== 0 && this.state.offset !== 0) {
            this.setState({
                ///?limit=5
                url: this.state.url+`?limit=${this.state.limit}`+`&offset=${this.state.offset}`
            })
            console.log('url', this.state.url);
            fetch(this.state.url)
                .then(response => response.json())
                .then((responseData) => {
                    this.setState({
                        data: responseData.result
                    });
                })

        } else if(this.state.genre !== 0 && this.state.year !== 0) {

            this.setState({
                ///?limit=5
                url: this.state.url+`?genre=${this.state.genre}`+`&year=${this.state.year}`
            })
            console.log('url', this.state.url);
            fetch(this.state.url)
                .then(response => response.json())
                .then((responseData) => {
                    this.setState({
                        data: responseData.result
                    });
                })
        }
    }


    render(){
        return(
            <div>
                <h1>Вы успешно зарегистрировались</h1>
                <form onSubmit={this.handleSubmit}>
                    name: <input type='text' name='login' onChange={this.handleChange} /><br />
                    year: <input type='number' name='year' onChange={this.handleChange} /><br />
                    genres: <input type='text' name='genres' onChange={this.handleChange} /><br />
                    <input type='submit' value='Add film' />
                </form><br />

                <form onSubmit={this.handleSubmit}>
                    Количество фильмов: <input type='text' name='limit' onChange={this.handleChange} /><br />
                    Размер отступов: <input type='text' name='offset' onChange={this.handleChange} /><br />
                    Год выпуска: <input type='text' name='year' onChange={this.handleChange} /><br />
                    Жанр фильма: <input type='text' name='genre' onChange={this.handleChange} /><br />
                    <input type='submit' value='Search' />
                </form>
                <h1>{this.state.name}</h1>
                <p>{this.state.year}</p>
                <h5>{this.state.genres}</h5>
            </div>


        )
    }
}
