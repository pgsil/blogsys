import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CompHeader from './CompHeader';
import CompPostsMain from './CompPostsMain';
import CompNewPost from './CompNewPost';
import CompPostDetail from './CompPostDetail';

function App() {
	return (
		<Router history={ history }>
			<div>				
				<Route path="/" component={CompHeader}/>				
				
				<Route exact path="/" component={CompPostsMain} />
				<Route exact path="/page/:page" component={CompPostsMain} />	
				<Route exact path="/newpost" component={CompNewPost} />

				<Route exact path="/viewpost/:index" component={CompPostDetail} />
			</div>			
		</Router>
	);
}

export default App;
