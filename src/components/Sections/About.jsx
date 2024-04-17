import React, { useState, useEffect, useRef, useContext } from 'react';
import SingleLineShooterV2 from '../SingleLineShooter/SingleLineShooterV2';
import SingleLineTyperNoContext from '../SingleLineTyper/SingleLineTyperNoContext';
import { RouteDetectContext } from '../Wrapper';

import './about.css'

const About = (props) => {
	const [slowInternet, setSlowInternet] = useState('')
	const [paragraph2, setParagraph2] = useState('')
	const [launch1, setLaunch1] = useState('')
	const [launch2, setLaunch2] = useState('')
	const delayTimer = "15s"

	const partoutStyle = {
		position: "relative",
		opacity: "0",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		border: "1px solid lime",
		width: "250px",
		height: "250px",
		animationTimingFunction: "ease-out",
		animation: "popper 1s",
		WebkitAnimation: "popper 1s",
		animationDelay: delayTimer,
		WebkitAnimationDelay: delayTimer,
		animationFillMode: "forwards",
		WebkitAnimationFillMode: "forwards"
	}


	const toPop = useRef()
	const toShow = useRef()
	const toRender = useRef()

	const slowInternetType = <>
		<p>
			<i>
				<SingleLineTyperNoContext string={'Slow internet huh?'} timeInterval={30} />
			</i>
		</p>
	</>

	const popItem = () => {

		setTimeout(() => { setSlowInternet(slowInternetType) }, 3500);
		setTimeout(() => { setSlowInternet('') }, 8000);
		toPop.current.classList.add("popped");
		toShow.current.classList.add("slow-slider");
	}

	const launch2Component = <div></div>
	const launch1Component = <>
		<div className='skills'>
			<div className="skills__column">
				<SingleLineShooterV2
					timeBetweenVerses={[1000, 2100, 2200, 2300, 2400, 2500, 2600]}
					timeToLaunch={1000}
					/*
					slotTarget={setLaunchNav}
					componentToLaunch = {navComponent}
					launchComponentFunction={launchComponent} */
					timeToNext={0}
					lineType={'p'}
					incrementTime={10}
					hideDasher={true}
					verses={['SKILLED AT:', 'javaScript()', 'node.js', 'reactJs', 'reactNative', 'Vue3 js', 'html </>']}
				/>
			</div>
			<div className="skills__column">
			<SingleLineShooterV2
				timeBetweenVerses={[2700, 2800, 2900, 3000, 3100]}
				timeToLaunch={1000}
				/*
				slotTarget={setLaunchNav}
				componentToLaunch = {navComponent}
				launchComponentFunction={launchComponent} */
				timeToNext={0}
				lineType={'p'}
				incrementTime={10}
				hideDasher={true}
				verses={['css {}', 'php <?>', 'wordPress', 'drupal', 'shopify']}
			/>
			</div>
		</div>
		<div className='education'>
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
					<p><SingleLineShooterV2
						timeBetweenVerses={[100, 600, 1000, 1800, 4400]}
						timeToLaunch={2000}
						slotTarget={setParagraph2}
						componentToLaunch={paragraph2Component}
						launchComponentFunction={launchComponent}
						timeToNext={500}
						lineType={'span'}
						incrementTime={10}
						hideDasher={true}
						verses={['All right!! ', 'So...', ' Hello again,', 'Vitor Branco, 28 years old, born in the northern town of Vila Real, Portugal. Currently living at Porto city.']} />
					</p>
					<p>
						{paragraph2}
					</p>
					<div class="about-list">
						{launch1}
						{launch2}
					</div>
				</div>
				<div className="contact">
					<div onClick={popItem} style={partoutStyle} className="passpartout" >
						<div class="avatar-container" ref={toShow}>
						</div>
						<span>click here to see how I look like</span>
					</div>
					<div className="contact-info-wrapper" ref={toRender}>
						{slowInternet}
						<address ref={toPop}>
							<p>Vitor Branco at 28yo of age</p>
							<p>"Thinking about frontend development things..."</p>
							<a href="mailto:vitorlinharesbranco@gmail.com">Mail me</a>
							<p>vitorlinharesbranco<br />@gmail.com</p>
						</address>
					</div>
				</div>
			</div>
		</>
	)
}
export default About

