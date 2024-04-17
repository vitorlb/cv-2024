import React, { useEffect } from 'react';
import SingleLinkShooter from '../SingleLineShooter/SingleLinkShooter';
import SingleLineTyperNoContext from '../SingleLineTyper/SingleLineTyperNoContext';
import './work.css'

const Work = (props) => {
	return (
		<>
			<div className="work-wrapper">
				<div className="work-wrapper__column">
					<div className='personal'>
						<p className="work-title">
							<SingleLineTyperNoContext string={'CURRENT JOB:'} timeInterval={10} />
						</p>
						<SingleLinkShooter
							timeBetweenVerses={[1000]}
							timeToLaunch={1}
							timeToNext={0}
							incrementTime={10}
							hideDasher={true}
							verses={['Front end developer at ALTA Digital.']}
							linkHref={['https://altadigital.pt']}
							description={[
								`ALTA Digital is a web, UX/UI and software agency. My daily challanges go trhough frontend development in different CMS types, such as Wordpress and Drupal. Developing apps using frameworks such as ReactJs, NextJs, React Native, Vue3, amongst others, as well as database comunication to feed the frameworks using REST API as resource for comunication between front and backend`
							]}
						/>
					</div>
					<div className='personal'>
						<p className="work-title">  <SingleLineTyperNoContext string={'PERSONAL WORK:'} timeInterval={10} /></p>
						<SingleLinkShooter
							timeBetweenVerses={[1000, 1100, 1200, 1300]}
							timeToLaunch={1}
							timeToNext={0}
							incrementTime={10}
							hideDasher={true}
							verses={['This crazy amazing website!', 'Restaurant Orders Registror', 'carlosroxo.com']}
							linkHref={['https://github.com/vitorlb/text-typer', 'https://github.com/vitorlb/order-register-sandbox', 'https://carlosroxo.com']}
							description={[
								'This website is actually a react.js app designed, developed and styled from scratch by me :) The animated text, for example, is a component built to shoot lines of text. You can render it into any html tag, and costumize de speed of the text, as well as the time between each verse. Explore it in the link below!',
								'React app with firebase realtime database to register orders in restaurants. It was built to solve the problem of \'Duas de Letra\' restaurant in communication between the three floors. It\'s a web app where you can take orders and change order status in real time. There are two screens, one to take orders, and another one to check orders and order status. That way cooks, production and waiters have instant communication, replacing the writing on little paper and then walk to production only then to be transmitted via speakerphone to the kitchen. It can be costumized to work in different restaurants',
								'Sr. Carlos roxo is a multidisciplinary artist (also a good friend of mine) based on Torres Vedras, Portugal. It\'s a pro-bono work where I was able to develop a personalied backend and frontend for a wordpress website. Was also an oportunity for me to explore my educational past as a graphic designer, being it fully designed by me, with some finishing cooperation with Carlos Roxo herself. One of my most recents works, and by its nature, my proudest one :)'
							]}
						/>
					</div>
				</div>
				<div className='co-work'>
					<p className="work-title">
						<SingleLineTyperNoContext string={'FREELANCE WORK:'} timeInterval={10} /></p>
					<SingleLinkShooter
						timeBetweenVerses={[1000, 1100, 1200, 1300, 1400, 1500]}
						timeToLaunch={1}
						timeToNext={0}
						incrementTime={10}
						hideDasher={true}
						verses={['lateral creative studios', 'Sampla Footwear', 'Syndicato.pt beer guide', 'MOB Agency']}
						linkHref={['http://lateral.pt', 'https://samplafootwear.com/', 'https://syndicato.pt/beerguide/', 'https://mobagency.pt/']}
						description={['Web Design . Web Management . Web Developer', 'Shopify Developer . javaScript Developer', 'php Developer . javaScript Developer', 'php Developer . javaScript Developer . javaScript Animation Effects']}
					/>
				</div>

			</div>

		</>

	)
}

export default Work

