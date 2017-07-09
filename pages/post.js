import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/MyLayout.js';

const Post =  (props) => (
    <Layout>
      <div className="CompPostsMain container push has-text-centered CompPostFeatured">      
        <div className="CompPostFeatured-title">{props.postdata.title}</div>
        <div className="CompPostFeatured-subtitle">{props.postdata.subtitle}</div>

        <img src={props.postdata.imgurl} alt="ayy" />

        <div className="CompPostFeatured-spacer">&nbsp;</div>

        <div className="CompPostFeatured-subtitle2">{props.postdata.subtitle2}</div>

        <div className="CompPostFeatured-body">{props.postdata.body}</div>
      </div>
    </Layout>
);

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch("http://localhost:3000/api/getposts");
  const data = await res.json();

  const index = context.query.id;

  const postdata = data.posts[index];

  return { postdata }
};

export default Post