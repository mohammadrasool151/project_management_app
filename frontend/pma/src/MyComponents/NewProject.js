import React from 'react'
import "./NewProject.css"
import { Topic2 } from './Topic2'

export const NewProject = (props) => {
    return (
        <>
            <div id='hidnewp' className='hnewproject'>
                <p id='hidnewp2'>{props.np}</p>
            </div>
            {/* <div >
            <Topic2/>

        </div> */}
           
                <div className='Nfirst'>
                    <Topic2 />

                </div>
                <div className='Nsecond'>

                </div>

           
        </>
    )
}
