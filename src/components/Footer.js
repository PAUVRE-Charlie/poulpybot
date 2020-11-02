import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

import FooterElement from './FooterElement';

export default function Footer() {
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				textAlign: 'center',
				flexWrap: 'wrap',
				justifyContent: 'space-around',
				background: data.colors.kFooterBackground,
				color: data.colors.kSecondaryColor
			}}
		>
			<FooterElement
				title="Campus de Brest"
				component={
					<div>
						IMT Atlantique Bretagne- Pays de la Loire <br /> Campus de Brest <br />Technopôle Brest-Iroise{' '}
						<br />CS 83818<br /> 29238 Brest cedex 03<br /> France <br />Tél. +33 (0)2 29 00 11 11
					</div>
				}
			/>
			<FooterElement
				title="Navigation"
				component={
					<div className="ui list">
						<Link
							className="ui item"
							to={process.env.PUBLIC_URL + '/'}
							style={{ color: data.colors.kSecondaryColor }}
						>
							Accueil
						</Link>
						<Link
							className="ui item"
							to={process.env.PUBLIC_URL + '/articles/' + data.articleSection.robot}
							style={{ color: data.colors.kSecondaryColor }}
						>
							{data.articleSectionTitle.robot}
						</Link>
						<Link
							className="ui item"
							to={process.env.PUBLIC_URL + '/articles/' + data.articleSection.coupe}
							style={{ color: data.colors.kSecondaryColor }}
						>
							{data.articleSectionTitle.coupe}
						</Link>
						<Link
							className="ui item"
							to={process.env.PUBLIC_URL + '/articles/' + data.articleSection.club}
							style={{ color: data.colors.kSecondaryColor }}
						>
							{data.articleSectionTitle.club}
						</Link>
						<Link
							className="ui item"
							to={process.env.PUBLIC_URL + '/articles/' + data.articleSection.sponsors}
							style={{ color: data.colors.kSecondaryColor }}
						>
							{data.articleSectionTitle.sponsors}
						</Link>
					</div>
				}
			/>
			<FooterElement
				title="Campus de Nantes"
				component={
					<div>
						IMT Atlantique Bretagne-Pays de la Loire<br /> Campus de Nantes<br /> 4, rue Alfred Kastler - La
						Chantrerie
						<br />CS 20722<br /> 44307 Nantes cedex 3 <br />France <br />Tél. +33 (0)2 51 85 81 00
					</div>
				}
			/>
		</div>
	);
}
