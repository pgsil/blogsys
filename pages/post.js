/*import React, { Component } from 'react';

import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout>
       <h1>{props.result.title}</h1>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch("http://localhost:3000/api/getposts");
  const data = await res.json();

  const index = context.query.id;

  let result = data.posts[index];

  console.log(result.title)

  return { result }
}

export default Post*/

import React, { Component } from 'react';

import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout>
      <div className="container">
       <div className="CompPost-title">{props.postdata.title}</div>
       <div className="CompPost-subtitle">{props.postdata.subtitle}</div>

       <img src={props.postdata.imgurl} alt="ayy" />

       <div className="CompPost-spacer">&nbsp;</div>

       <div className="CompPost-subtitle2">{props.postdata.subtitle2}</div>

       <div className="CompPost-body">{props.postdata.body}</div>
     </div>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch("http://localhost:3000/api/getposts");
  const data = await res.json();

  const index = context.query.id;

  const postdata = data.posts[index];

  return { postdata }
}

export default Post