import React, { useEffect, useState } from 'react';

import data from '../data';

export default function Background() {
	const [ image, setImage ] = useState('');

	useEffect(() => {
		setImage(data.images.background);
	}, []);

	return (
		<div
			id="commonBackgroundId"
			style={{
				position: 'absolute',
				width: '100%',
				top: '0%',
				left: '0%',
				zIndex: '-1',
				maxHeight: '100vh'
			}}
		>
			{image && (
				<img
					src={image}
					alt="background_image"
					style={{ objectFit: 'cover', width: '100%', maxHeight: '100vh' }}
				/>
			)}
		</div>
	);
}
