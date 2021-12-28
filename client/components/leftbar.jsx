import React from 'react';

export default class LeftBar extends React.Component {
  render() {
    const arrayPics = ['city1', 'city2', 'ocean1', 'ocean2', 'desert1', 'desert2'];
    const random = arrayPics[Math.floor(Math.random() * arrayPics.length)];
    return <div className='leftBar'>
      <img src={`images/${random}.jfif`} alt="" />
    </div>;
  }
}
