import React, { Component } from 'react';
import logo from './../logo.svg';
import Movie from './Movie';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const movies = this.props.movies && this.props.movies.results.map((item, idx) => {
            if (idx % 2 == 0) {
                const next = this.props.movies.results[idx + 1];
                const row = (
                    <div key={`${item.id}${next ? next.id : ''}`} className="row" style={{ marginBottom: '10px' }}>
                        <div className="col-md-6">
                            <Movie {...item} />
                        </div>
                        {next &&
                            <div className="col-md-6">
                                <Movie {...next} />
                            </div>
                        }
                    </div>
                );
                return row;
            }
            return undefined;
        });
        return (
            <div>
                <img src={logo}
                    className="App-logo"
                    alt="logo"
                    hidden={!this.props.loading} />
                <ul style={{ width: "50%", marginLeft: "25%" }}>

                    {movies}
                </ul>
            </div>
        );
    }
}

export default MovieList;
