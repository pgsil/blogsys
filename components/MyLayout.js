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
	  <Head>

	  <title>Blogsys</title>
	  
	  <link rel="stylesheet" type="text/css" href="/static/css/bulma.min.css"/>
	          <link rel="stylesheet" type="text/css" href="/static/css/pushy.css"/>

	          <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet"/>
	          <link rel="stylesheet" type="text/css" href="/static/css/font-awesome.min.css"/>

	          <link rel="stylesheet" type="text/css" href="/static/css/styles.css"/>
	  </Head>
    <Header />
    {props.children}
  </div>
)

export default Layout;