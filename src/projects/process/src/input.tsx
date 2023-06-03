import {useEffect, useState,} from 'react'

import ProcessesItem from './process/type';
import { 
    deleteProcess, createProcess 
    } from './process/processFunctions'
import ResourceItem from './resource/type';


export default function GetUserInput(
    {
        process, setProcess,
        readyQueue, setReadyQueue,
        resource, setResource,
    }:
    {
        process: ProcessesItem[],
        setProcess: (newP: ProcessesItem[]) => void,
        readyQueue: number[][],
        setReadyQueue: (newQ: number[][]) => void,
        resource: ResourceItem[],
        setResource: (newR: ResourceItem[]) => void,
    }
): JSX.Element{

    const [processCount, setProcessCount] = useState<number>(0)

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
            if(!arg){
                return;
            }
            if(command === "cr"){
                createProcess({
                    processes: process,
                    setProcesses: setProcess,
                    priorityVal: 2,
                    processNumber: processCount,
                })
                setProcessCount(processCount+1)
            }
            else if(command === "de"){
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

