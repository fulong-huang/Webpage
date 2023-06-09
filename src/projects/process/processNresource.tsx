import {useState, useEffect} from 'react'
import {ReadyQueueDisplay} from './src/readyQueue/readyQueue.tsx'
import {ProcessesDisplay} from './src/process/processes.tsx'
import {ResourceDisplay } from './src/resource/resource.tsx'

import ResourceItem from './src/resource/type.ts'
import ProcessesItem from './src/process/type.ts'
import ReadyQueueItem from './src/readyQueue/type.ts'
import './processNresource.css'
import {Settings} from './src/setting.tsx'

import GetUserInput from './src/input.tsx'
import HelpPage from './src/helpPage/helpPage.tsx'

export default function ProcessNResource(): JSX.Element{
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    const [processCount, setProcessCount] = useState<number>(1)
    const [processes, setProcesses] = useState<ProcessesItem[]>([
        {
            priority: 0,
            resources: [],
            children: [],
            processNum: 0,
        }
    ])
    const [queue, setQueue] = useState<ReadyQueueItem[]>([
        {
            queueItem: [processes[0]]
        },
        {
            queueItem: []
        },
        {
            queueItem: []
        }
    ])
    const [resources, setResources] = useState<ResourceItem[]>([
        {
            resourceNum: 0,
            total: 3,
            avaliable: 3,
            waitlist: []
        },
        {
            resourceNum: 1,
            total: 3,
            avaliable: 3,
            waitlist: []
        },
        {
            resourceNum: 2,
            total: 3,
            avaliable: 3,
            waitlist: []
        }
    ])
    

    const [currentProcess, setCurrentProcess] = useState<ProcessesItem>(processes[0])

    return (
        <>
        <div className='scheduler-container'>
        <p className='scheduler'>
            Scheduler
        </p>
        {/* Processes */}
        <HelpPage />
        {/* Setting page: */}
        <div className='setting-container'>
            {<Settings 
                setQueue={setQueue} 
                setProcesses={setProcesses} 
                setResource={setResources} 
                resource={resources} 
                setCurrentProcess={setCurrentProcess}
                setProcessCount = {setProcessCount}
            />}
        </div>
        <div className='user-commands'>
            <h1 style={{textAlign: 'center'}}> Commands: </h1>
            <GetUserInput process={processes} setProcess={setProcesses} 
                        readyQueue={queue} setReadyQueue={setQueue}
                        resource={resources} setResource={setResources}
                        currentProcess={currentProcess} setCurrentProcess={setCurrentProcess}
                        processCount={processCount} setProcessCount={setProcessCount}
                        />
        </div>
        {/* Tables: */}
        {/*<div style={{display:'flex', flexWrap:'wrap', alignItems:'center',  margin: '50px'}}>*/}
        <div className="main-content-container">
            <div className="first-column">
                {<ReadyQueueDisplay queue={queue} />}
                {<ResourceDisplay resources={resources}/>}
            </div>
            <div className="second-column">
                {<ProcessesDisplay processes={processes} />}
            </div>

        </div>
       </div>
       </>
    );
}

