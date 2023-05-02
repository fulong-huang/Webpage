// import React from 'react';

export type dataContainer = {
    img         : string,
    title       : string,
    description : string[],
    overlay     : string,
    link        : string,
}

export const projectData : dataContainer[] = [
    { // Website
        img             : '/webpage.png',
        title           : `
            Personal Website
        `,
        description     : [
            `
                TypeScript, React, HTML, CSS
            `,
            `
                The personal website you are currently viewing. 
                Aim to sell myself as a software developer 
                and gain hands-on experience using React and TypeScript.
            `,
        ],
        overlay         : 'Visit Github Page',
        link            : 'https://github.com/fulong-huang/Webpage',
    },
    { // Cube
        img             : '/cube.png',
        title           : `
            Rubik's Cube
        `,
        description     : [
            `
                Unity, C#
            `,
            `
                Rubik's Cube, but with the option to hide stickers and “blindfolded” with eyes open.
                Made to help me learn Unity.    
            `,
        ],
        overlay         : 'Play it NOW',
        link            : 'https://play.unity.com/mg/other/webgl-builds-327523',
    },
    { // Tetris
        img             : '/Tetris.png',
        title           : `
            Tetris
        `,
        description     :[
            `
                JavaScript, HTML, CSS
            `,
            `
                A classic Tetris game, with customizable game boards, 
                and a flexible game window that will auto-adjust the size of the window 
                for the best experience.
            `,
        ],
        overlay         : 'Play it NOW',
        link            : 'https://fhuang-tetris.netlify.app/',
    },
    { // SSA
        img             : '/IR_Diagram.png',
        title           : `
            Static-Single Assignment IR Diagram
        `,
        description     : [
            `
                C++, Compiler, DOT
            `,
            `
                Compiler design, read code in “Tiny” language,
                output DOT language files for SSA form Intermediate Representation 
            `,
        ],
        overlay         : 'Watch DEMO',
        link            : 'https://youtu.be/nKmsC9gf2Bg',
    },
    { // Construction
        img             : '/process.png',
        title           : `
            Run and Borrow (Constructing)
        `,
        description     : [
            `
                C++
            `,
            `
                Simulation for processes that ask for resources.
                only one processes run at a time,
                can timeout to run the next process in same priority. 
            `,
        ],
        overlay         : 'Visit Github Page',
        link            : 'https://github.com/fulong-huang/Processes',
    },
];



