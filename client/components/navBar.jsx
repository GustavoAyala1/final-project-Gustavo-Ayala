import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      search: null
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    location.hash = '#search';

  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
      <nav className='navBar'>
        <div className='title half'>
          <a className='appTitle' href='#'>APP NAME</a>
          <a className='favorites' href='#favorites'>Favorites</a>
        </div>
        <div className='half formDiv'>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder='SEARCH' onChange={this.handleChange} name='search' required className='inputField'/>
            <button className='searchBtn'>Search</button>
            </form>
        </div>
      </nav>
      </>
    );
  }
}
