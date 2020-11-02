import React, { useState } from 'react';
import VizSensor from 'react-visibility-sensor';

import Button from './Button';

import data from '../data';

import '../responsiveElements.css';

export default function HomeBox({ src, title, inverted, articleCategory }) {
	const [ visible, setVisible ] = useState(false);

	return (
		<VizSensor
			partialVisibility
			delayedCall={true}
			minTopValue={100}
			onChange={(isVisible) => {
				if (isVisible) setVisible(isVisible);
			}}
		>
			<div
				className="homeBoxContainer"
				style={{
					opacity: visible ? 1 : 0,
					transform: visible ? '' : inverted ? 'translateX(-30%)' : 'translateX(30%)',
					transition: 'opacity 600ms linear, transform 700ms linear'
				}}
			>
				<img
					src={src}
					alt="boxImage"
					style={{
						objectFit: 'cover',
						width: '100%',
						height: '100%',
						zIndex: '-1',
						filter: 'brightness(80%)'
					}}
				/>
				<div
					style={{
						position: 'absolute',
						top: '50%',
						left: inverted ? '70%' : '30%',
						alignItems: 'center',
						justifyContent: 'center',
						transform: 'translateY(-50%) translateX(-50%)',
						display: 'flex',
						flexDirection: 'column',
						whiteSpace: 'nowrap'
					}}
				>
					<h1
						style={{
							color: inverted ? data.colors.kSecondaryColor : data.colors.kPrimaryColor,
							fontSize: '7vw',
							fontFamily: "'Lora', serif",

							filter: 'drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.5))'
						}}
					>
						{title}
					</h1>
					<Button
						text="En savoir plus..."
						inverted={inverted}
						link={process.env.PUBLIC_URL + '/articles/' + articleCategory}
					/>
				</div>
			</div>
		</VizSensor>
	);
}
