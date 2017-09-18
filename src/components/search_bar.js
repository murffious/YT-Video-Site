import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-wrapper">
        <i className="fa fa-bars" aria-hidden="true"></i>
        <div className="search-bar col-md-6">
          <div className="col-md-2">
        <span className="fa fa-search"></span>
        </div>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
      <div className="col-md-4"><i className="fa fa-cloud-upload" aria-hidden="true"></i> </div><img className="avatar" src="https://yt3.ggpht.com/-6jeduYjvVeY/AAAAAAAAAAI/AAAAAAAAAAA/qv95jAY4uro/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"/>
      
    </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;