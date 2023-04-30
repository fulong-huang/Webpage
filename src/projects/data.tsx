import React from 'react';

export type dataContainer = {
    img         : string,
    title       : string,
    description : string,
}

export const projectData : dataContainer[] = [
    { // SSA
        img             : '/src/assets/IR_Diagram.png',
        title           : `
            Static-Single Assignment Diagram
        `,
        description     : `
            A school project built from ground up 
            with no outside assistance for coding part.
        `,
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
    },
    { // Tetris
        img             : '/src/assets/Tetris.png',
        title           : `
            Tetris
        `,
        description     : `
            Triditional Tetris, first project I used for javascript.
            It helped me to gain familiarty of Javascript, HTML, and CSS.
        `,
    },
    { // Construction
        img             : '/src/assets/IR_Diagram.png',
        title           : `
            Run and Borrow (Constructing)
        `,
        description     : `
            Simulation for processes that ask for resources.
            only one processes run at a time,
            can timeout to run the next process in same priority. 
        `,
    },
];



