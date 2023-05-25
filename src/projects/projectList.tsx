// import React from 'react'
import {Link} from 'react-router-dom'
import {projectData, dataContainer} from './data'


function createProjectItem(data: dataContainer, index: number): JSX.Element{
    return(
        <li className='project-item' key={`projectItem_${index}`}>
            {
                data.link.startsWith('https')?
                <a href={data.link} target='_blank' className='overlay'>{data.overlay}</a> :
                <Link to={data.link} className='overlay'>{data.overlay}</Link> 
            }
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

    window.scrollTo(0, 0)

    return (
        <ul className='project-list'>
            {projectList}
        </ul>
    )
}



