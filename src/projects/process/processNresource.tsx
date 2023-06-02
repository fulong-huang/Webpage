import {useState, useEffect} from 'react'
import {ReadyQueueDisplay} from './src/readyQueue/readyQueue.tsx'
import {ProcessesDisplay} from './src/process/processes.tsx'
import {ResourceDisplay } from './src/resource/resource.tsx'

import ResourceItem from './src/resource/type.ts'
import ProcessesItem from './src/process/type.ts'
import './processNresource.css'
import {Settings} from './src/setting.tsx'

export default function ProcessNResource(): JSX.Element{
    window.scrollTo(0, 0)
    const [queue, setQueue] = useState<number[][]>([
        //[-1], [-2, -3], []
        [],
        [],
        []
    ])
    const [processes, setProcesses] = useState<ProcessesItem[]>([
        {
            processNum: -1,
            children: [],
            resources: [-1]
        },
        {
            processNum: -2,
            children: [-1],
            resources: [-1, -2]
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
    
    // TODO: remove use effect
    useEffect(()=>{
        setProcesses([])
    }, [])

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

