import {useState} from 'react'

import './helpPage.css'

export default function HelpPage(){
    const [helpOpen, setHelpOpen] = useState<boolean>(true);
    
    return (
        <>
        <button onClick={()=>{setHelpOpen(!helpOpen)}}> HELP </button>
        {helpOpen && (
            <div className='help-page'>
                <h1 className='help-page-title'> Help Page </h1>
                <h3> commands will be ran using current running process </h3>
                <div className='help-content'>
                    <p> [to]: </p>
                    <p> timeout current process, go to next process</p>
                    <p> [cr #1]: </p>
                    <p> create a process with priority '#1' </p>
                    <p> [de #1]: </p>
                    <p> delete process '#1' (descendent of current process) </p>
                    <p> [rq #1 #2]: </p>
                    <p> request resource '#1' for '#2' amount </p>
                    <p> [rl #1 #2]: </p>
                    <p> release resource '#1' for '#2' amount </p>

                </div>
            </div>
        )}
        </>
    )
}

