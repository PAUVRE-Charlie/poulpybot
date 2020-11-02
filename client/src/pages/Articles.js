import React, { useEffect, useState } from 'react';
import ArticleCategoryBox from '../components/ArticleCategoryBox';

import data from '../data';

import TitleSection from '../components/TitleSection';

export default function Articles({ match, articleCategory, setArticleCategory, setArticle }) {
	const [ articleSection, setArticleSection ] = useState('unknown');
	const [ articleSectionBefore, setArticleSectionBefore ] = useState('unknown');
	const [ articleSectionNext, setArticleSectionNext ] = useState('unknown');
	const [ articles, setArticles ] = useState([]);
	useEffect(
		() => {
			if (match.params.articleSection === data.articleSection.robot) {
				setArticleSection(data.articleSection.robot);
				setArticleSectionBefore(data.articleSection.sponsors);
				setArticleSectionNext(data.articleSection.coupe);
				setArticleCategory(data.articleSectionTitle.robot);
			} else if (match.params.articleSection === data.articleSection.coupe) {
				setArticleSection(data.articleSection.coupe);
				setArticleSectionBefore(data.articleSection.robot);
				setArticleSectionNext(data.articleSection.club);
				setArticleCategory(data.articleSectionTitle.coupe);
			} else if (match.params.articleSection === data.articleSection.club) {
				setArticleSection(data.articleSection.club);
				setArticleSectionBefore(data.articleSection.coupe);
				setArticleSectionNext(data.articleSection.sponsors);
				setArticleCategory(data.articleSectionTitle.club);
			} else if (match.params.articleSection === data.articleSection.sponsors) {
				setArticleSection(data.articleSection.sponsors);
				setArticleSectionBefore(data.articleSection.club);
				setArticleSectionNext(data.articleSection.robot);
				setArticleCategory(data.articleSectionTitle.sponsors);
			}

			setArticles(data.articles.filter((article) => article.category === articleSection));
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ match, articleCategory, articleSection ]
	);

	return (
		<div>
			<TitleSection title="Articles" />
			<div
				style={{
					width: '100vw'
				}}
			>
				<ArticleCategoryBox
					articleSectionBefore={articleSectionBefore}
					articleSectionNext={articleSectionNext}
					inverted={
						articleSection === data.articleSection.robot || articleSection === data.articleSection.club ? (
							true
						) : (
							false
						)
					}
					title={articleCategory}
					articles={articles}
					setArticle={setArticle}
				/>
			</div>
		</div>
	);
}
