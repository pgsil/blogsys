import Header from './Header';
import React from 'react';
import Head from 'next/head';


const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>	 
    <Header />
    {props.children}
  </div>
)

export default Layout;