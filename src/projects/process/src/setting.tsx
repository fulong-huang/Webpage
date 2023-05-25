import {useState} from 'react'
import ResourceItem from "./resource/type";
import ProcessesItem from "./process/type";


const ChangeButton = (
    {
        setQueue, queueSize,
        setProcess, processSize,
        //setResource, resourceSize,
    }:
    {
        setQueue: (newQueue: number[][]) => void,
        setProcess: (newP: ProcessesItem[]) => void
        //setResourc: (newValue: ResourceItem[]) => void
        queueSize: number
        processSize: number
        //resourceSize: number
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

    const changeAllSize = (): void => {
        changeQueueSize();
        changeProcessSize();
        //changeResourceSize();
    }
    return (
        <>
        <button onClick={changeAllSize}>Submit</button>    
        </>
    )
}



// Needs to prevent it from reloading.
// Plan A: make it into it's own function
// Plan B: create a button to trigger instead of setting them individually.
const ResourceManager = ({inputData, resources, setResources}: 
    {
        inputData: number[],
        resources: ResourceItem[],
        setResources: (newValue: ResourceItem[]) => void
    }): JSX.Element => {

    const inputOnChange = (
        idx: number, newTotal: number,
        ) => {

        const newReosurces = [... resources]
        newReosurces[idx].avaliable = newTotal
        newReosurces[idx].total = newTotal
        setResources(newReosurces)
    }

    return (
        <>
        <div>
            <p>Start</p>
            {
            inputData.map((_, index) => (
                <div key={'resource_' + index}>
                    #{index}: 
                    <input 
                        key={'resource_' + index} 
                        type='number' 
                        placeholder="3"
                        onChange={(e) => inputOnChange(index, parseInt(e.target.value))} />
                </div>
            ))
            }
            <p>End</p>
        </div>
        </>
    )
}


const ResourceInput = ({resources, setResources} : 
    {
        resources: ResourceItem[],
        setResources: (newValue: ResourceItem[]) => void,
    }): JSX.Element => {

    const [size, setSize] = useState<number>(0);
    const [inputData, setInputData] = useState<number[]>([]);

    const changeInputSize = () =>{
        if(size <= resources.length){
            setResources(resources.slice(0, size))
            setInputData(inputData.slice(0, size))
            return;
        }

        const newInputData = [... inputData]
        const newResources = [... resources]

        for(let i = resources.length; i < size; i++){
            const item: ResourceItem = {
                resourceNum: i + 1,
                total: 3,
                avaliable: 3,
                waitlist: [],
            }
            newResources.push(item)
            newInputData.push(3)
        }
        setInputData(newInputData)
        setResources(newResources);
    }
    
    return (
        <>
            <div>Resources Size: &nbsp;
                <input type='number' 
                    onChange={(e) => {setSize(parseInt(e.target.value))}}>

                </input>
                <button onClick={changeInputSize}>Submit</button>
            </div>
            <ResourceManager inputData={inputData} resources={resources} setResources={setResources} />
        </>
    )
}

export const Settings = (
    {setQueue, setProcesses, setResources, resources} : 
    {
        setQueue: (newQueue: number[][]) => void,
        setProcesses: (newP: ProcessesItem[]) => void,
        setResources: (newValue: ResourceItem[]) => void,
        resources: ResourceItem[]
    }) => {

    const [queueSize, setQueueSize] = useState<number>(3);
    const [processSize, setProcessSize] = useState<number>(2);
    //const [resourceSize, setResourceSize] = useState<number>(1);

    // ********************* Process **********************
    return (
        <>
        <p> set Queue Size: 
            <input type='number' onChange={(e) => {setQueueSize(parseInt(e.target.value))}} />
        </p>
        <p> set Process Size: 
            <input type='number' onChange={(e) => {setProcessSize(parseInt(e.target.value))}} />
        </p>
        <ChangeButton setQueue={setQueue} queueSize={queueSize} 
            setProcess={setProcesses} processSize={processSize}/>
        <ResourceInput resources={resources} setResources={setResources} />
        </>
    )
    
}

