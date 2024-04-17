import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router'
import './Wrapper.css'
import SingleLineShooterV2 from './SingleLineShooter/SingleLineShooterV2';
import About from './Sections/About'
import Contact from './Sections/Contact'
import Work from './Sections/Work'

//TODO: Import bootstrap - responsive review (desk, mob and XXL)


const Wrapper = (props) => {
	const [aboutToggle, setAboutToggle] = useState(false);
	const [contactToggle, setContactToggle] = useState(false);
	const [workToggle, setWorkToggle] = useState(false);
	const [visitedRoutes, setVisitedRoutes] = useState({
		work: { counter: 0, val: false },
		about: { counter: 0, val: false }
	});
	const toggleMenu = (pageIndex) => {
		let pagesArr = [setAboutToggle, setContactToggle, setWorkToggle];
		pagesArr.forEach((e, i) => {
			pageIndex !== i
				? pagesArr[i](false)
				: pagesArr[i](true);
		});
	};
	useEffect(() => {
		if (visitedRoutes.about.counter === 2 && visitedRoutes.about.val === false) {
			setVisitedRoutes(prevProps => ({
				...prevProps, about: {
					counter: 2,
					val: true
				}
			}))
		}
	}, [visitedRoutes]);
	return (
		<>
			<div className="wrapper-main">
				<SingleLineShooterV2
					timeBetweenVerses={[100, 1000, 2400]}
					timeToLaunch={1500}
					timeToNext={800}
					lineType={'h2'}
					incrementTime={10}
					verses={['Greetings.', 'My name is Vitor Branco,', 'I am currently looking for a job as Frontend Developer...']}
				/>
				<div className="nav-menu">
					<p onClick={() => toggleMenu(0)}>
						<SingleLineShooterV2
							timeBetweenVerses={[100, 1000, 2400]}
							timeToLaunch={1500}
							timeToNext={800}
							lineType={'span'}
							incrementTime={10}
							verses={['About me']}
						/>
					</p>
					<p onClick={() => toggleMenu(1)}>Contact</p>
					<p onClick={() => toggleMenu(2)}>Work</p>

				</div>
				{!!aboutToggle && <About />}
				{!!contactToggle && <Contact />}
				{!!workToggle && <Work />}
			</div>
		</>
	)
}

export default Wrapper

