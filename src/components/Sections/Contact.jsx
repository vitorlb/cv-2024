import React, { useEffect, useRef } from 'react';
import SingleLinkShooterNoDescr from '../SingleLineShooter/SingleLinkShooterNoDescr';
import './Contact.css'
const Contact = () => {
	return (
		<>
			<div className="mail text-center text-md-start">
				<SingleLinkShooterNoDescr
					timeBetweenVerses={[500, 2200]}
					timeToLaunch={1}
					timeToNext={0}
					incrementTime={10}
					hideDasher={true}
					verses={['vitorlinharesbranco@gmail.com', 'GitHub']}
					linkHref={['mailto: vitorlinharesbranco@gmail.com', 'https://github.com/vitorlb']}
				/>
			</div>
		</>
	)
}

export default Contact

