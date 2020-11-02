import React from 'react';
import { Link } from 'react-router-dom';

import data from '../data';

export default function ArticleCard({ article, setArticle }) {
	return (
		<Link
			className="scaleDownAndReset"
			to={'/articles/' + article.category + '/' + article.title}
			onClick={() => setArticle(article)}
			style={{
				height: '7rem',
				padding: '1rem',
				margin: '0.5rem 0',
				textAlign: 'justify',
				display: 'flex',
				maxWidth: '35rem',
				background: data.colors.kCardBackgroundColor
			}}
		>
			<div style={{ width: '20%', height: '100%' }}>
				<img
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					src={article.image}
					alt="articleImage"
				/>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					flex: '1',
					overflow: 'hidden',
					marginLeft: '0.5rem',
					color: data.colors.kFooterBackground
				}}
			>
				<span style={{ fontWeight: 'bold' }}>{article.title}</span>
				<p style={{ fontSize: '0.8rem' }}>{article.body}</p>
			</div>
		</Link>
	);
}
