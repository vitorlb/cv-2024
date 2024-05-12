import React, { useState, useEffect, useRef, useContext } from 'react';
import SingleLineShooterV2 from '../SingleLineShooter/SingleLineShooterV2';
import SingleLineTyperNoContext from '../SingleLineTyper/SingleLineTyperNoContext';
import { RouteDetectContext } from '../Wrapper';
import { Context as SolidsContext } from '../../context/SolidsContext';

import './about.scss'

const About = (props) => {
	const emptyDiv = <div className="contact"></div>
	const { state: solidsState, changeAnim } = useContext(SolidsContext);
	const [slowInternet, setSlowInternet] = useState('')
	const [paragraph2, setParagraph2] = useState('')
	const [launch1, setLaunch1] = useState('')
	const [launch2, setLaunch2] = useState(emptyDiv)
	const delayTimer = "2s"

	const showStatus = () => {
		console.log('show')
		console.log(solidsState)
	}

	const partoutStyle = {
		position: "relative",
		opacity: "0",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		border: "1px solid lime",
		width: "300px",
		height: "300px",
		animationTimingFunction: "ease-out",
		animation: "popper 1s",
		WebkitAnimation: "popper 1s",
		animationDelay: delayTimer,
		WebkitAnimationDelay: delayTimer,
		animationFillMode: "forwards",
		WebkitAnimationFillMode: "forwards",
		overflow: "hidden"
	}

	const toPop = useRef();
	const toShow = useRef();

	const slowInternetType = <>
		<p className="slow">
			<i>
				<SingleLineTyperNoContext string={'Slow internet huh?'} timeInterval={30} />
			</i>
		</p>
	</>

	const popItem = () => {
		setTimeout(() => { setSlowInternet(slowInternetType) }, 3500);
		setTimeout(() => { setSlowInternet('') }, 7900);
		setTimeout(() => { toPop.current.classList.add("popped") }, 8000);
		toShow.current.classList.add("slow-slider");
	}

	const launch2Component = <div className="contact">
		<div onClick={popItem} style={partoutStyle} className="passpartout mb-3" >
			<div className="avatar-container" ref={toShow}>
				<img src="./avatar.png" alt="" />
			</div>
			<span>click here to see how I look like</span>
		</div>
		<div className="contact-info-wrapper pb-5">
			<address ref={toPop}>
				<p>Vitor Branco at 28yo of age</p>
				<p>"Thinking about frontend development things..."</p>
				<a href="mailto:vitorlinharesbranco@gmail.com">Mail me</a>
				<p>vitorlinharesbranco<br />@gmail.com</p>
			</address>
		</div>
	</div>

	const launch1Component = <>
		<div className='skills'>
			<div className="skills__column">
				<SingleLineShooterV2
					timeBetweenVerses={[1000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900]}
					timeToLaunch={1000}
					/*
					slotTarget={setLaunchNav}
					componentToLaunch = {navComponent}
					launchComponentFunction={launchComponent} */
					timeToNext={0}
					lineType={'p'}
					incrementTime={10}
					hideDasher={true}
					verses={['SKILLED AT:', 'javaScript()', 'node.js', 'reactJs', 'reactNative', 'Vue3 js', 'html </>', 'CRUD', 'firebase']}
				/>
			</div>
			<div className="skills__column">
				<SingleLineShooterV2
					timeBetweenVerses={[2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400]}
					timeToLaunch={1000}
					/*
					slotTarget={setLaunchNav}
					componentToLaunch = {navComponent}
					launchComponentFunction={launchComponent} */
					timeToNext={0}
					lineType={'p'}
					incrementTime={10}
					hideDasher={true}
					verses={['css {}', 'php <?>', 'ajax', 'wordPress', 'drupal', 'shopify', 'mailchimp API', 'threeJs']}
				/>
			</div>
		</div>
		<div className='education mt-4 mt-md-0'>
			<SingleLineShooterV2
				timeBetweenVerses={[1000, 2100, 2200, 2300, 2400, 2500]}
				timeToLaunch={1000}
				slotTarget={setLaunch2}
				componentToLaunch={launch2Component}
				launchComponentFunction={launchComponent}
				timeToNext={2000}
				hideDasher={true}
				lineType={'p'}
				incrementTime={10}
				verses={['EDUCATION:', '2016 - Graphic Design at IPCA Barcelos', '2018 - CCP [Pedagogical Habilities Certificate] (NetForce)', '2018 - Principles of Digital Marketing (Google Digital Workshop)', '2020 - Frontend Development course (EDIT Disruptive Education Porto)', '2020 - React Advanced Course (EDIT Disruptive Education Porto)']}
			/>
		</div>
	</>

	const paragraph2Component = <SingleLineShooterV2
		timeBetweenVerses={[100, 2000, 3500]}
		timeToLaunch={1000}
		slotTarget={setLaunch1}
		componentToLaunch={launch1Component}
		launchComponentFunction={launchComponent}
		timeToNext={500}
		lineType={'span'}
		incrementTime={10}
		hideDasher={true}
		verses={['I started my career and education as a graphic designer, soon to find programming and developing fascinating.', 'Feels good to work on it, it\'s like neverending super hard puzzle.']} />

	function launchComponent(time, component, slot) {
		setTimeout(function () {
			slot(component)
		}, time);
	}


	return (
		<>
			<div className="about-intro">
				<div className="text-wrapper">
					<p class="text-center text-md-start"><SingleLineShooterV2
						timeBetweenVerses={[100, 600, 1000, 1800, 4400]}
						timeToLaunch={2000}
						slotTarget={setParagraph2}
						componentToLaunch={paragraph2Component}
						launchComponentFunction={launchComponent}
						timeToNext={500}
						lineType={'span'}
						incrementTime={10}
						hideDasher={true}
						verses={['All right!! ', 'So...', ' Hello again,', 'Vitor Branco, 31 years old, born in the northern town of Vila Real, Portugal. Currently living at Porto city.']} />
					</p>
					<p class="text-center text-md-start">
						{paragraph2}
					</p>
					<div className="about-list">
						{launch1}
					</div>
				</div>
				<div className="d-flex flex-column">
					{launch2}
					{slowInternet}
				</div>
			</div>
		</>
	)
}
export default About

