import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import { useState } from 'react';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Header from './components/Header';
import Footer from './components/Footer';
import CommonBackGround from './components/CommonBackground';

import './App.css';

function App() {
	const [ articleCategory, setArticleCategory ] = useState('Articles');
	const [ article, setArticle ] = useState({});

	return (
		<Router>
			<CommonBackGround />
			<Header id="headerId" articleCategory={articleCategory} setArticleCategory={setArticleCategory} />
			<Route
				exact
				path={process.env.PUBLIC_URL + '/'}
				component={() => <Home setArticleCategory={setArticleCategory} />}
			/>
			<Route
				exact
				path={process.env.PUBLIC_URL + '/articles/:articleSection'}
				component={({ match }) => (
					<Articles
						articleCategory={articleCategory}
						setArticleCategory={setArticleCategory}
						setArticle={setArticle}
						match={match}
					/>
				)}
			/>
			<Route
				exact
				path={process.env.PUBLIC_URL + '/articles/:articleSection/:articleId'}
				component={({ match }) => <Article article={article} />}
			/>
			<Footer />
		</Router>
	);
}

export default App;
