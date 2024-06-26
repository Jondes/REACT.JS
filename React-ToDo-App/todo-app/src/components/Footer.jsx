import React from 'react';

const date = new Date();

const Footer = () => {
  return (
    <footer>
        <p>@copyright {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer
