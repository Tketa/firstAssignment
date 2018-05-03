import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false
    }
    this.onViewDetailClick = this.onViewDetailClick.bind(this);
  }

  onViewDetailClick() {
    this.setState({
      showDetail: !this.state.showDetail
    });
  }

  render() {
    return (
      <div className="card mb-4 box-shadow">
        <img
          className="card-img-top"
          data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
          alt="Thumbnail [100%x225]"
          style={{ height: "225px", width: "100%", display: "block" }}
          src={`https://image.tmdb.org/t/p/w342/${this.props.poster_path}`}
          data-holder-rendered="true" />
        <div className="card-body">
        <h5 className="card-title">{this.props.title}</h5>
          <button onClick={this.onViewDetailClick} type="button" className="btn btn-sm btn-primary" data-toggle="collapse" data-target={'#' + this.props.id}>{this.state.showDetail ? 'Hide Detail' : 'Show Detail'}</button>
          <div id={this.props.id} className="collapse">
            <p className="card-text">{this.props.overview}</p>
            <small className="text-muted">{`Release Date: ${this.props.release_date}`}</small>
          </div>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  id: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
}

export default Movie;
