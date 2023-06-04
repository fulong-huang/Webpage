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

export default function ProcessNResource(): JSX.Element{
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
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
    

    return (
        <>
        {/* Processes */}
        <h3><br/><br/>In Construction, come back later <br/><br/></h3>
        {/* Setting page: */}
        <div>
            {<Settings 
                setQueue={setQueue} 
                //setProcesses={setProcesses} 
                setResource={setResources} 
                resource={resources} 
            />}
        </div>
        <div>
            <GetUserInput process={processes} setProcess={setProcesses} 
                        readyQueue={queue} setReadyQueue={setQueue}
                        resource={resources} setResource={setResources}/>
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
       </>
    );
}

