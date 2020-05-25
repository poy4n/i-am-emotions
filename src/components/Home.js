import React from 'react';

import './styles/Home.css';
import './styles/Menu.css';

export default class Home extends React.Component {
	state = {
		colors: [ '#dc7633', '#a569bd', '#5499c7', '#cd6155', '#52be80', '#f4d03f' ]
	};

	render() {
		return (
			<div className='home'>
				{this.state.colors.map((box, index) => {
					return (
						<div>
							<img
								className='project-img'
								style={{ border: `5px solid ${box}` }}
								src={require(`../projectsimg/${index + 1}.jpg`)}
								alt=''
							/>
							<div className='project-detail' style={{ backgroundColor: box }}>
								<a href=''>click here</a>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
