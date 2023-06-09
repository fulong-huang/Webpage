import {useState } from 'react'
import ResourceItem from "./resource/type";
import ReadyQueueItem from './readyQueue/type';
import ProcessesItem from "./process/type";

import './setting.css'

const ChangeButton = (
    {
        setQueue, queueSize,
        setProcess, //processSize,
        setResource, resourceSize,
        inputData, setInputData,
        resource,
        setCurrentProcess,
        setProcessCount,
    }:
    {
        setQueue: (newQueue: ReadyQueueItem[]) => void,
        setProcess: (newP: ProcessesItem[]) => void,
        setResource: (newValue: ResourceItem[]) => void,
        setInputData: (newinput: number[]) => void,
        setCurrentProcess: (newCP: ProcessesItem) => void,
        setProcessCount: (newPC: number) => void,

        resource: ResourceItem[],
        inputData: number[],
        
        queueSize: number,
        //processSize: number,
        resourceSize: number,
        
    }): JSX.Element => {

    // ************ QUEUE **************
    const changeQueueSize = (): void => {
        const newQueue: ReadyQueueItem[] = []
        for(let i = 0; i < queueSize; i++){
            newQueue.push({
                queueItem: []
            })
        }
        setQueue(newQueue)
    }


    // ************ PROCESSES **************
//    const changeProcessSize = ():void => {
//        const newProcesses = []
//        for(let i = 0; i < processSize; i++){
//            newProcesses.push({
//                processNum: i,
//                children: [],
//                resources: []
//            })
//        }
//        setProcess(newProcesses)
//    }

    const changeResourceSize = ():void => {
        if(resourceSize <= resource.length){
            setResource(resource.slice(0, resourceSize));
            setInputData(inputData.slice(0, resourceSize));
            return;
        }
        
        const newInputData = [...inputData]
        const newResource = [... resource]

        for(let i = 0; i < resource.length; i++){
            newResource[i].avaliable = newResource[i].total
            newResource[i].waitlist = []
        }
        for(let i = resource.length; i< resourceSize; i++){
            const item: ResourceItem = {
                resourceNum: i ,
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

    const changeProcessSize = ():void =>{
        const newProcess: ProcessesItem[] = [
            {
                priority: 0,
                processNum: 0,
                resources: [],
                children: [],
            }
        ]
        setProcess(newProcess)
        setCurrentProcess(newProcess[0])
        setProcessCount(1)
    }

    const changeAllSize = (): void => {
        changeQueueSize();
        changeProcessSize();
        changeResourceSize();
    }
    return (
        <>
        <button className='setting-confirm-button' onClick={changeAllSize}>Confirm</button>    
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
            <br/>
            <br/>
        <h3>Resource Amount: </h3>
        <div className='set-resource-amount'>
        {
            inputData.map((_, index) => (
                <div key={'resource_' + index}>
                    #{index}:{index>9? '':' '}&nbsp;{index>9? '':' '}

                    <input 
                        className='setting-input-bar'
                        key={'resource_' + index} 
                        type='number' 
                        placeholder={inputData[index].toString()}
                        onChange={(e) => inputData[index] = parseInt(e.target.value)} />
                </div>
            ))
        }
        </div>
        <button className='setting-confirm-button' onClick={onClick}> Confirm </button>
        </>
    )
}


export const Settings = (
    {setQueue, setResource, setProcesses, resource, setCurrentProcess, setProcessCount} : 
    {
        setQueue: (newQueue: ReadyQueueItem[]) => void,
        setProcesses: (newP: ProcessesItem[]) => void,
        setResource: (newValue: ResourceItem[]) => void,
        resource: ResourceItem[]
        setCurrentProcess: (newCP: ProcessesItem) => void
        setProcessCount: (newPC: number) => void
    }) => {

    const [queueSize, setQueueSize] = useState<number>(3);
    //const [processSize, setProcessSize] = useState<number>(2);
    const [resourceSize, setResourceSize] = useState<number>(3);
    const [inputData, setInputData] = useState<number[]>([3,3,3]);

    const [settingShow, setSettingShow] = useState<boolean>(true);

    // ********************* Process **********************
    return (
        <>
        <div className='setting-page'>
        <h1 className='setting-page-title'> 
            Setting &nbsp;
            <button className='setting-button' onClick={()=>{setSettingShow(!settingShow)}}> ({settingShow? 'hide':'show'}) </button> 
        </h1>
        
        {settingShow && (
        <div className='setting-items'>
            <h3> Set Size: </h3>
            <div className='set-sizes'>
                <p> set Queue Size: 
                    <input className='setting-input-bar' type='number' placeholder='3' onChange={(e) => {setQueueSize(parseInt(e.target.value))}} />
                </p>
                <p> set Resource Size:
                    <input className='setting-input-bar' type='number' placeholder='3' onChange={(e) => {setResourceSize(parseInt(e.target.value))}} />
                </p>
            </div>
                <ChangeButton setQueue={setQueue} queueSize={queueSize} 
                    setProcess={setProcesses}
                    setResource={setResource} resourceSize={resourceSize}
                    inputData={inputData} setInputData={setInputData}
                    resource={resource}
                    setCurrentProcess={setCurrentProcess}
                    setProcessCount={setProcessCount}
                />

            <ResourceManager inputData={inputData} resources={resource} setResources={setResource} />
        </div>
        )}

        </div>
        </>
    )
    
}

