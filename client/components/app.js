import React from 'react';

import CompHeader from './CompHeader';
import CompPostsMain from './CompPostsMain';
import CompNewPost from './CompNewPost';

function App() {
	return (<div>
		<CompHeader />
		<br/>
		<CompPostsMain />
		<br/>
		<CompNewPost />
	</div>);
}

export default App;
