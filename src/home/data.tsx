// import React from 'react';

const item1List: string[] = [
    'C', 'C#', 'C++', 'Python', 'Java', 'MySQL', 'Assembly',
]
const item2List: string[] = [
    'JavaScript', 'TypeScript', 'React', 'CSS', 'HTML',
]
const item3List: string[] = [
    'Git', 'Github', 'Unity', 'Machine Learning'
]
const item4List: string[] = [
    'Prolog', 'Lisp', 
]

const body: string[] = [
    `
    As an graduating student majoring in Computer Science, 
    I am passionate about programming and eager to learn new technologies. 
    Throughout my journey, I've developed numerous projects to help me 
    better understand the technologies I was learning, 
    and also to help me find out what I do not know, 
    while enjoying the process of solving complex problems that arise along the way.
    `,

    `
    I am also really interested in music. 
    I started learning viola from an after-school program during middle school, 
    and I have been playing since then. 
    I have joined and played in many different orchestras, 
    including the UCI symphony orchestra as a non-music major student.
    I also gained an opportunity to play at Walt Disney Concert Hall 
    as a member of HOLA students, which is an unforgettable experience.
    `,
]

export function ItemList(): JSX.Element[]{
    return itemList;
}
export function Body(): JSX.Element[]{
    return bodyParagraphs;
}

const bodyParagraphs: JSX.Element[] = (
    body.map((item, index) => <p className='about-me-content' key={`body_${index}`}>&emsp;&emsp;{item}</p>)
)


function createSkillList(list: string[], category: string): JSX.Element{
    return (
        <ul className='skill-list' key={`${category}`}>
            {
            list.map((item, index) => 
            <li className={`skill-item ${category}`} key={`${category + '_' + index}`}>
                {item}
            </li>)
            }
        </ul>
    )
}

const itemList: JSX.Element[] = [
    createSkillList(item1List, 'item1'),
    createSkillList(item2List, 'item2'),
    createSkillList(item3List, 'item3'),
    createSkillList(item4List, 'item4'),
]




