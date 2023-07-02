// import React from 'react';

export type dataContainer = {
    img         : string,
    title       : string,
    date        : string,
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
        date            : "Apr 26 - May 2",
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
        date            : "",
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
        date            : "Apr 10 - Apr 12",
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
        date            : "",
        description     : [
            `
                C++, Compiler, DOT
            `,
            `
                Compiler design, read code in “Tiny” language,
                output DOT language files for SSA form Intermediate Representation 
            `,
        ],
        overlay         : 'Visit Github Page',
        link            : 'https://github.com/fulong-huang/Compiler',
    },
    { // Construction
        img             : '/process.png',
        title           : `
            Scheduler (C++ version)
        `,
        date            : "",
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
        date            : "May 7 - Jun 9",
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
        date            : "Jun 10 - Jun 18",
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
        img             : '/Chess_Online.png',
        title           : 
            `
                Chess with Friends
            `,
        date            : "Jun 21 - Present",
        description     : [
            `
                C++, CMake, Multi-thread, Socket
            `,
            `
                Game of chess,
                allow multiple players connect through socket.
                All players can move the board at the same time.
                Server will validate all client inputs.
            `
        ],
        overlay         : 'Visit Github Page',
        link            : 'https://github.com/fulong-huang/Chess_Online',
    },
];



