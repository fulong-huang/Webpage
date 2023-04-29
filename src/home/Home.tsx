import React from 'react'
import './Home.css'

export default function Home(){


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
            <ul className='skill-list'>
                <li className='skill-item item1'>C</li>
                <li className='skill-item item1'>C#</li>
                <li className='skill-item item1'>C++</li>
                <li className='skill-item item1'>Python</li>
                <li className='skill-item item1'>Java</li>
                <li className='skill-item item1'>MySQL</li>
                <li className='skill-item item1'>Assembly</li>
            </ul>
            <ul className='skill-list'>
                <li className='skill-item item2'>JavaScript</li>
                <li className='skill-item item2'>TypeScript</li>
                <li className='skill-item item2'>HTML</li>
                <li className='skill-item item2'>CSS</li>
                <li className='skill-item item2'>React</li>
            </ul>
            <ul className='skill-list'>
                <li className='skill-item item3'>Git</li>
                <li className='skill-item item3'>Github</li>
                <li className='skill-item item3'>Unity</li>
            </ul>
            <ul className='skill-list'>
                <li className='skill-item item4'>Prolog</li>
                <li className='skill-item item4'>Lisp</li>
                <li className='skill-item item4'>Machine Learning</li>
            </ul>
        </div>
        <div className='about-me-container'>
            <p id='about-me'>
                About me
            </p>
            <p id='about-me-content'>
                &emsp;&emsp; 
                As an incoming graduate student majoring in Computer Science, 
                I am passionate about programming and eager to learn new technologies. 
                Throughout my journey, 
                I've developed numerous projects to help me better understand 
                these technologies and to find out what I do not know, 
                while enjoying the process of solving complex problems 
                that arise along the way.
            </p>

            <p id='about-me-content'>
                &emsp;&emsp;
                Aside from Computer Science, I am also really interested in music. 
                I started learning viola from an after-school program during middle school,
                and I have been playing since then. 
                I have joined and played in many different orchestras, 
                including the UCI symphony orchestra as a non-music major student. 
                I also gained an opportunity to play at Walt Disney Concert Hall 
                as a member of HOLA students, which is an unforgettable experience.
            </p>
        </div>

        </>
    )
}
