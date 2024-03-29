import React from 'react';


function Link({ href, icon }) {
    return (
      <a href={href}>
        <img src={icon} alt="Icon" />
      </a>
    );
  }

export default Link;
