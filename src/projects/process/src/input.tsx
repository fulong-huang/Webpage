import {useEffect, useState,} from 'react'

import ProcessesItem from './process/type';
import ResourceItem from './resource/type';
import ReadyQueueItem from './readyQueue/type';

import { 
    deleteProcess, createProcess, findAllProcessesNumber, findProcess
    } from './process/processFunctions'

import { addToReadyList, removeFromReadyList, timeout } from './readyQueue/readyQueueFunctions';
import { addToWaitlist, requestResource } from './resource/resourceFunctions';

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
        console.log(commandsValue)
        if(commandsValue.length == 0 || commandsValue.length > 3){
            return;
        }
        const command = commandsValue[0];
        if(commandsValue.length == 1){
            console.log(1)
            if(command === "to"){
                // TODO 
                timeout({
                    readyQueue: readyQueue,
                    setReadyQueue: setReadyQueue
                })
            }
        }
        else if(commandsValue.length == 2){
            console.log(2)
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
                const processesToRemove = findAllProcessesNumber({
                    processes: process,
                    processNumber: arg
                })

                //TODO remove from resource waitlist
                for(let i = 0; i < processesToRemove.length; i++){
                    removeFromReadyList({
                        readyQueue: readyQueue,
                        setReadyQueue: setReadyQueue,
                        processNumToRemove: processesToRemove[i]
                    })
                    deleteProcess({
                        processes: process,
                        setProcesses: setProcess,
                        processNumber: processesToRemove[i]
                    })
                }
            }
        }
        else if(commandsValue.length == 3){
            console.log(3)
            console.log("Something here")
            const arg1 = parseInt(commandsValue[1])
            const arg2 = parseInt(commandsValue[2])
            console.log(command)
            // TODO: filter bad input
            if(command === "rq"){
                //TODO
               console.log("rq")
               const processNum = requestResource({
                    resource: resource,
                    setResource: setResource,
                    resourceNum: arg1,
                    amountRequesting: arg2,
                    processNum: processCount - 2
               })
               if(processNum > 0){
                   console.log("ProcessNum > 0")
                    addToWaitlist({
                        resource: resource,
                        setResource: setResource,
                        resourceNum: arg1,
                        process: findProcess({
                            processes: process,
                            processNumber: processCount - 2
                        }) as ProcessesItem
                    })
                    removeFromReadyList({
                        readyQueue: readyQueue,
                        setReadyQueue: setReadyQueue,
                        processNumToRemove: processNum
                    })
               }
            }
            else if(command === "rl"){
                //TODO
            }
        }
            console.log(4)
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

