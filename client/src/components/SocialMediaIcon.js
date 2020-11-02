import React from 'react';

export default function SocialMediaIcon({ src, link }) {
	return (
		<div style={{ height: '100%', cursor: 'pointer' }} onClick={() => window.open(link)}>
			<img src={src} alt="socialMediaImage" style={{ height: '100%' }} />
		</div>
	);
}
