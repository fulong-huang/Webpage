import React from 'react';

export type dataContainer = {
    img         : string,
    title       : string,
    description : string,
    overlay     : string,
    link        : string,
}

export const projectData : dataContainer[] = [
    { // Website
        img             : '/src/assets/1.png',
        title           : `
            Personal Website
        `,
        description     : `
            My personal website you currently viewing,
            This is my second website I built, first one being Tetris.
            In addition from what I used for Tetris, 
            I am also using Typescript and React.
        `,
        overlay         : 'Visit Github Page',
        link            : 'https://github.com/fulong-huang/Webpage',
    },
    { // Cube
        img             : '/src/assets/cube.png',
        title           : `
            Rubik's Cube
        `,
        description     : `
            I build as a process of learning Unity,
            I choose to build Rubik's Cube because I was obsesse with cube
            when I was in high school, but there isn't any tools I can use
            when I tried to practice blindfold outside when physical cube
            isn't apporpriate.             
        `,
        overlay         : 'Play it NOW',
        link            : 'https://play.unity.com/mg/other/webgl-builds-327523',
    },
    { // Tetris
        img             : '/src/assets/Tetris.png',
        title           : `
            Tetris
        `,
        description     : `
            Triditional Tetris, first webpage I built.
            It helped me to gain familiarty of Javascript, HTML, and CSS.
        `,
        overlay         : 'Play it NOW',
        link            : 'https://fhuang-tetris.netlify.app/',
    },
    { // SSA
        img             : '/src/assets/IR_Diagram.png',
        title           : `
            Static-Single Assignment Diagram
        `,
        description     : `
            A school project built from ground up 
            with no outside assistance for coding part.
        `,
        overlay         : 'Watch DEMO',
        link            : 'https://youtu.be/nKmsC9gf2Bg',
    },
    { // Construction
        img             : '/src/assets/process.jpg',
        title           : `
            Run and Borrow (Constructing)
        `,
        description     : `
            Simulation for processes that ask for resources.
            only one processes run at a time,
            can timeout to run the next process in same priority. 
        `,
        overlay         : 'Visit Github Page',
        link            : 'https://github.com/fulong-huang/Processes',
    },
];



