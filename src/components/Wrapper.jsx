import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router'
import './Wrapper.scss'
import SingleLineShooterV2 from './SingleLineShooter/SingleLineShooterV2';
import About from './Sections/About'
import Contact from './Sections/Contact'
import Work from './Sections/Work'
import { Context as SolidsContext } from '../context/SolidsContext';
import Canvas1 from './Fiber/Canvases/Canvas';
import Canvas1Inv from './Fiber/Canvases/CanvasInv';
//TODO: Import bootstrap - responsive review (desk, mob and XXL)

const Wrapper = (props) => {
	const { state: solidsState, changeAnim } = useContext(SolidsContext);
	const [aboutToggle, setAboutToggle] = useState(false);
	const [contactToggle, setContactToggle] = useState(false);
	const [launchAbout, setLaunchAbout] = useState(null)
	const [workToggle, setWorkToggle] = useState(false);
	const [currentAnimIndex, setCurrentAnimIndex] = useState(solidsState.animationIndex)
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
	function launchComponent(time, component, slot) {
		setTimeout(function () {
			slot(component)
		}, time);
	}
	const launchAboutComponent = <>
		<div className="nav-menu mt-3 justify-content-between justify-content--md-start">
			<div style={{ height: '60px', width: '60px' }} className="header__animation-wrapper d-md-none position-relative vcv-square-ratio">
				<Canvas1 flat linear></Canvas1>
			</div>
			<div className="d-flex ps-2 ps-md-0 vcv-column-gap-4">
				<p className="m-0 d-flex align-items-center" onClick={() => {
					setCurrentAnimIndex(currentAnimIndex => currentAnimIndex + 1);
					toggleMenu(0)
				}}>
					<SingleLineShooterV2
						timeBetweenVerses={[100, 1000, 2400]}
						timeToLaunch={1500}
						timeToNext={800}
						lineType={'span'}
						incrementTime={20}
						verses={['About']}
					/>
				</p>
				<p className="m-0 d-flex align-items-center" onClick={() => {
					setCurrentAnimIndex(currentAnimIndex => currentAnimIndex + 1);
					toggleMenu(1)
				}}>
					<SingleLineShooterV2
						timeBetweenVerses={[100, 1000, 2400]}
						timeToLaunch={1500}
						timeToNext={800}
						lineType={'span'}
						incrementTime={20}
						verses={['Contact']}
					/>
				</p>
				<p className="m-0 d-flex align-items-center" onClick={() => {
					setCurrentAnimIndex(currentAnimIndex => currentAnimIndex + 1);
					toggleMenu(2)
				}}>
					<SingleLineShooterV2
						timeBetweenVerses={[100, 1000, 2400]}
						timeToLaunch={1500}
						timeToNext={800}
						lineType={'span'}
						incrementTime={20}
						verses={['Work']}
					/>
				</p>
			</div>
			<div style={{ height: '60px', width: '60px' }} className="header__animation-wrapper d-md-none position-relative vcv-square-ratio">
				<Canvas1Inv flat linear></Canvas1Inv>
			</div>
		</div>
	</>
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
	useEffect(() => {
		currentAnimIndex == 3
			? setCurrentAnimIndex(0)
			: changeAnim({ num: currentAnimIndex })
	}, [currentAnimIndex])
	return (
		<>
			<div className="wrapper-main vcv-px-md-20 py-5">
				<div className="header-wrapper">
					<div className="main__header d-flex align-items-center">
						<div className="header__data d-flex flex-column vcv-row-gap-2 vcv-flex-1">
							<SingleLineShooterV2
								slotTarget={setLaunchAbout}
								componentToLaunch={launchAboutComponent}
								launchComponentFunction={launchComponent}
								timeBetweenVerses={[100, 1000, 2400]}
								timeToLaunch={1500}
								timeToNext={800}
								lineType={'h2'}
								incrementTime={10}
								verses={['Greetings.', 'My name is Vitor Branco,', 'I am currently looking for a job as Frontend Developer...']}
							/>
							{!!launchAbout && launchAbout}
						</div>
						<div style={{ height: '180px', width: '180px' }} className="header__animation-wrapper d-none d-md-block position-relative vcv-square-ratio">
							<div style={{ height: '130px', width: '130px' }}>
								<Canvas1 flat linear></Canvas1>
							</div>
						</div>
					</div>
				</div>
				<div className="content-wrapper vcv-mt-4 vcv-mt-md-6">
					{!!aboutToggle && <About />}
					{!!contactToggle && <Contact />}
					{!!workToggle && <Work />}
				</div>
			</div>
		</>
	)
}

export default Wrapper

