import {useEffect, useState,} from 'react'

import ProcessesItem from './process/type';
import ResourceItem from './resource/type';
import ReadyQueueItem from './readyQueue/type';

import { 
    deleteProcess, createProcess, findAllProcessesNumber, findProcess, appendResource, releaseResourceFromProcess
    } from './process/processFunctions'

import { addToReadyList, removeFromReadyList, timeout, topQueue } from './readyQueue/readyQueueFunctions';
import { releaseResource, removeFromWaitlist, requestResource, validateRelease, validateRequest } from './resource/resourceFunctions';

export default function GetUserInput(
    {
        process, setProcess,
        readyQueue, setReadyQueue,
        resource, setResource,
        currentProcess, setCurrentProcess,
        processCount, setProcessCount,
    }:
    {
        process: ProcessesItem[],
        setProcess: (newP: ProcessesItem[]) => void,
        readyQueue: ReadyQueueItem[],
        setReadyQueue: (newQ: ReadyQueueItem[]) => void,
        resource: ResourceItem[],
        setResource: (newR: ResourceItem[]) => void,
        currentProcess: ProcessesItem,
        setCurrentProcess: (newCP: ProcessesItem) => void
        processCount: number,
        setProcessCount: (newPC: number) => void,
    }
): JSX.Element{


    const [inputCommand, setInputCommand] = useState<string>('')

    const runCommand = (): void =>{
        const commandsValue = inputCommand.split(' ')
        if(commandsValue.length == 0 || commandsValue.length > 3){
            return;
        }
        const command = commandsValue[0];
        if(commandsValue.length == 1){
            if(command === "to"){
                timeout({
                    readyQueue: readyQueue,
                    setReadyQueue: setReadyQueue,
                    setCurrentProcess: setCurrentProcess
                })
            }
        }
        else if(commandsValue.length == 2){
            const arg = parseInt(commandsValue[1])
            if(isNaN(arg)){
                // exception
                return;
            }
            if(command === "cr"){
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
                currentProcess.children.push(newProcess)
                if(newProcess.priority > currentProcess.priority){
                    setCurrentProcess(newProcess)
                    console.log(newProcess.priority)
                }
            }
            else if(command === "de"){
                if(arg === 0){
                    console.log("Attempt to delete Process 0")
                    return;
                }
                const processesToRemove = findAllProcessesNumber({
                    processes: process,
                    processNumber: arg
                })
                
                if(processesToRemove.length === 0){
                    return;
                }

                //TODO remove from resource waitlist
                for(let i = 0; i < processesToRemove.length; i++){
                    removeFromWaitlist({
                        resource: resource,
                        setResource: setResource,
                        process: findProcess({
                            processes: process,
                            processNumber: processesToRemove[i]
                        }) as ProcessesItem
                    })
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
                const topProcess = topQueue(readyQueue)
                setCurrentProcess(topProcess)
            }
        }
        else if(commandsValue.length == 3){
            const arg1 = parseInt(commandsValue[1])
            const arg2 = parseInt(commandsValue[2])
            // TODO: filter bad input
            if(command === "rq"){

                const validRequest = validateRequest({
                    resource: resource,
                    resourceNum: arg1,
                    process: currentProcess,
                    requestingAmount: arg2,
                })
                if(!validRequest){
                    console.log("Invalid Request")
                    return
                }

                const enoughResource = requestResource({
                    resource: resource,
                    setResource: setResource,
                    resourceNum: arg1,
                    amountRequesting: arg2,
                    processNum: currentProcess.processNum
                })
                //if(processNum > 0){
                if(!enoughResource){
                    removeFromReadyList({
                        readyQueue: readyQueue,
                        setReadyQueue: setReadyQueue,
                        processNumToRemove: currentProcess.processNum
                    })
                    const topProcess = topQueue(readyQueue)
                    setCurrentProcess(topProcess)
                }
                else{
                    appendResource({
                        processes: process,
                        setProcesses: setProcess,
                        targetProcess: currentProcess,
                        resourceNum: arg1,
                        amountRequested: arg2
                    })
                }
            }
            else if(command === "rl"){
                //TODO
                const arg1 = parseInt(commandsValue[1])
                const arg2 = parseInt(commandsValue[2])
                const validRelease = validateRelease({
                    resourceNum: arg1,
                    releaseAmount: arg2,
                    process: currentProcess
                })
                if(!validRelease){
                    console.log("Invalid Release")
                    return;
                }
                releaseResourceFromProcess({
                    processes: process,
                    setProcesses: setProcess,
                    resourceNum: arg1,
                    freedAmount: arg2,
                    targetProcess: currentProcess
                })
                const freedProcess = releaseResource({
                    resources: resource,
                    setResources: setResource,
                    resourceNum: arg1,
                    amount: arg2
                })
                for(let i = 0; i < freedProcess.length; i++){
                    addToReadyList({
                        readyQueue: readyQueue,
                        setReadyQueue: setReadyQueue,
                        processToAdd: findProcess({
                            processes: process,
                            processNumber: freedProcess[i][0]
                        }) as ProcessesItem
                    })
                    appendResource({
                        processes: process,
                        setProcesses: setProcess,
                        resourceNum: arg1,
                        amountRequested: freedProcess[i][1],
                        targetProcess: findProcess({
                            processes: process,
                            processNumber: freedProcess[i][0]
                        }) as ProcessesItem
                    })
                }

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

