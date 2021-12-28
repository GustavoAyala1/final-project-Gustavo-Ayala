import React from 'react';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
  }

  handleFetch() {
    // console.log('hi');
  }

  render() {
    return <div className='homeDiv'>
      <div className='homeRow '>
        <div className='mainHome'></div>
      </div>
      <div className='homeRow bodyRow'>
        <div className='greyBox'></div>
        <div className='greyBox'></div>
        <div className='greyBox'></div>
        <div className='greyBox'></div>
      </div>
      <div className='homeRow bodyRow'>
        <div className='greyBox'></div>
        <div className='greyBox'></div>
        <div className='greyBox'></div>
        <div className='greyBox'></div>
      </div>
      <div className='homeRow bodyRow'>
        <div className='greyBox'></div>
        <div className='greyBox'></div>
        <div className='greyBox'></div>
        <div className='greyBox'></div>
      </div>
    </div>;
  }
}
