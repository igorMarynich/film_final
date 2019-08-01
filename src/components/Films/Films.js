import React from 'react';
import {Link} from "react-router-dom";

class Films extends React.Component {

    state = {
        data: [],
        url: 'https://film-api-go.herokuapp.com/api/v1/film',
        limit: 0,
        offset: 0,
        genre: 0,
        year: 0,
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
        console.log('limit: ' + this.state.limit);
        console.log('offset ' + this.state.offset);
        console.log('genre ' + this.state.genre);
        console.log('year ' + this.state.year);

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

    render() {
        console.log('data', this.state.data);
        const films = this.state.data;
        console.log('films', films);
        const listItems = films.map((film) =>
            <div key={film.id}>
                <h1>{film.name}</h1>
                <p>{film.year}</p>
                <button>
                    <Link to={{ pathname: `/films/${film.id}`}}>
                        View
                    </Link>
                </button>
            </div>
        );
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Количество фильмов: <input type='text' name='limit' onChange={this.handleChange} /><br />
                    Размер отступов: <input type='text' name='offset' onChange={this.handleChange} /><br />
                    Год выпуска: <input type='text' name='year' onChange={this.handleChange} /><br />
                    Жанр фильма: <input type='text' name='genre' onChange={this.handleChange} /><br />
                    <input type='submit' value='Search' />
                </form>
                <div>{listItems}</div>
            </div>


        );
    }
}

export default Films;
