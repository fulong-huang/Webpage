import {useState, useEffect} from 'react'
import ResourceItem from "./resource/type";
import ProcessesItem from "./process/type";


const ChangeButton = (
    {
        setQueue, queueSize,
        setProcess, processSize,
        setResource, resourceSize,
        inputData, setInputData,
        resource,
    }:
    {
        setQueue: (newQueue: number[][]) => void,
        setProcess: (newP: ProcessesItem[]) => void,
        setResource: (newValue: ResourceItem[]) => void,
        setInputData: (newinput: number[]) => void,

        resource: ResourceItem[],
        inputData: number[],
        
        queueSize: number,
        processSize: number,
        resourceSize: number,
        
    }): JSX.Element => {

    // ************ QUEUE **************
    const changeQueueSize = (): void => {
        const newQueue = []
        for(let i = 0; i < queueSize; i++){
            newQueue.push([])
        }
        setQueue(newQueue)
    }


    // ************ PROCESSES **************
    const changeProcessSize = ():void => {
        const newProcesses = []
        for(let i = 0; i < processSize; i++){
            newProcesses.push({
                processNum: i,
                children: [],
                resources: []
            })
        }
        setProcess(newProcesses)
    }

    const changeResourceSize = ():void => {
        if(resourceSize <= resource.length){
            setResource(resource.slice(0, resourceSize));
            setInputData(inputData.slice(0, resourceSize));
            return;
        }
        
        const newInputData = [...inputData]
        const newResource = [... resource]

        for(let i = resource.length; i< resourceSize; i++){
            const item: ResourceItem = {
                resourceNum: i + 1,
                total: 3, 
                avaliable: 3, 
                waitlist: [],
            }
            newResource.push(item);
            newInputData.push(3);
        }
        setInputData(newInputData);
        setResource(newResource);
    }


    const changeAllSize = (): void => {
        changeQueueSize();
        changeProcessSize();
        changeResourceSize();
    }
    return (
        <>
        <button onClick={changeAllSize}>Submit</button>    
        </>
    )
}


// TODO: Add a button to change everything at once
const ResourceManager = ({inputData, resources, setResources}: 
    {
        inputData: number[],
        resources: ResourceItem[],
        setResources: (newValue: ResourceItem[]) => void
    }): JSX.Element => {

    const onClick = ():void => {
        const newResources = [... resources]
        for(let i = 0; i < inputData.length; i++){
            newResources[i].avaliable = inputData[i];
            newResources[i].total = inputData[i];
        }
        setResources(newResources);
    }
//    const inputOnChange = (
//        idx: number, newTotal: number,
//        ) => {
//
//        const newReosurces = [... resources]
//        newReosurces[idx].avaliable = newTotal
//        newReosurces[idx].total = newTotal
//        setResources(newReosurces)
//    }

    return (
        <>
        <p>Start</p>
        {
            inputData.map((_, index) => (
                <div key={'resource_' + index}>
                    #{index}: 
                    <input 
                        key={'resource_' + index} 
                        type='number' 
                        placeholder={inputData[index].toString()}
                        onChange={(e) => inputData[index] = parseInt(e.target.value)} />
                </div>
            ))
        }
        <button onClick={onClick}> button </button>
        <p>End</p>
        </>
    )
}


export const Settings = (
    {setQueue, setProcesses, setResource, resource} : 
    {
        setQueue: (newQueue: number[][]) => void,
        setProcesses: (newP: ProcessesItem[]) => void,
        setResource: (newValue: ResourceItem[]) => void,
        resource: ResourceItem[]
    }) => {

    const [queueSize, setQueueSize] = useState<number>(3);
    const [processSize, setProcessSize] = useState<number>(2);
    const [resourceSize, setResourceSize] = useState<number>(1);
    const [inputData, setInputData] = useState<number[]>([3,3,3]);

    // ********************* Process **********************
    return (
        <>
        <p> set Queue Size: 
            <input type='number' placeholder='3' onChange={(e) => {setQueueSize(parseInt(e.target.value))}} />
        </p>
        <p> set Process Size: 
            <input type='number' placeholder='0: should not exist'  onChange={(e) => {setProcessSize(parseInt(e.target.value))}} />
        </p>
        <p> set Resource Size:
            <input type='number' placeholder='3' onChange={(e) => {setResourceSize(parseInt(e.target.value))}} />
        </p>
        <ChangeButton setQueue={setQueue} queueSize={queueSize} 
            setProcess={setProcesses} processSize={processSize}
            setResource={setResource} resourceSize={resourceSize}
            inputData={inputData} setInputData={setInputData}
            resource={resource}
        />

        <ResourceManager inputData={inputData} resources={resource} setResources={setResource} />
        </>
    )
    
}

