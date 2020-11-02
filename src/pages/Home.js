import React, { useEffect, useState } from 'react';

import HomeBox from '../components/HomeBox';

import data from '../data';

export default function Home({ setArticleCategory }) {
	const [ heightIntro, setHeightIntro ] = useState(-1);

	useEffect(
		() => {
			const commonBackground = document.getElementById('commonBackgroundId');
			const header = document.getElementById('headerId');

			setArticleCategory('Articles');
			setHeightIntro(commonBackground.offsetHeight - header.offsetHeight);
		},
		[ setArticleCategory ]
	);

	window.onresize = function() {
		const commonBackground = document.getElementById('commonBackgroundId');
		const header = document.getElementById('headerId');
		setHeightIntro(commonBackground.offsetHeight - header.offsetHeight);
	};

	return (
		<div>
			<div style={{ position: 'relative', height: heightIntro === -1 ? '60vw' : heightIntro }}>
				<h1
					style={{
						position: 'relative',
						top: '25%',
						left: '5%',
						transform: 'translateY(-50%)',
						fontSize: '10vw',
						letterSpacing: '-0.5vw',
						fontFamily: "'Lora', serif",
						color: data.colors.kTitleColor,
						filter: 'drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.5))'
					}}
				>
					PoulpyBot
				</h1>
				<h5
					style={{
						position: 'absolute',
						bottom: '10%',
						left: '5%',
						fontFamily: "'Lora', serif",
						color: data.colors.kTitleColor,
						filter: 'drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.5))'
					}}
				>
					Construit par le club robotique de l'IMT Atlantique
				</h5>
			</div>
			<div style={{ position: 'relative' }}>
				<HomeBox
					src={data.images.electronique}
					title={data.articleSectionTitle.robot}
					inverted={false}
					articleCategory={data.articleSection.robot}
				/>
				<HomeBox
					src={data.images.coupe}
					title={data.articleSectionTitle.coupe}
					inverted={true}
					articleCategory={data.articleSection.coupe}
				/>
				<HomeBox
					src={data.images.club_nantes}
					title={data.articleSectionTitle.club}
					inverted={false}
					articleCategory={data.articleSection.club}
				/>
				<HomeBox
					src={data.images.lydia}
					title={data.articleSectionTitle.sponsors}
					inverted={true}
					articleCategory={data.articleSection.sponsors}
				/>
			</div>
		</div>
	);
}
