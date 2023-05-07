// import React from 'react'
import './project.css'
import ProjectList from './projectList'

export default function Projects() : JSX.Element{
    return (
        <div>
            <p className='project'>
                Projects
            </p>
            <ProjectList />
        </div>
    )
}