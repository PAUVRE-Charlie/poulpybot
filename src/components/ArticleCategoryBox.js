import React from 'react';
import { Link } from 'react-router-dom';

import data from '../data';
import ArticleCard from './ArticleCard';

export default function ArticleCategoryBox({
	title,
	articleSectionBefore,
	articleSectionNext,
	inverted,
	articles,
	setArticle
}) {
	return (
		<div
			style={{
				display: 'flex',
				background: inverted ? data.colors.kSecondaryColor : data.colors.kPrimaryColor,
				width: '100%',
				height: '100%',
				alignItems: 'center'
			}}
		>
			<Link to={process.env.PUBLIC_URL + '/articles/' + articleSectionBefore}>
				<img
					src={data.icons.arrowLeft}
					alt="arrow_right"
					className="arrowCategory scaleDownAndReset"
					style={{
						filter: inverted ? data.colors.kPrimaryColor : data.colors.kSecondaryColor
					}}
				/>
			</Link>
			<div
				style={{
					display: 'flex',
					flex: '1',
					height: '100%',
					flexDirection: inverted ? 'row' : 'row-reverse',
					alignItems: 'center',
					flexWrap: 'wrap',
					justifyContent: 'space-around'
				}}
			>
				<p
					className="articleCategoryTitle"
					style={{
						color: inverted ? data.colors.kPrimaryColor : data.colors.kSecondaryColor
					}}
				>
					{title}
				</p>
				<div
					style={{
						margin: '3rem 0'
					}}
				>
					{articles &&
						articles.map((article) => {
							return <ArticleCard article={article} setArticle={setArticle} />;
						})}
				</div>
			</div>
			<Link to={process.env.PUBLIC_URL + '/articles/' + articleSectionNext}>
				<img
					src={data.icons.arrowRight}
					alt="arrow_right"
					className="arrowCategory scaleDownAndReset"
					style={{
						color: inverted ? data.colors.kPrimaryColor : data.colors.kSecondaryColor
					}}
				/>
			</Link>
		</div>
	);
}
