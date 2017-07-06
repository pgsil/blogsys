import React from 'react';
import { StaticRouter as Router, Route } from 'react-router-dom';

import routes from './routes';

import CompHeader from './CompHeader';
import CompPostsMain from './CompPostsMain';
import CompNewPost from './CompNewPost';
import CompPostDetail from './CompPostDetail';

function AppServer() {
	return (<div>
			{routes}	
		</div>
	);
}

export default AppServer;
