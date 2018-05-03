import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './../logo.svg';
import Movie from './Movie';

const styles=  {
    row: {
        marginBottom: '10px'
    },
    list: {
        width: "50%",
        marginLeft: "25%"
    }
}

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
                    <div key={`${item.id}${next ? next.id : ''}`} className="row" style={styles.row}>
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
                <ul style={styles.list}>
                    {movies}
                </ul>
            </div>
        );
    }
}

MovieList.propTypes = {
    movies: PropTypes.shape({
        results: PropTypes.array,
    }),
    loading: PropTypes.bool,
}

export default MovieList;
