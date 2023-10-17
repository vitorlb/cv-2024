import React, { useState , useEffect} from 'react';
import {Switch, Route} from 'react-router'
import './Wrapper.css'
import SingleLineShooterV2 from './SingleLineShooter/SingleLineShooterV2';


const Wrapper = (props) => {


    const [launchNav, setLaunchNav] = useState('')

    const [visitedRoutes, setVisitedRoutes] = useState({

        work: {counter:0,val:false},
        about: {counter:0,val:false}
    })

    const [visitedAbout, setVisitedAbout] = useState(false)
    const [visitedWork, setVisitedWork] = useState(false)


useEffect(() => {

if(visitedRoutes.about.counter === 2 && visitedRoutes.about.val === false) {

    setVisitedRoutes(prevProps => ({...prevProps, about: {
        counter:2,
        val:true
    }}))
}
}, [visitedRoutes]);




/*     useEffect(() => {

        setTimeout(function(){

            setLaunchNav(navComponent)
        }, 6000);
    }, []); */


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

            </div>


        </>

    )
}

export default Wrapper

