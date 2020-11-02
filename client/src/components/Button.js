import React from 'react';
import { Link } from 'react-router-dom';

import data from '../data';

import '../animations.css';

export default function Button({ text, inverted, link }) {
	return (
		<Link to={link}>
			<div
				className="scaleDownAndReset"
				style={
					inverted ? (
						{
							color: data.colors.kPrimaryColor,
							border: 'solid 1px ' + data.colors.kPrimaryColor,
							backgroundColor: data.colors.kSecondaryColor,
							borderRadius: '3px',
							padding: '0.4rem 4rem',
							fontSize: '0.85rem',
							filter: 'drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.5))'
						}
					) : (
						{
							color: data.colors.kSecondaryColor,
							border: 'solid 1px ' + data.colors.kSecondaryColor,
							backgroundColor: data.colors.kPrimaryColor,
							borderRadius: '3px',
							padding: '0.4rem 4rem',
							fontSize: '0.85rem',
							filter: 'drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.5))'
						}
					)
				}
			>
				<span>{text}</span>
			</div>
		</Link>
	);
}
