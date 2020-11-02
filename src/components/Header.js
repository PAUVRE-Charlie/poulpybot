import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SocialMediaIcon from './SocialMediaIcon';

import { Dropdown } from 'semantic-ui-react';

import data from '../data';

import '../responsiveElements.css';

export default function Header({ articleCategory, setArticleCategory }) {
	const [ socialMediaList, setSocialMediaList ] = useState([]);

	useEffect(() => {
		setSocialMediaList(data.icons.socialMedia);
	}, []);

	function onChangeArticle(title) {
		setArticleCategory(title);
	}
	return (
		<div
			id="headerId"
			style={{
				display: 'flex',
				color: 'white',
				padding: '1rem',
				width: '100%',
				justifyContent: 'space-between',
				height: '4rem'
			}}
		>
			<span className="headerTitle">Atlantic robotic club</span>
			<div
				style={{
					display: 'flex',
					flex: '2',
					justifyContent: 'space-around',
					alignItems: 'center'
				}}
			>
				<Link
					to={process.env.PUBLIC_URL + '/'}
					style={{ color: window.location.pathname === '/' ? data.colors.kPrimaryColor : 'white' }}
					onClick={() => setArticleCategory('Articles')}
				>
					Accueil
				</Link>
				<Dropdown
					text={articleCategory}
					style={{
						color: window.location.pathname.includes('/articles') ? data.colors.kPrimaryColor : 'white'
					}}
				>
					<Dropdown.Menu style={{ background: 'rgba(255,255,255,0.1)' }}>
						<Dropdown.Item
							text="Le robot"
							style={{ color: data.colors.kSecondaryColor }}
							as={Link}
							to={process.env.PUBLIC_URL + '/articles/' + data.articleSection.robot}
							onClick={() => onChangeArticle(data.articleSectionTitle.robot)}
						/>
						<Dropdown.Item
							text="La Coupe"
							style={{ color: data.colors.kSecondaryColor }}
							as={Link}
							to={process.env.PUBLIC_URL + '/articles/' + data.articleSection.coupe}
							onClick={() => onChangeArticle(data.articleSectionTitle.coupe)}
						/>
						<Dropdown.Item
							text="Le club"
							style={{ color: data.colors.kSecondaryColor }}
							as={Link}
							to={process.env.PUBLIC_URL + '/articles/' + data.articleSection.club}
							onClick={() => onChangeArticle(data.articleSectionTitle.club)}
						/>
						<Dropdown.Item
							text="Les sponsors"
							style={{ color: data.colors.kSecondaryColor }}
							as={Link}
							to={process.env.PUBLIC_URL + '/articles/' + data.articleSection.sponsors}
							onClick={() => onChangeArticle(data.articleSectionTitle.sponsors)}
						/>
					</Dropdown.Menu>
				</Dropdown>
			</div>
			<div
				style={{
					display: 'flex',
					flex: '1',
					justifyContent: 'space-around',
					alignItems: 'center',
					height: '2rem'
				}}
			>
				{socialMediaList &&
					socialMediaList.map((socialMedia) => {
						return (
							<SocialMediaIcon key={socialMedia.title} src={socialMedia.image} link={socialMedia.link} />
						);
					})}
			</div>
		</div>
	);
}
