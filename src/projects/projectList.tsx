// import React from 'react'
import {projectData, dataContainer} from './data'


function createProjectItem(data: dataContainer, index: number): JSX.Element{
    return(
        <li className='project-item' key={`projectItem_${index}`}>
            <a href={data.link} target='_blank' className='overlay'>{data.overlay}</a>
            <img src={data.img} className='project-image' />
            <h1 className='project-title'>{data.title}</h1>
            <p className='project-description'>{data.description[0]}</p>
            <p className='project-description'>{data.description[1]}</p>
        </li>
    )
}

const projectList : JSX.Element[] =
    projectData.map((item, index) => createProjectItem(item, index));

export default function ProjectList(): JSX.Element{

    return (
        <ul className='project-list'>
            {projectList}
        </ul>
    )
}



