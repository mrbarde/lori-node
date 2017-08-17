import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import cssModules from 'react-css-modules';
import styles from '../styles/splash.scss';
import env from 'env';
import logo from '../files/logo.png';
import Quote from './presenters/quote.jsx';
import Particles from 'react-particles-js';
import {Page} from 'lori-bites';

/**
 * Home View
 */
class Home extends Component{

	constructor() {
		super();
		// initialise state
		this.state = {
			quotes: [
				{
					body: 'For God so loved the World that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
					author: 'Jesus Christ'
				},
				{
					body: 'With the new day comes new strength and new thoughts.',
					author: 'Eleanor Roosevelt'
				},
				{
					body: 'Well done is better than well said.',
					author: 'Benjamin Franklin'
				},
				{
					body: 'Start where you are. Use what you have. Do what you can.',
					author: 'Arthur Ashe'
				},
				{
					body: 'Let the beauty of what you love be what you do.',
					author: 'Rumi'
				},
				{
					body: 'Every heart sings a song, incomplete, until another heart whispers back. Those who wish to sing always find a song. At the touch of a lover, everyone becomes a poet.',
					author: 'Plato'
				}
			],
            particleStyles: {
				position: 'absolute',
				left: 0,
				top: 0,
				width: '100%',
				height: '100%',
				zIndex: 0,
				opacity: 0.4
			},
			quote: null
		};
	}

	componentDidMount() {
		// get random index between 0 and 5
		let index = Math.floor((Math.random() * 6));
		// select quote
		let quote = this.state.quotes[index];
		// set quote
		this.setState({quote});

		setTimeout(this.testNotification, 5000);
	}

	render(){
		var {quote, particleStyles} = this.state;
		// return view
		return(
			<Page title="Welcome to Lori Framework">
				<div styleName='spanned'>
					<Particles style={particleStyles} className="foo" params={require('../files/particlesjs-config.json')}/>
					<div styleName='column'>

					</div>
					<div styleName='column'>
						<img src={logo} styleName='logo'/>
						<h5 styleName='message'>
							{'Build something great...'}
						</h5>
						<div>
							<a href='https://github.com/mrbarde/lori/wiki' target='_blank' styleName='link'>Documentation</a>
							<a href='https://github.com/mrbarde/lori' target='_blank' styleName='link'><i className='fa fa-github' styleName='black_text'></i>{' GitHub'}</a>
						</div>
						{ quote && <Quote {...quote}/> }
					</div>
					<div styleName='column'>

					</div>
				</div>
			</Page>
		);
	}
}

export default withRouter(connect()(cssModules(Home, styles, env.cssModulesOptions)));