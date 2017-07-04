import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import CompHeader from './CompHeader';
import CompPostsMain from './CompPostsMain';
import CompNewPost from './CompNewPost';

/*<CompNewPost />*/

function App() {
	return (
		<Router>
			<div>
				<div className="header">
					<Route path="/" component={CompHeader}/>
				</div>
				<Route exact path="/" component={CompPostsMain} />
				<Route exact path="/newpost" component={CompNewPost} />
			</div>
		</Router>
	);
}

export default App;
