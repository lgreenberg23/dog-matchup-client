import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer'



ReactDOM.render(
	<Router>
		<div>
			<App />
			<Footer />
		</div>
	</Router>, document.getElementById('root'));
registerServiceWorker();
