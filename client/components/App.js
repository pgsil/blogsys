import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CompHeader from './CompHeader';
import CompPostsMain from './CompPostsMain';
import CompNewPost from './CompNewPost';

function App() {
	return (
		<Router>
			<div>				
				<Route path="/" component={CompHeader}/>
				
				<Route exact path="/" component={CompPostsMain} />
				<Route exact path="/newpost" component={CompNewPost} />
			</div>
		</Router>
	);
}

export default App;
