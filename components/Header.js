import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
    <div>
        <Link as="/page/0" href="/page?page=0">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header