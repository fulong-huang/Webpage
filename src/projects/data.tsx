// import React from 'react';

export type dataContainer = {
    bgColor     : string,
    img         : string,
    title       : string,
    date        : string,
    description : string[],
    overlay     : string,
    link        : string,
}

export const projectData : dataContainer[] = [
    { // Website
        bgColor         : 'rgb(80, 150, 230)',
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
        bgColor         : 'rgb(20, 231, 242)',
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
        bgColor         : 'rgb(0, 180, 180)',
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
        bgColor         : 'rgb(250 150 80)',
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
        bgColor         : 'rgb(250 100 130)',
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
        bgColor         : 'rgb(250 100 130)',
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
        bgColor         : 'rgb(250 180 80)',
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
        bgColor         : 'rgb(250 180 80)',
        img             : '/Chess_Online.png',
        title           : 
            `
                Chess with Friends
            `,
        date            : "Jun 21 - July 5",
        description     : [
            `
                C++, CMake, Multi-thread, Socket
            `,
            `
                Game of chess,
                allow multiple players connect through socket.
                All players can move the board at the same time.
                Server will validate client inputs before proceed.
            `
        ],
        overlay         : 'Visit Github Page',
        link            : 'https://github.com/fulong-huang/Chess_Online',
    },
    {
        bgColor         : 'rgb(250 180 80)',
        img             : '/ChaoticChess.png',
        title           : 
            `
                Chaotic Chess
            `,
        date            : "Jul 11 - Present",
        description     : [
            `
                NodeJS, React, REST API,
            `,
            `
                Rebuilt Chess game for browser
                to allow ease of access.
                [programming with a friend
                under the supervision of an experienced engineer]
            `
        ],
        overlay         : 'Visit Github Page',
        link            : 'https://github.com/fulong-huang/chaotic_chess',
    },
    {
        bgColor         : 'rgb(200 100 100)',
        img             : 'Soundcorset.png',
        title           : 
            `
                Metronome
            `,
        date            : "Jul 14 - Present",
        description     : [
            `
                C++, SFML
            `,
            `
                Metronome, which also allow user to adjust pitch of beats
                besides tempo and volumn.
                Possibly adding drone alone side with metronome.
            `
        ],
        overlay         : 'Visit Github Page',
        link            : 'https://github.com/fulong-huang/metronome',
    },
    {
        //bgColor         : 'rgb(200, 100, 200)',
        bgColor         : 'grey',
        img             : '/SoundSheet.png',
        title           : 
            `
                Sound Sheet
            `,
        date            : "After Metronome",
        description     : [
            `
                C++, SFML
            `,
            `
                Start after completion of metronome. 
                Tool to build sheet music and 
                listen to play back.
            `
        ],
        overlay         : 'Not Avaliable',
        link            : '',
    },
];



