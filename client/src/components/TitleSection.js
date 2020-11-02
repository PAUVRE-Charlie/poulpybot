import React from 'react';

import data from '../data';

export default function TitleSection({ title, subtitle }) {
	return (
		<div
			style={{
				position: 'relative',
				height: '25vh',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<p
				className="titleSectionTitle"
				style={{
					color: data.colors.kSecondaryColor
				}}
			>
				{title}
			</p>
			{subtitle && (
				<p
					style={{
						fontSize: '2vh',
						color: data.colors.kPrimaryColor
					}}
				>
					{subtitle}
				</p>
			)}
		</div>
	);
}
