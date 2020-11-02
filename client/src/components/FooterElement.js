import React from 'react';

export default function FooterElement({ title, component }) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				padding: '2rem 1rem'
			}}
		>
			<h2 style={{ fontFamily: "'Lora', serif" }}>{title}</h2>
			<div>{component}</div>
		</div>
	);
}
