import React from 'react';

import TitleSection from '../components/TitleSection';

import data from '../data';

export default function Article({ article }) {
	console.log(article);
	return (
		<div>
			<TitleSection title={article.title} subtitle={'Ecrit par ' + article.author} />
			<div style={{ background: data.colors.kSecondaryColor, textAlign: 'justify', padding: '10vw' }}>
				{article.body}
			</div>
		</div>
	);
}
