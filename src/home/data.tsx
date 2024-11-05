// import React from 'react';

const item1List: string[] = [
    'C', 'C#', 'C++', 'Python', 'Java', 'JavaScript', 'Assembly',
]
const item2List: string[] = [
    'TypeScript', 'React', 'CSS', 'HTML', 'Django',
]
const item3List: string[] = [
    'Git', 'Github', 'Unity', 'Machine Learning', 'MySQL', 
]
const item4List: string[] = [
    // 'Prolog', 'Lisp', 
]

const body: string[] = [
    `
 	As a graduated student majoring in Computer Science, 
	I am passionate about programming and eager to learn new technologies. 
	Throughout my journey, 
	I have developed numerous projects to help me better understand new technologies 
	since I believe building projects with minimum support is the most effective way to learn 
	and explore the field. 
	I enjoy the process of solving complex problems that arise along the way,
	as it allows me to discover areas where I need further knowledge and expertise.    `,

    `
    In addition to my technical pursuits,
	I have a deep interest in music.
	I began learning the Viola in middle school and have continued to play ever since.
	I joined numerous orchestras and programs aiming to practice and strengthen my craft, 
	which also gave me opportunities to
	met lots of interesting and talented folks along the way. 
	I made lots of unforgettable memories during my journey,
	such as being on stage with Placido Domingo, 
	performing at Walt Disney Concert Hall, 
	and camping with talented musicians amidst the mountain depth.
	Currently I am a member of Eisner Intergenerational Orchestra. 
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




