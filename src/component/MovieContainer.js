import React, { Component } from 'react';
import logo from './../logo.svg';
import fetchJsonp from 'fetch-jsonp';
import MovieList from './MovieList';

class MovieContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.loadData = this.loadData.bind(this);
        this.refreshData = this.refreshData.bind(this);
        this.getNowPlayingData = this.getNowPlayingData.bind(this);
    }

    componentWillMount() {
        this.loadData();
    }

    refreshData() {
        this.setState({
            movies: null
        });
        this.loadData(this.state.inputValue);
    }

    getNowPlayingData() {
        this.setState({
            movies: null,
            inputValue: ''
        });
        this.loadData();
    }

    loadData(query) {
        this.setState({
            loading: true
        });
        let url = (query && query.trim() != '') ? `https://api.themoviedb.org/3/search/movie?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&query=${query}` : `https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`;
        // setTimeout(() => {
        fetchJsonp(url)
            .then((data) => {
                return data.json();
            }).then((json) => {
                this.setState({
                    movies: json,
                    loading: false
                })
            });
        // }, 2000);
    }

    updateInputValue(evt) {
        this.loadData(evt.target.value);
        this.setState({
            inputValue: evt.target.value,
            movies: null
        });
    }

    searchData() {
        this.setState({
            movies: null
        });
        this.loadData(this.state.inputValue);
    }

    render() {
        const movies = this.state.movies;
        return (
            <div className="container-fluid">
                <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col-md-12">
                        <div className="form-label-group">
                            <input value={this.state.inputValue} placeholder="Name" className="form-control" onChange={evt => this.updateInputValue(evt)} />
                             <button onClick={this.refreshData}>Refresh</button>
                        <button onClick={this.getNowPlayingData}>Now Playing</button> 
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <MovieList movies={movies} loading={this.state.loading} />
                        </div>
                    </div>
                </div>
            
        );
    }
}

export default MovieContainer;
