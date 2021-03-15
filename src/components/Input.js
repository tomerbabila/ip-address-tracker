import React from 'react';
import IconArrow from '../images/icon-arrow.svg';

function Input() {
  return (
    <div className='input-container'>
      <input
        type='text'
        className='input'
        placeholder='Search for any IP address or domain'
      />
      <button className='button'>
        <img src={IconArrow} alt='icon-arrow' />
      </button>
    </div>
  );
}

export default Input;
