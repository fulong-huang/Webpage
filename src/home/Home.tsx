import React from 'react'
import './Home.css'
import {ItemList, Body} from './data.tsx'

export default function Home(): JSX.Element{
    return (
        <>
        <div className='head-container'>
            <p id='my-name'>
                Fulong Huang
            </p>
            <p id='my-title'>
                Software Engineer
            </p>
            <p id='my-education'>
                Bachelor of Science in Computer Science, 
                University of California, Irvine
                <br/>
                (September 2019 - June 2023)
            </p>
        </div>
        <div className='skill-container'>
            <p id='my-skill'>
                Skills
            </p>
            {ItemList()}
        </div>
        <div className='about-me-container'>
            <p id='about-me'>
                About me
            </p>
            {Body()}
        </div>

        </>
    )
}
