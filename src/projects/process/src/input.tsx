import {useEffect, useState,} from 'react'

import ProcessesItem from './process/type';
import ResourceItem from './resource/type';
import ReadyQueueItem from './readyQueue/type';

import { 
    deleteProcess, createProcess 
    } from './process/processFunctions'

import { addToReadyList } from './readyQueue/readyQueueFunctions';

export default function GetUserInput(
    {
        process, setProcess,
        readyQueue, setReadyQueue,
        resource, setResource,
    }:
    {
        process: ProcessesItem[],
        setProcess: (newP: ProcessesItem[]) => void,
        readyQueue: ReadyQueueItem[],
        setReadyQueue: (newQ: ReadyQueueItem[]) => void,
        resource: ResourceItem[],
        setResource: (newR: ResourceItem[]) => void,
    }
): JSX.Element{

    const [processCount, setProcessCount] = useState<number>(1)

    const [inputCommand, setInputCommand] = useState<string>('')

    const runCommand = (): void =>{
        const commandsValue = inputCommand.split(' ')
        if(commandsValue.length == 0 || commandsValue.length >= 3){
            return;
        }
        const command = commandsValue[0];
        if(commandsValue.length == 1){
            if(command === "to"){
                // TODO 
            }
        }
        else if(commandsValue.length == 2){
            const arg = parseInt(commandsValue[1])
            if(isNaN(arg)){
                // exception
                return;
            }
            if(command === "cr"){
                //TODO add to ready queue
                if(arg < 0 || arg >= readyQueue.length){
                    // exception
                    return;
                }
                const newProcess = createProcess({
                    processes: process,
                    setProcesses: setProcess,
                    priorityVal: arg,
                    processNumber: processCount,
                })
                addToReadyList({
                    readyQueue: readyQueue,
                    setReadyQueue: setReadyQueue,
                    processToAdd: newProcess,
                })
                setProcessCount(processCount+1)
            }
            else if(command === "de"){
                //TODO remove from ready list 
                //TODO remove from resource waitlist
                deleteProcess({
                    processes: process,
                    setProcesses: setProcess,
                    processNumber: arg
                })
            }
        }
        else if(commandsValue.length == 3){
            const arg1 = parseInt(commandsValue[1])
            const arg2 = parseInt(commandsValue[2])
            if(!arg1 || !arg2){
                return;
            }
            if(command === "rq"){
                //TODO
            }
            else if(command === "rl"){
                //TODO
            }
        }
    }

    //TODO
    useEffect(()=>{
        setProcess(process)
        setResource(resource)
        setReadyQueue(readyQueue)
    },[])

    return (
        <>
        <input onChange={(e) => {setInputCommand(e.target.value)}}/>
        <button onClick={()=>{runCommand()}}> submit </button>
        </>
    )
}

