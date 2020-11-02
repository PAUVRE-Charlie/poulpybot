const data = {
	icons: {
		socialMedia: [
			{
				title: 'facebook',
				image: process.env.PUBLIC_URL + '/assets/icons/facebook_logo.svg',
				link: 'https://www.facebook.com/IMTAtlantique'
			},
			{
				title: 'youtube',
				image: process.env.PUBLIC_URL + '/assets/icons/youtube_logo.svg',
				link: 'https://www.youtube.com/c/IMTAtlantique/videos'
			},
			{
				title: 'linkedin',
				image: process.env.PUBLIC_URL + '/assets/icons/linkedin_logo.svg',
				link: 'https://www.linkedin.com/school/imt-atlantique/'
			}
		],
		arrowLeft: process.env.PUBLIC_URL + '/assets/icons/arrow_left_blue.svg',
		arrowRight: process.env.PUBLIC_URL + '/assets/icons/arrow_right_blue.svg'
	},
	images: {
		electronique: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
		coupe: process.env.PUBLIC_URL + '/assets/images/coupe.svg',
		club_nantes: process.env.PUBLIC_URL + '/assets/images/club_nantes.svg',
		lydia: process.env.PUBLIC_URL + '/assets/images/lydia.svg',
		background: process.env.PUBLIC_URL + '/assets/images/background.svg'
	},
	colors: {
		kPrimaryColor: '#02B8DF',
		kSecondaryColor: '#ffffff',
		kTitleColor: 'rgba(255, 255, 255, 0.7)',
		kCardBackgroundColor: '#f1f1f1',
		kFooterBackground: '#002E3A'
	},
	articleSection: {
		robot: 'le-robot',
		coupe: 'la-coupe',
		club: 'le-club',
		sponsors: 'les-sponsors'
	},
	articleSectionTitle: {
		robot: 'Le robot',
		coupe: 'La Coupe',
		club: 'Le club',
		sponsors: 'Les sponsors'
	},
	articles: [
		{
			_id: 1,
			title: 'Electronique',
			image: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
			category: 'le-robot',
			author: 'Alexis Hamel',
			body: (
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec
					placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur
					nibh. Duis ornare ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc
					quis venenatis orci, vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum
					vitae ornare sapien.<br />Integer semper imperdiet justo, quis viverra ipsum ultricies vel. Donec
					viverra placerat sapien, sed feugiat elit elementum gravida. Sed eu tempus urna. Quisque accumsan
					interdum risus et elementum. Etiam non diam vitae quam faucibus suscipit. Vivamus feugiat consequat
					sapien in pretium. Duis auctor pellentesque mauris, sed aliquet nunc condimentum vitae. Sed sed odio
					orci. Proin quis ligula risus. Sed porta metus eget porta laoreet.<br />Sed suscipit felis et tempus
					fermentum. Suspendisse a enim sit amet enim facilisis sodales vel in lorem. Pellentesque a mi
					vestibulum, fermentum tellus ut, sagittis metus. Nulla vulputate eros id aliquam tempus. Praesent
					eleifend ultrices varius. Suspendisse tempus bibendum maximus. Nulla vehicula rutrum libero et
					vestibulum. Proin pellentesque nulla quis augue sollicitudin mattis. Donec id aliquet nibh.<br />Cras
					ac tortor vel augue mattis varius. Aenean nec ex in risus facilisis consequat. Pellentesque pharetra
					sem ac eros ultrices, eu efficitur ante tempus. Vivamus id blandit nunc, in cursus ligula. Fusce
					molestie ullamcorper iaculis. Quisque sem nunc, tempor at aliquet ac, cursus eu leo. Proin lobortis
					semper dolor, nec vulputate dui malesuada eget. Cras luctus libero a ipsum lobortis tempus.
					Curabitur et elit sed ante volutpat dignissim. Vivamus tempus dolor eget leo rutrum, sit amet
					viverra lectus ultricies. Aliquam tincidunt leo venenatis lectus lacinia rhoncus quis nec erat.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tortor
					leo, vehicula eget nisi eget, pharetra aliquet diam. Pellentesque vehicula est ac vehicula
					consequat. Curabitur vitae tristique enim. Nulla sodales ultricies dolor, non finibus dui blandit
					vel.<br />Quisque vulputate venenatis justo a fermentum. In condimentum posuere diam, a euismod ante
					iaculis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Nulla ornare dictum sem a tincidunt. Etiam eleifend, justo eu consequat congue, ante velit
					laoreet tellus, sit amet viverra erat sem vel felis. Vivamus at vestibulum tortor. Cras euismod
					aliquet nibh nec tincidunt. Nullam finibus nibh sed rutrum pulvinar. Nam scelerisque, ex nec feugiat
					tempus, nunc tortor volutpat magna, et aliquam nulla turpis in diam. Suspendisse ultricies, orci sed
					imperdiet congue, urna risus vulputate neque, id commodo magna odio in nisi. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin facilisis eros sem, vel
					lobortis ligula mollis nec. Morbi ut mi gravida, auctor leo ut, vestibulum turpis. Sed sollicitudin
					maximus lacinia. Phasellus lacinia leo ex, ut placerat ligula placerat eu.
				</div>
			)
		},
		{
			_id: 2,
			title: 'Electronique',
			image: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
			category: 'le-robot',
			author: 'Alexis Hamel',
			body: (
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec
					placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur
					nibh. Duis ornare ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc
					quis venenatis orci, vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum
					vitae ornare sapien.<br />Integer semper imperdiet justo, quis viverra ipsum ultricies vel. Donec
					viverra placerat sapien, sed feugiat elit elementum gravida. Sed eu tempus urna. Quisque accumsan
					interdum risus et elementum. Etiam non diam vitae quam faucibus suscipit. Vivamus feugiat consequat
					sapien in pretium. Duis auctor pellentesque mauris, sed aliquet nunc condimentum vitae. Sed sed odio
					orci. Proin quis ligula risus. Sed porta metus eget porta laoreet.<br />Sed suscipit felis et tempus
					fermentum. Suspendisse a enim sit amet enim facilisis sodales vel in lorem. Pellentesque a mi
					vestibulum, fermentum tellus ut, sagittis metus. Nulla vulputate eros id aliquam tempus. Praesent
					eleifend ultrices varius. Suspendisse tempus bibendum maximus. Nulla vehicula rutrum libero et
					vestibulum. Proin pellentesque nulla quis augue sollicitudin mattis. Donec id aliquet nibh.<br />Cras
					ac tortor vel augue mattis varius. Aenean nec ex in risus facilisis consequat. Pellentesque pharetra
					sem ac eros ultrices, eu efficitur ante tempus. Vivamus id blandit nunc, in cursus ligula. Fusce
					molestie ullamcorper iaculis. Quisque sem nunc, tempor at aliquet ac, cursus eu leo. Proin lobortis
					semper dolor, nec vulputate dui malesuada eget. Cras luctus libero a ipsum lobortis tempus.
					Curabitur et elit sed ante volutpat dignissim. Vivamus tempus dolor eget leo rutrum, sit amet
					viverra lectus ultricies. Aliquam tincidunt leo venenatis lectus lacinia rhoncus quis nec erat.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tortor
					leo, vehicula eget nisi eget, pharetra aliquet diam. Pellentesque vehicula est ac vehicula
					consequat. Curabitur vitae tristique enim. Nulla sodales ultricies dolor, non finibus dui blandit
					vel.<br />Quisque vulputate venenatis justo a fermentum. In condimentum posuere diam, a euismod ante
					iaculis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Nulla ornare dictum sem a tincidunt. Etiam eleifend, justo eu consequat congue, ante velit
					laoreet tellus, sit amet viverra erat sem vel felis. Vivamus at vestibulum tortor. Cras euismod
					aliquet nibh nec tincidunt. Nullam finibus nibh sed rutrum pulvinar. Nam scelerisque, ex nec feugiat
					tempus, nunc tortor volutpat magna, et aliquam nulla turpis in diam. Suspendisse ultricies, orci sed
					imperdiet congue, urna risus vulputate neque, id commodo magna odio in nisi. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin facilisis eros sem, vel
					lobortis ligula mollis nec. Morbi ut mi gravida, auctor leo ut, vestibulum turpis. Sed sollicitudin
					maximus lacinia. Phasellus lacinia leo ex, ut placerat ligula placerat eu.
				</div>
			)
		},
		{
			_id: 3,
			title: 'Electronique',
			image: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
			category: 'le-robot',
			author: 'Alexis Hamel',
			body: (
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec
					placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur
					nibh. Duis ornare ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc
					quis venenatis orci, vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum
					vitae ornare sapien.<br />Integer semper imperdiet justo, quis viverra ipsum ultricies vel. Donec
					viverra placerat sapien, sed feugiat elit elementum gravida. Sed eu tempus urna. Quisque accumsan
					interdum risus et elementum. Etiam non diam vitae quam faucibus suscipit. Vivamus feugiat consequat
					sapien in pretium. Duis auctor pellentesque mauris, sed aliquet nunc condimentum vitae. Sed sed odio
					orci. Proin quis ligula risus. Sed porta metus eget porta laoreet.<br />Sed suscipit felis et tempus
					fermentum. Suspendisse a enim sit amet enim facilisis sodales vel in lorem. Pellentesque a mi
					vestibulum, fermentum tellus ut, sagittis metus. Nulla vulputate eros id aliquam tempus. Praesent
					eleifend ultrices varius. Suspendisse tempus bibendum maximus. Nulla vehicula rutrum libero et
					vestibulum. Proin pellentesque nulla quis augue sollicitudin mattis. Donec id aliquet nibh.<br />Cras
					ac tortor vel augue mattis varius. Aenean nec ex in risus facilisis consequat. Pellentesque pharetra
					sem ac eros ultrices, eu efficitur ante tempus. Vivamus id blandit nunc, in cursus ligula. Fusce
					molestie ullamcorper iaculis. Quisque sem nunc, tempor at aliquet ac, cursus eu leo. Proin lobortis
					semper dolor, nec vulputate dui malesuada eget. Cras luctus libero a ipsum lobortis tempus.
					Curabitur et elit sed ante volutpat dignissim. Vivamus tempus dolor eget leo rutrum, sit amet
					viverra lectus ultricies. Aliquam tincidunt leo venenatis lectus lacinia rhoncus quis nec erat.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tortor
					leo, vehicula eget nisi eget, pharetra aliquet diam. Pellentesque vehicula est ac vehicula
					consequat. Curabitur vitae tristique enim. Nulla sodales ultricies dolor, non finibus dui blandit
					vel.<br />Quisque vulputate venenatis justo a fermentum. In condimentum posuere diam, a euismod ante
					iaculis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Nulla ornare dictum sem a tincidunt. Etiam eleifend, justo eu consequat congue, ante velit
					laoreet tellus, sit amet viverra erat sem vel felis. Vivamus at vestibulum tortor. Cras euismod
					aliquet nibh nec tincidunt. Nullam finibus nibh sed rutrum pulvinar. Nam scelerisque, ex nec feugiat
					tempus, nunc tortor volutpat magna, et aliquam nulla turpis in diam. Suspendisse ultricies, orci sed
					imperdiet congue, urna risus vulputate neque, id commodo magna odio in nisi. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin facilisis eros sem, vel
					lobortis ligula mollis nec. Morbi ut mi gravida, auctor leo ut, vestibulum turpis. Sed sollicitudin
					maximus lacinia. Phasellus lacinia leo ex, ut placerat ligula placerat eu.
				</div>
			)
		},
		{
			_id: 4,
			title: 'Electronique',
			image: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
			category: 'la-coupe',
			author: 'Alexis Hamel',
			body: (
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec
					placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur
					nibh. Duis ornare ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc
					quis venenatis orci, vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum
					vitae ornare sapien.<br />Integer semper imperdiet justo, quis viverra ipsum ultricies vel. Donec
					viverra placerat sapien, sed feugiat elit elementum gravida. Sed eu tempus urna. Quisque accumsan
					interdum risus et elementum. Etiam non diam vitae quam faucibus suscipit. Vivamus feugiat consequat
					sapien in pretium. Duis auctor pellentesque mauris, sed aliquet nunc condimentum vitae. Sed sed odio
					orci. Proin quis ligula risus. Sed porta metus eget porta laoreet.<br />Sed suscipit felis et tempus
					fermentum. Suspendisse a enim sit amet enim facilisis sodales vel in lorem. Pellentesque a mi
					vestibulum, fermentum tellus ut, sagittis metus. Nulla vulputate eros id aliquam tempus. Praesent
					eleifend ultrices varius. Suspendisse tempus bibendum maximus. Nulla vehicula rutrum libero et
					vestibulum. Proin pellentesque nulla quis augue sollicitudin mattis. Donec id aliquet nibh.<br />Cras
					ac tortor vel augue mattis varius. Aenean nec ex in risus facilisis consequat. Pellentesque pharetra
					sem ac eros ultrices, eu efficitur ante tempus. Vivamus id blandit nunc, in cursus ligula. Fusce
					molestie ullamcorper iaculis. Quisque sem nunc, tempor at aliquet ac, cursus eu leo. Proin lobortis
					semper dolor, nec vulputate dui malesuada eget. Cras luctus libero a ipsum lobortis tempus.
					Curabitur et elit sed ante volutpat dignissim. Vivamus tempus dolor eget leo rutrum, sit amet
					viverra lectus ultricies. Aliquam tincidunt leo venenatis lectus lacinia rhoncus quis nec erat.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tortor
					leo, vehicula eget nisi eget, pharetra aliquet diam. Pellentesque vehicula est ac vehicula
					consequat. Curabitur vitae tristique enim. Nulla sodales ultricies dolor, non finibus dui blandit
					vel.<br />Quisque vulputate venenatis justo a fermentum. In condimentum posuere diam, a euismod ante
					iaculis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Nulla ornare dictum sem a tincidunt. Etiam eleifend, justo eu consequat congue, ante velit
					laoreet tellus, sit amet viverra erat sem vel felis. Vivamus at vestibulum tortor. Cras euismod
					aliquet nibh nec tincidunt. Nullam finibus nibh sed rutrum pulvinar. Nam scelerisque, ex nec feugiat
					tempus, nunc tortor volutpat magna, et aliquam nulla turpis in diam. Suspendisse ultricies, orci sed
					imperdiet congue, urna risus vulputate neque, id commodo magna odio in nisi. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin facilisis eros sem, vel
					lobortis ligula mollis nec. Morbi ut mi gravida, auctor leo ut, vestibulum turpis. Sed sollicitudin
					maximus lacinia. Phasellus lacinia leo ex, ut placerat ligula placerat eu.
				</div>
			)
		},
		{
			_id: 5,
			title: 'Electronique',
			image: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
			category: 'la-coupe',
			author: 'Alexis Hamel',
			body: (
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec
					placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur
					nibh. Duis ornare ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc
					quis venenatis orci, vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum
					vitae ornare sapien.<br />Integer semper imperdiet justo, quis viverra ipsum ultricies vel. Donec
					viverra placerat sapien, sed feugiat elit elementum gravida. Sed eu tempus urna. Quisque accumsan
					interdum risus et elementum. Etiam non diam vitae quam faucibus suscipit. Vivamus feugiat consequat
					sapien in pretium. Duis auctor pellentesque mauris, sed aliquet nunc condimentum vitae. Sed sed odio
					orci. Proin quis ligula risus. Sed porta metus eget porta laoreet.<br />Sed suscipit felis et tempus
					fermentum. Suspendisse a enim sit amet enim facilisis sodales vel in lorem. Pellentesque a mi
					vestibulum, fermentum tellus ut, sagittis metus. Nulla vulputate eros id aliquam tempus. Praesent
					eleifend ultrices varius. Suspendisse tempus bibendum maximus. Nulla vehicula rutrum libero et
					vestibulum. Proin pellentesque nulla quis augue sollicitudin mattis. Donec id aliquet nibh.<br />Cras
					ac tortor vel augue mattis varius. Aenean nec ex in risus facilisis consequat. Pellentesque pharetra
					sem ac eros ultrices, eu efficitur ante tempus. Vivamus id blandit nunc, in cursus ligula. Fusce
					molestie ullamcorper iaculis. Quisque sem nunc, tempor at aliquet ac, cursus eu leo. Proin lobortis
					semper dolor, nec vulputate dui malesuada eget. Cras luctus libero a ipsum lobortis tempus.
					Curabitur et elit sed ante volutpat dignissim. Vivamus tempus dolor eget leo rutrum, sit amet
					viverra lectus ultricies. Aliquam tincidunt leo venenatis lectus lacinia rhoncus quis nec erat.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tortor
					leo, vehicula eget nisi eget, pharetra aliquet diam. Pellentesque vehicula est ac vehicula
					consequat. Curabitur vitae tristique enim. Nulla sodales ultricies dolor, non finibus dui blandit
					vel.<br />Quisque vulputate venenatis justo a fermentum. In condimentum posuere diam, a euismod ante
					iaculis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Nulla ornare dictum sem a tincidunt. Etiam eleifend, justo eu consequat congue, ante velit
					laoreet tellus, sit amet viverra erat sem vel felis. Vivamus at vestibulum tortor. Cras euismod
					aliquet nibh nec tincidunt. Nullam finibus nibh sed rutrum pulvinar. Nam scelerisque, ex nec feugiat
					tempus, nunc tortor volutpat magna, et aliquam nulla turpis in diam. Suspendisse ultricies, orci sed
					imperdiet congue, urna risus vulputate neque, id commodo magna odio in nisi. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin facilisis eros sem, vel
					lobortis ligula mollis nec. Morbi ut mi gravida, auctor leo ut, vestibulum turpis. Sed sollicitudin
					maximus lacinia. Phasellus lacinia leo ex, ut placerat ligula placerat eu.
				</div>
			)
		},
		{
			_id: 6,
			title: 'Electronique',
			image: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
			category: 'la-coupe',
			author: 'Alexis Hamel',
			body: (
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec
					placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur
					nibh. Duis ornare ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc
					quis venenatis orci, vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum
					vitae ornare sapien.<br />Integer semper imperdiet justo, quis viverra ipsum ultricies vel. Donec
					viverra placerat sapien, sed feugiat elit elementum gravida. Sed eu tempus urna. Quisque accumsan
					interdum risus et elementum. Etiam non diam vitae quam faucibus suscipit. Vivamus feugiat consequat
					sapien in pretium. Duis auctor pellentesque mauris, sed aliquet nunc condimentum vitae. Sed sed odio
					orci. Proin quis ligula risus. Sed porta metus eget porta laoreet.<br />Sed suscipit felis et tempus
					fermentum. Suspendisse a enim sit amet enim facilisis sodales vel in lorem. Pellentesque a mi
					vestibulum, fermentum tellus ut, sagittis metus. Nulla vulputate eros id aliquam tempus. Praesent
					eleifend ultrices varius. Suspendisse tempus bibendum maximus. Nulla vehicula rutrum libero et
					vestibulum. Proin pellentesque nulla quis augue sollicitudin mattis. Donec id aliquet nibh.<br />Cras
					ac tortor vel augue mattis varius. Aenean nec ex in risus facilisis consequat. Pellentesque pharetra
					sem ac eros ultrices, eu efficitur ante tempus. Vivamus id blandit nunc, in cursus ligula. Fusce
					molestie ullamcorper iaculis. Quisque sem nunc, tempor at aliquet ac, cursus eu leo. Proin lobortis
					semper dolor, nec vulputate dui malesuada eget. Cras luctus libero a ipsum lobortis tempus.
					Curabitur et elit sed ante volutpat dignissim. Vivamus tempus dolor eget leo rutrum, sit amet
					viverra lectus ultricies. Aliquam tincidunt leo venenatis lectus lacinia rhoncus quis nec erat.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tortor
					leo, vehicula eget nisi eget, pharetra aliquet diam. Pellentesque vehicula est ac vehicula
					consequat. Curabitur vitae tristique enim. Nulla sodales ultricies dolor, non finibus dui blandit
					vel.<br />Quisque vulputate venenatis justo a fermentum. In condimentum posuere diam, a euismod ante
					iaculis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Nulla ornare dictum sem a tincidunt. Etiam eleifend, justo eu consequat congue, ante velit
					laoreet tellus, sit amet viverra erat sem vel felis. Vivamus at vestibulum tortor. Cras euismod
					aliquet nibh nec tincidunt. Nullam finibus nibh sed rutrum pulvinar. Nam scelerisque, ex nec feugiat
					tempus, nunc tortor volutpat magna, et aliquam nulla turpis in diam. Suspendisse ultricies, orci sed
					imperdiet congue, urna risus vulputate neque, id commodo magna odio in nisi. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin facilisis eros sem, vel
					lobortis ligula mollis nec. Morbi ut mi gravida, auctor leo ut, vestibulum turpis. Sed sollicitudin
					maximus lacinia. Phasellus lacinia leo ex, ut placerat ligula placerat eu.
				</div>
			)
		},
		{
			_id: 7,
			title: 'Electronique',
			image: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
			category: 'la-coupe',
			author: 'Alexis Hamel',
			body: (
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec
					placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur
					nibh. Duis ornare ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc
					quis venenatis orci, vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum
					vitae ornare sapien.<br />Integer semper imperdiet justo, quis viverra ipsum ultricies vel. Donec
					viverra placerat sapien, sed feugiat elit elementum gravida. Sed eu tempus urna. Quisque accumsan
					interdum risus et elementum. Etiam non diam vitae quam faucibus suscipit. Vivamus feugiat consequat
					sapien in pretium. Duis auctor pellentesque mauris, sed aliquet nunc condimentum vitae. Sed sed odio
					orci. Proin quis ligula risus. Sed porta metus eget porta laoreet.<br />Sed suscipit felis et tempus
					fermentum. Suspendisse a enim sit amet enim facilisis sodales vel in lorem. Pellentesque a mi
					vestibulum, fermentum tellus ut, sagittis metus. Nulla vulputate eros id aliquam tempus. Praesent
					eleifend ultrices varius. Suspendisse tempus bibendum maximus. Nulla vehicula rutrum libero et
					vestibulum. Proin pellentesque nulla quis augue sollicitudin mattis. Donec id aliquet nibh.<br />Cras
					ac tortor vel augue mattis varius. Aenean nec ex in risus facilisis consequat. Pellentesque pharetra
					sem ac eros ultrices, eu efficitur ante tempus. Vivamus id blandit nunc, in cursus ligula. Fusce
					molestie ullamcorper iaculis. Quisque sem nunc, tempor at aliquet ac, cursus eu leo. Proin lobortis
					semper dolor, nec vulputate dui malesuada eget. Cras luctus libero a ipsum lobortis tempus.
					Curabitur et elit sed ante volutpat dignissim. Vivamus tempus dolor eget leo rutrum, sit amet
					viverra lectus ultricies. Aliquam tincidunt leo venenatis lectus lacinia rhoncus quis nec erat.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tortor
					leo, vehicula eget nisi eget, pharetra aliquet diam. Pellentesque vehicula est ac vehicula
					consequat. Curabitur vitae tristique enim. Nulla sodales ultricies dolor, non finibus dui blandit
					vel.<br />Quisque vulputate venenatis justo a fermentum. In condimentum posuere diam, a euismod ante
					iaculis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Nulla ornare dictum sem a tincidunt. Etiam eleifend, justo eu consequat congue, ante velit
					laoreet tellus, sit amet viverra erat sem vel felis. Vivamus at vestibulum tortor. Cras euismod
					aliquet nibh nec tincidunt. Nullam finibus nibh sed rutrum pulvinar. Nam scelerisque, ex nec feugiat
					tempus, nunc tortor volutpat magna, et aliquam nulla turpis in diam. Suspendisse ultricies, orci sed
					imperdiet congue, urna risus vulputate neque, id commodo magna odio in nisi. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin facilisis eros sem, vel
					lobortis ligula mollis nec. Morbi ut mi gravida, auctor leo ut, vestibulum turpis. Sed sollicitudin
					maximus lacinia. Phasellus lacinia leo ex, ut placerat ligula placerat eu.
				</div>
			)
		},
		{
			_id: 8,
			title: 'Electronique',
			image: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
			category: 'le-club',
			author: 'Alexis Hamel',
			body: (
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec
					placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur
					nibh. Duis ornare ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc
					quis venenatis orci, vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum
					vitae ornare sapien.<br />Integer semper imperdiet justo, quis viverra ipsum ultricies vel. Donec
					viverra placerat sapien, sed feugiat elit elementum gravida. Sed eu tempus urna. Quisque accumsan
					interdum risus et elementum. Etiam non diam vitae quam faucibus suscipit. Vivamus feugiat consequat
					sapien in pretium. Duis auctor pellentesque mauris, sed aliquet nunc condimentum vitae. Sed sed odio
					orci. Proin quis ligula risus. Sed porta metus eget porta laoreet.<br />Sed suscipit felis et tempus
					fermentum. Suspendisse a enim sit amet enim facilisis sodales vel in lorem. Pellentesque a mi
					vestibulum, fermentum tellus ut, sagittis metus. Nulla vulputate eros id aliquam tempus. Praesent
					eleifend ultrices varius. Suspendisse tempus bibendum maximus. Nulla vehicula rutrum libero et
					vestibulum. Proin pellentesque nulla quis augue sollicitudin mattis. Donec id aliquet nibh.<br />Cras
					ac tortor vel augue mattis varius. Aenean nec ex in risus facilisis consequat. Pellentesque pharetra
					sem ac eros ultrices, eu efficitur ante tempus. Vivamus id blandit nunc, in cursus ligula. Fusce
					molestie ullamcorper iaculis. Quisque sem nunc, tempor at aliquet ac, cursus eu leo. Proin lobortis
					semper dolor, nec vulputate dui malesuada eget. Cras luctus libero a ipsum lobortis tempus.
					Curabitur et elit sed ante volutpat dignissim. Vivamus tempus dolor eget leo rutrum, sit amet
					viverra lectus ultricies. Aliquam tincidunt leo venenatis lectus lacinia rhoncus quis nec erat.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tortor
					leo, vehicula eget nisi eget, pharetra aliquet diam. Pellentesque vehicula est ac vehicula
					consequat. Curabitur vitae tristique enim. Nulla sodales ultricies dolor, non finibus dui blandit
					vel.<br />Quisque vulputate venenatis justo a fermentum. In condimentum posuere diam, a euismod ante
					iaculis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Nulla ornare dictum sem a tincidunt. Etiam eleifend, justo eu consequat congue, ante velit
					laoreet tellus, sit amet viverra erat sem vel felis. Vivamus at vestibulum tortor. Cras euismod
					aliquet nibh nec tincidunt. Nullam finibus nibh sed rutrum pulvinar. Nam scelerisque, ex nec feugiat
					tempus, nunc tortor volutpat magna, et aliquam nulla turpis in diam. Suspendisse ultricies, orci sed
					imperdiet congue, urna risus vulputate neque, id commodo magna odio in nisi. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin facilisis eros sem, vel
					lobortis ligula mollis nec. Morbi ut mi gravida, auctor leo ut, vestibulum turpis. Sed sollicitudin
					maximus lacinia. Phasellus lacinia leo ex, ut placerat ligula placerat eu.
				</div>
			)
		},
		{
			_id: 9,
			title: 'Electronique',
			image: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
			category: 'le-club',
			author: 'Alexis Hamel',
			body: (
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec
					placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur
					nibh. Duis ornare ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc
					quis venenatis orci, vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum
					vitae ornare sapien.<br />Integer semper imperdiet justo, quis viverra ipsum ultricies vel. Donec
					viverra placerat sapien, sed feugiat elit elementum gravida. Sed eu tempus urna. Quisque accumsan
					interdum risus et elementum. Etiam non diam vitae quam faucibus suscipit. Vivamus feugiat consequat
					sapien in pretium. Duis auctor pellentesque mauris, sed aliquet nunc condimentum vitae. Sed sed odio
					orci. Proin quis ligula risus. Sed porta metus eget porta laoreet.<br />Sed suscipit felis et tempus
					fermentum. Suspendisse a enim sit amet enim facilisis sodales vel in lorem. Pellentesque a mi
					vestibulum, fermentum tellus ut, sagittis metus. Nulla vulputate eros id aliquam tempus. Praesent
					eleifend ultrices varius. Suspendisse tempus bibendum maximus. Nulla vehicula rutrum libero et
					vestibulum. Proin pellentesque nulla quis augue sollicitudin mattis. Donec id aliquet nibh.<br />Cras
					ac tortor vel augue mattis varius. Aenean nec ex in risus facilisis consequat. Pellentesque pharetra
					sem ac eros ultrices, eu efficitur ante tempus. Vivamus id blandit nunc, in cursus ligula. Fusce
					molestie ullamcorper iaculis. Quisque sem nunc, tempor at aliquet ac, cursus eu leo. Proin lobortis
					semper dolor, nec vulputate dui malesuada eget. Cras luctus libero a ipsum lobortis tempus.
					Curabitur et elit sed ante volutpat dignissim. Vivamus tempus dolor eget leo rutrum, sit amet
					viverra lectus ultricies. Aliquam tincidunt leo venenatis lectus lacinia rhoncus quis nec erat.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tortor
					leo, vehicula eget nisi eget, pharetra aliquet diam. Pellentesque vehicula est ac vehicula
					consequat. Curabitur vitae tristique enim. Nulla sodales ultricies dolor, non finibus dui blandit
					vel.<br />Quisque vulputate venenatis justo a fermentum. In condimentum posuere diam, a euismod ante
					iaculis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Nulla ornare dictum sem a tincidunt. Etiam eleifend, justo eu consequat congue, ante velit
					laoreet tellus, sit amet viverra erat sem vel felis. Vivamus at vestibulum tortor. Cras euismod
					aliquet nibh nec tincidunt. Nullam finibus nibh sed rutrum pulvinar. Nam scelerisque, ex nec feugiat
					tempus, nunc tortor volutpat magna, et aliquam nulla turpis in diam. Suspendisse ultricies, orci sed
					imperdiet congue, urna risus vulputate neque, id commodo magna odio in nisi. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin facilisis eros sem, vel
					lobortis ligula mollis nec. Morbi ut mi gravida, auctor leo ut, vestibulum turpis. Sed sollicitudin
					maximus lacinia. Phasellus lacinia leo ex, ut placerat ligula placerat eu.
				</div>
			)
		},
		{
			_id: 10,
			title: 'Electronique',
			image: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
			category: 'les-sponsors',
			author: 'Alexis Hamel',
			body: (
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec
					placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur
					nibh. Duis ornare ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc
					quis venenatis orci, vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum
					vitae ornare sapien.<br />Integer semper imperdiet justo, quis viverra ipsum ultricies vel. Donec
					viverra placerat sapien, sed feugiat elit elementum gravida. Sed eu tempus urna. Quisque accumsan
					interdum risus et elementum. Etiam non diam vitae quam faucibus suscipit. Vivamus feugiat consequat
					sapien in pretium. Duis auctor pellentesque mauris, sed aliquet nunc condimentum vitae. Sed sed odio
					orci. Proin quis ligula risus. Sed porta metus eget porta laoreet.<br />Sed suscipit felis et tempus
					fermentum. Suspendisse a enim sit amet enim facilisis sodales vel in lorem. Pellentesque a mi
					vestibulum, fermentum tellus ut, sagittis metus. Nulla vulputate eros id aliquam tempus. Praesent
					eleifend ultrices varius. Suspendisse tempus bibendum maximus. Nulla vehicula rutrum libero et
					vestibulum. Proin pellentesque nulla quis augue sollicitudin mattis. Donec id aliquet nibh.<br />Cras
					ac tortor vel augue mattis varius. Aenean nec ex in risus facilisis consequat. Pellentesque pharetra
					sem ac eros ultrices, eu efficitur ante tempus. Vivamus id blandit nunc, in cursus ligula. Fusce
					molestie ullamcorper iaculis. Quisque sem nunc, tempor at aliquet ac, cursus eu leo. Proin lobortis
					semper dolor, nec vulputate dui malesuada eget. Cras luctus libero a ipsum lobortis tempus.
					Curabitur et elit sed ante volutpat dignissim. Vivamus tempus dolor eget leo rutrum, sit amet
					viverra lectus ultricies. Aliquam tincidunt leo venenatis lectus lacinia rhoncus quis nec erat.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tortor
					leo, vehicula eget nisi eget, pharetra aliquet diam. Pellentesque vehicula est ac vehicula
					consequat. Curabitur vitae tristique enim. Nulla sodales ultricies dolor, non finibus dui blandit
					vel.<br />Quisque vulputate venenatis justo a fermentum. In condimentum posuere diam, a euismod ante
					iaculis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Nulla ornare dictum sem a tincidunt. Etiam eleifend, justo eu consequat congue, ante velit
					laoreet tellus, sit amet viverra erat sem vel felis. Vivamus at vestibulum tortor. Cras euismod
					aliquet nibh nec tincidunt. Nullam finibus nibh sed rutrum pulvinar. Nam scelerisque, ex nec feugiat
					tempus, nunc tortor volutpat magna, et aliquam nulla turpis in diam. Suspendisse ultricies, orci sed
					imperdiet congue, urna risus vulputate neque, id commodo magna odio in nisi. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin facilisis eros sem, vel
					lobortis ligula mollis nec. Morbi ut mi gravida, auctor leo ut, vestibulum turpis. Sed sollicitudin
					maximus lacinia. Phasellus lacinia leo ex, ut placerat ligula placerat eu.
				</div>
			)
		},
		{
			_id: 11,
			title: 'Electronique',
			image: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
			category: 'les-sponsors',
			author: 'Alexis Hamel',
			body: (
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec
					placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur
					nibh. Duis ornare ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc
					quis venenatis orci, vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum
					vitae ornare sapien.<br />Integer semper imperdiet justo, quis viverra ipsum ultricies vel. Donec
					viverra placerat sapien, sed feugiat elit elementum gravida. Sed eu tempus urna. Quisque accumsan
					interdum risus et elementum. Etiam non diam vitae quam faucibus suscipit. Vivamus feugiat consequat
					sapien in pretium. Duis auctor pellentesque mauris, sed aliquet nunc condimentum vitae. Sed sed odio
					orci. Proin quis ligula risus. Sed porta metus eget porta laoreet.<br />Sed suscipit felis et tempus
					fermentum. Suspendisse a enim sit amet enim facilisis sodales vel in lorem. Pellentesque a mi
					vestibulum, fermentum tellus ut, sagittis metus. Nulla vulputate eros id aliquam tempus. Praesent
					eleifend ultrices varius. Suspendisse tempus bibendum maximus. Nulla vehicula rutrum libero et
					vestibulum. Proin pellentesque nulla quis augue sollicitudin mattis. Donec id aliquet nibh.<br />Cras
					ac tortor vel augue mattis varius. Aenean nec ex in risus facilisis consequat. Pellentesque pharetra
					sem ac eros ultrices, eu efficitur ante tempus. Vivamus id blandit nunc, in cursus ligula. Fusce
					molestie ullamcorper iaculis. Quisque sem nunc, tempor at aliquet ac, cursus eu leo. Proin lobortis
					semper dolor, nec vulputate dui malesuada eget. Cras luctus libero a ipsum lobortis tempus.
					Curabitur et elit sed ante volutpat dignissim. Vivamus tempus dolor eget leo rutrum, sit amet
					viverra lectus ultricies. Aliquam tincidunt leo venenatis lectus lacinia rhoncus quis nec erat.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tortor
					leo, vehicula eget nisi eget, pharetra aliquet diam. Pellentesque vehicula est ac vehicula
					consequat. Curabitur vitae tristique enim. Nulla sodales ultricies dolor, non finibus dui blandit
					vel.<br />Quisque vulputate venenatis justo a fermentum. In condimentum posuere diam, a euismod ante
					iaculis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Nulla ornare dictum sem a tincidunt. Etiam eleifend, justo eu consequat congue, ante velit
					laoreet tellus, sit amet viverra erat sem vel felis. Vivamus at vestibulum tortor. Cras euismod
					aliquet nibh nec tincidunt. Nullam finibus nibh sed rutrum pulvinar. Nam scelerisque, ex nec feugiat
					tempus, nunc tortor volutpat magna, et aliquam nulla turpis in diam. Suspendisse ultricies, orci sed
					imperdiet congue, urna risus vulputate neque, id commodo magna odio in nisi. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin facilisis eros sem, vel
					lobortis ligula mollis nec. Morbi ut mi gravida, auctor leo ut, vestibulum turpis. Sed sollicitudin
					maximus lacinia. Phasellus lacinia leo ex, ut placerat ligula placerat eu.
				</div>
			)
		},
		{
			_id: 12,
			title: 'Electronique',
			image: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
			category: 'les-sponsors',
			author: 'Alexis Hamel',
			body: (
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec
					placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur
					nibh. Duis ornare ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc
					quis venenatis orci, vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum
					vitae ornare sapien.<br />Integer semper imperdiet justo, quis viverra ipsum ultricies vel. Donec
					viverra placerat sapien, sed feugiat elit elementum gravida. Sed eu tempus urna. Quisque accumsan
					interdum risus et elementum. Etiam non diam vitae quam faucibus suscipit. Vivamus feugiat consequat
					sapien in pretium. Duis auctor pellentesque mauris, sed aliquet nunc condimentum vitae. Sed sed odio
					orci. Proin quis ligula risus. Sed porta metus eget porta laoreet.<br />Sed suscipit felis et tempus
					fermentum. Suspendisse a enim sit amet enim facilisis sodales vel in lorem. Pellentesque a mi
					vestibulum, fermentum tellus ut, sagittis metus. Nulla vulputate eros id aliquam tempus. Praesent
					eleifend ultrices varius. Suspendisse tempus bibendum maximus. Nulla vehicula rutrum libero et
					vestibulum. Proin pellentesque nulla quis augue sollicitudin mattis. Donec id aliquet nibh.<br />Cras
					ac tortor vel augue mattis varius. Aenean nec ex in risus facilisis consequat. Pellentesque pharetra
					sem ac eros ultrices, eu efficitur ante tempus. Vivamus id blandit nunc, in cursus ligula. Fusce
					molestie ullamcorper iaculis. Quisque sem nunc, tempor at aliquet ac, cursus eu leo. Proin lobortis
					semper dolor, nec vulputate dui malesuada eget. Cras luctus libero a ipsum lobortis tempus.
					Curabitur et elit sed ante volutpat dignissim. Vivamus tempus dolor eget leo rutrum, sit amet
					viverra lectus ultricies. Aliquam tincidunt leo venenatis lectus lacinia rhoncus quis nec erat.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tortor
					leo, vehicula eget nisi eget, pharetra aliquet diam. Pellentesque vehicula est ac vehicula
					consequat. Curabitur vitae tristique enim. Nulla sodales ultricies dolor, non finibus dui blandit
					vel.<br />Quisque vulputate venenatis justo a fermentum. In condimentum posuere diam, a euismod ante
					iaculis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Nulla ornare dictum sem a tincidunt. Etiam eleifend, justo eu consequat congue, ante velit
					laoreet tellus, sit amet viverra erat sem vel felis. Vivamus at vestibulum tortor. Cras euismod
					aliquet nibh nec tincidunt. Nullam finibus nibh sed rutrum pulvinar. Nam scelerisque, ex nec feugiat
					tempus, nunc tortor volutpat magna, et aliquam nulla turpis in diam. Suspendisse ultricies, orci sed
					imperdiet congue, urna risus vulputate neque, id commodo magna odio in nisi. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin facilisis eros sem, vel
					lobortis ligula mollis nec. Morbi ut mi gravida, auctor leo ut, vestibulum turpis. Sed sollicitudin
					maximus lacinia. Phasellus lacinia leo ex, ut placerat ligula placerat eu.
				</div>
			)
		},
		{
			_id: 13,
			title: 'Electronique',
			image: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
			category: 'les-sponsors',
			author: 'Alexis Hamel',
			body: (
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec
					placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur
					nibh. Duis ornare ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc
					quis venenatis orci, vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum
					vitae ornare sapien.<br />Integer semper imperdiet justo, quis viverra ipsum ultricies vel. Donec
					viverra placerat sapien, sed feugiat elit elementum gravida. Sed eu tempus urna. Quisque accumsan
					interdum risus et elementum. Etiam non diam vitae quam faucibus suscipit. Vivamus feugiat consequat
					sapien in pretium. Duis auctor pellentesque mauris, sed aliquet nunc condimentum vitae. Sed sed odio
					orci. Proin quis ligula risus. Sed porta metus eget porta laoreet.<br />Sed suscipit felis et tempus
					fermentum. Suspendisse a enim sit amet enim facilisis sodales vel in lorem. Pellentesque a mi
					vestibulum, fermentum tellus ut, sagittis metus. Nulla vulputate eros id aliquam tempus. Praesent
					eleifend ultrices varius. Suspendisse tempus bibendum maximus. Nulla vehicula rutrum libero et
					vestibulum. Proin pellentesque nulla quis augue sollicitudin mattis. Donec id aliquet nibh.<br />Cras
					ac tortor vel augue mattis varius. Aenean nec ex in risus facilisis consequat. Pellentesque pharetra
					sem ac eros ultrices, eu efficitur ante tempus. Vivamus id blandit nunc, in cursus ligula. Fusce
					molestie ullamcorper iaculis. Quisque sem nunc, tempor at aliquet ac, cursus eu leo. Proin lobortis
					semper dolor, nec vulputate dui malesuada eget. Cras luctus libero a ipsum lobortis tempus.
					Curabitur et elit sed ante volutpat dignissim. Vivamus tempus dolor eget leo rutrum, sit amet
					viverra lectus ultricies. Aliquam tincidunt leo venenatis lectus lacinia rhoncus quis nec erat.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tortor
					leo, vehicula eget nisi eget, pharetra aliquet diam. Pellentesque vehicula est ac vehicula
					consequat. Curabitur vitae tristique enim. Nulla sodales ultricies dolor, non finibus dui blandit
					vel.<br />Quisque vulputate venenatis justo a fermentum. In condimentum posuere diam, a euismod ante
					iaculis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Nulla ornare dictum sem a tincidunt. Etiam eleifend, justo eu consequat congue, ante velit
					laoreet tellus, sit amet viverra erat sem vel felis. Vivamus at vestibulum tortor. Cras euismod
					aliquet nibh nec tincidunt. Nullam finibus nibh sed rutrum pulvinar. Nam scelerisque, ex nec feugiat
					tempus, nunc tortor volutpat magna, et aliquam nulla turpis in diam. Suspendisse ultricies, orci sed
					imperdiet congue, urna risus vulputate neque, id commodo magna odio in nisi. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin facilisis eros sem, vel
					lobortis ligula mollis nec. Morbi ut mi gravida, auctor leo ut, vestibulum turpis. Sed sollicitudin
					maximus lacinia. Phasellus lacinia leo ex, ut placerat ligula placerat eu.
				</div>
			)
		},
		{
			_id: 14,
			title: 'Electronique',
			image: process.env.PUBLIC_URL + '/assets/images/electronique.svg',
			category: 'les-sponsors',
			author: 'Alexis Hamel',
			body: (
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non iaculis ex, ac luctus enim. Donec
					placerat augue posuere pretium malesuada. Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Vestibulum id mi hendrerit, placerat lectus sit amet, consectetur
					nibh. Duis ornare ex quam, ac dictum justo semper quis. Nullam rhoncus libero ut tempor tempus. Nunc
					quis venenatis orci, vitae maximus orci. Fusce a sagittis ligula. Quisque ut quam ante. Vestibulum
					vitae ornare sapien.<br />Integer semper imperdiet justo, quis viverra ipsum ultricies vel. Donec
					viverra placerat sapien, sed feugiat elit elementum gravida. Sed eu tempus urna. Quisque accumsan
					interdum risus et elementum. Etiam non diam vitae quam faucibus suscipit. Vivamus feugiat consequat
					sapien in pretium. Duis auctor pellentesque mauris, sed aliquet nunc condimentum vitae. Sed sed odio
					orci. Proin quis ligula risus. Sed porta metus eget porta laoreet.<br />Sed suscipit felis et tempus
					fermentum. Suspendisse a enim sit amet enim facilisis sodales vel in lorem. Pellentesque a mi
					vestibulum, fermentum tellus ut, sagittis metus. Nulla vulputate eros id aliquam tempus. Praesent
					eleifend ultrices varius. Suspendisse tempus bibendum maximus. Nulla vehicula rutrum libero et
					vestibulum. Proin pellentesque nulla quis augue sollicitudin mattis. Donec id aliquet nibh.<br />Cras
					ac tortor vel augue mattis varius. Aenean nec ex in risus facilisis consequat. Pellentesque pharetra
					sem ac eros ultrices, eu efficitur ante tempus. Vivamus id blandit nunc, in cursus ligula. Fusce
					molestie ullamcorper iaculis. Quisque sem nunc, tempor at aliquet ac, cursus eu leo. Proin lobortis
					semper dolor, nec vulputate dui malesuada eget. Cras luctus libero a ipsum lobortis tempus.
					Curabitur et elit sed ante volutpat dignissim. Vivamus tempus dolor eget leo rutrum, sit amet
					viverra lectus ultricies. Aliquam tincidunt leo venenatis lectus lacinia rhoncus quis nec erat.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tortor
					leo, vehicula eget nisi eget, pharetra aliquet diam. Pellentesque vehicula est ac vehicula
					consequat. Curabitur vitae tristique enim. Nulla sodales ultricies dolor, non finibus dui blandit
					vel.<br />Quisque vulputate venenatis justo a fermentum. In condimentum posuere diam, a euismod ante
					iaculis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Nulla ornare dictum sem a tincidunt. Etiam eleifend, justo eu consequat congue, ante velit
					laoreet tellus, sit amet viverra erat sem vel felis. Vivamus at vestibulum tortor. Cras euismod
					aliquet nibh nec tincidunt. Nullam finibus nibh sed rutrum pulvinar. Nam scelerisque, ex nec feugiat
					tempus, nunc tortor volutpat magna, et aliquam nulla turpis in diam. Suspendisse ultricies, orci sed
					imperdiet congue, urna risus vulputate neque, id commodo magna odio in nisi. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin facilisis eros sem, vel
					lobortis ligula mollis nec. Morbi ut mi gravida, auctor leo ut, vestibulum turpis. Sed sollicitudin
					maximus lacinia. Phasellus lacinia leo ex, ut placerat ligula placerat eu.
				</div>
			)
		}
	]
};

export default data;
