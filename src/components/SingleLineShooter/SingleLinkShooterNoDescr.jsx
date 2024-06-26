import React, { useState, useEffect } from 'react'
import SingleLineTyperNoDash from '../SingleLineTyper/SingleLineTyperNoDash'
import './SingleLineShooter.css'

const SingleLinkShooterNoDescr = (props) => {

	const [myArray, updateMyArray] = useState([]);
	const [finalArray, setFinalArray] = useState([])
	const [loaded, setLoaded] = useState(true)


	useEffect(() => {

		if (myArray.length < props.verses.length) {
			const verseCounter = myArray.length
			updateMyArray(arr => [...arr, props.verses[verseCounter]])
		}
		if (myArray.length === props.verses.length) {
			if (loaded) {
				setLoaded(false)
				myArray.map((e, i) => {
					setTimeout(() => {
						setFinalArray(arr => [...arr, <>
							<p><a href={props.linkHref[i]}><SingleLineTyperNoDash string={e} key={i} timeInterval={props.incrementTime} /></a></p>
						</>
						]);
						if (i === props.verses.length - 1) {
							if (props.launchComponentFunction !== undefined) {
								props.launchComponentFunction(props.timeToLaunch, props.componentToLaunch, props.slotTarget)
							}
						}
					}, props.timeBetweenVerses[i]);
				})
			}
		}
	}, [[], myArray]);
	return <>{finalArray}</>
}

export default SingleLinkShooterNoDescr

