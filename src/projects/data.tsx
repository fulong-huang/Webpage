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
            Scheduler (C++ version)
        `,
        description     : [
            `
                C++
            `,
            `
                Simulation for process scheduler.
                Request resource exceed avaliable resources will put process
                onto waitlist, 
                until resources are free to assign.
            `,
        ],
        overlay         : 'Visit Github Page',
        link            : 'https://github.com/fulong-huang/Processes',
    },
    { // Construction
        img             : 'Scheduler.png',
        title           : `
            Scheduler (Web version)
        `,
        description     : [
            `
                TypeScript, React
            `,
            `
                Similar to previous project, 
                with increased customization while using TypeScript and React
                for better visualization, and to gain more indept knowledge
                of the tools.
            `,
        ],
        overlay         : 'View Project',
        link            : 'process'
    },
    { // Chess
        img             : '/Chess.png',
        title           : `
            Chess
        `,
        description     : [
            `
                C++, CMake, TDD
            `,
            `
                Chess game written in C++,
                UI made with SFML.
            `,
        ],
        overlay         : 'Visit Github Page',
        link            : 'https://github.com/fulong-huang/Chess',
    },
    {
        img             : '/Chess.png',
        title           : 
            `
                Chess with Friend [Currently Working On]
            `,
        description     : [
            `
                C++, CMake, (multi-thread, server-client connection)
            `,
            `
                Game of chess, allow connection via web.
            `
        ],
        overlay         : 'Visit Github Page',
        link            : 'https://github.com/fulong-huang/Chess_Online',
    },
];



