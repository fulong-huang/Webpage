import {useState} from 'react'
import {ReadyQueueDisplay, ReadyQueueSetting} from './src/readyQueue/readyQueue.tsx'
import {ProcessesDisplay, ProcessesSetting} from './src/process/processes.tsx'
import {ResourceDisplay, ResourceInput} from './src/resource/resource.tsx'

import ResourceItem from './src/resource/type.ts'
import ProcessesItem from './src/process/type.ts'
import './processNresource.css'

export default function ProcessNResource(): JSX.Element{
    const [queue, setQueue] = useState<number[][]>(
        [[-1], [-2, -3], []]
    )
    const [processes, setProcesses] = useState<ProcessesItem[]>(
        [{
            processNum: -1,
            children: [],
            resources: [-1]
        },
        {
            processNum: -2,
            children: [-1],
            resources: [-1, -2]
        }]
    )
    const [resources, setResources] = useState<ResourceItem[]>([])

    return (
        <>
        {/* Processes */}
        <h3><br/><br/>In Construction, come back later <br/><br/></h3>
        {/* Setting page: */}
        <div>
            {<ReadyQueueSetting setQueue={setQueue} />}
            {<ProcessesSetting setProcesses={setProcesses} />}
            {<ResourceInput resources={resources} setResources={setResources} />}
        </div>
        {/* Tables: */}
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {<ReadyQueueDisplay queue={queue} />}
            {<ProcessesDisplay processes={processes} />}

            {<ResourceDisplay resources={resources}/>}
        </div>
       </>
    );
}