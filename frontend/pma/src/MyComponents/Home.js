import React, { useState } from 'react';
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { NewProject } from './NewProject';
import { Topic2 } from './Topic2';
// import {Topic } from './Topic';

export const Home = () => {
    const [hproj, setHproj] = useState([{
        id: 1,
        text: "New Project"
    }])
    const [hbinp, seHbinp] = useState("New Project")
    // console.log(nproj);
    const addProject = (e) => {
        e.preventDefault()
        // document.getElementById("hidnewp").innerHTML = "done";
        const allinputData2 = { id: hproj.length + 1, text: hbinp }

        // const nnew = { text: "a testing" }
        setHproj([...hproj, allinputData2])
    }
    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>

            <div className='bothside'>

                <div className='hleftside'>
                    <div className='pHeading'>
                        <p className='pProject'>Projects</p>
                        <FontAwesomeIcon onClick={addProject} className='hPlus' icon={faPlusSquare} size="xs" />

                    </div>
                    {/* <div id='hidnewp' className='hnewproject'>
                        <p id='hidnewp2'>{nproj.map(np => (
                            np.text
                        ))}</p>
                    </div> */}
                    <div className='hfornew'>

                    {hproj.map(np => (
                        <NewProject np={np.text} key={np.id} id={np.id} />
                        ))}
                        </div>

                </div>
                {/* <div className='hrightside'>
                    <div className='first'>
                        <Topic2/>

                    </div>

                </div> */}
            </div>
        </>
    )
}
