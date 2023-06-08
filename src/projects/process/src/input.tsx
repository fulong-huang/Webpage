import {useState,} from 'react'

import ProcessesItem from './process/type';
import ResourceItem from './resource/type';
import ReadyQueueItem from './readyQueue/type';

import { 
    deleteProcess, createProcess, findAllProcessesNumber, findProcess, appendResource, releaseResourceFromProcess, hasDescendant
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
    const [message, setMessage] = useState<string>('Empty')

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
                if(readyQueue[currentProcess.priority].queueItem.length >= 1){
                    setMessage(`
                        Success, set current process to 
                        ${currentProcess.processNum}
                    `)
                }
                else{
                    setMessage(`Success, 
                        current process is the only process with 
                        highest priority
                    `)
                }
            }
            else{
                setMessage("---ERROR--- Unknown Command")
            }
        }
        else if(commandsValue.length == 2){
            const arg = parseInt(commandsValue[1])
            if(isNaN(arg)){ // Error error
                // exception
                setMessage("---ERROR--- invalid argument, expect integer")
                return;
            }
            if(command === "cr"){
                if(arg < 0 || arg >= readyQueue.length){ // Error error
                    setMessage(`---ERROR---
                        priority out of bound, expect 0 to ${readyQueue.length}
                    `)
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
                    setMessage(`Success,
                        change running process to ${newProcess.processNum}
                    `)
                }
                else{
                    setMessage(`Success, 
                        created child ${newProcess.processNum}
                    `)
                }
            }
            else if(command === "de"){
                if(arg === 0){ // Error error
                    console.log("Attempt to delete Process 0")
                    setMessage("---ERROR--- Can not delete process 0")
                    return;
                }
                const isDescendant = hasDescendant({
                    ancestor: currentProcess,
                    descendantNum: arg
                })
                if(!isDescendant){
                    setMessage(`---ERROR---
                        Process ${arg} is not descendent of process 
                        ${currentProcess.processNum}
                    `)
                    return
                }
                const processesToRemove = findAllProcessesNumber({
                    processes: process,
                    processNumber: arg
                })
                
                if(processesToRemove.length === 0){ // Error error
                    // should not execute
                    setMessage(`---UNKNOWN ERROR---
                        Processes To Remove have length of 0
                    `)
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
                setMessage(`Success, current running process ${topProcess.processNum}`)
            }
            else{
                setMessage("---ERROR--- Unknown Command")
            }
        }
        else if(commandsValue.length == 3){
            const arg1 = parseInt(commandsValue[1])
            const arg2 = parseInt(commandsValue[2])
            if(isNaN(arg1) || isNaN(arg2)){
                console.log("Invalid Argument")
                setMessage("---ERROR--- invalid arguments, expect integer")
                return;
            }
            // TODO: filter bad input
            if(command === "rq"){

                if(arg1 < 0 || arg1 >= resource.length){ // Error error
                    console.log("Requesting resource out of bound")
                    setMessage(`---ERROR---
                        Requesting resource out of bound, 
                        expect 0 to ${resource.length}
                    `)
                    return
                }
                if(arg2 <= 0 || arg2 > resource[arg1].total){ // Error error
                    console.log("Requesting too many resources")
                    setMessage(`---ERROR
                        Requesting amount invalid,
                        expect 1 to ${resource[arg1].total}
                    `)
                    return
                }
                if(currentProcess.processNum === 0){
                    console.log("Process 0 can not request resources")
                    setMessage(`---ERROR--- 
                        Process 0 can not request resources
                    `)
                    return;
                }

                const validRequest = validateRequest({
                    resource: resource,
                    resourceNum: arg1,
                    process: currentProcess,
                    requestingAmount: arg2,
                })
                if(!validRequest){ // Error error
                    console.log("Invalid Request")
                    console.log("Total requests out of bound")
                    setMessage(`---Error--- 
                        Holding amount + requesting amoung larger than
                        total amount of resources
                    `)
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
                    setMessage(`Success, 
                        Insufficient avaliable amount,
                        placed process onto resource waitlist,
                        change running process to ${topProcess.processNum}
                    `)
                }
                else{
                    appendResource({
                        processes: process,
                        setProcesses: setProcess,
                        targetProcess: currentProcess,
                        resourceNum: arg1,
                        amountRequested: arg2
                    })
                    setMessage(`Success,
                        Process now holding requested resource
                    `)
                }
            }
            else if(command === "rl"){
                //TODO
//                const arg1 = parseInt(commandsValue[1])
//                const arg2 = parseInt(commandsValue[2])

                if(arg1 < 0 || arg1 >= resource.length){ // Error error
                    console.log("Releasing resource out of bound")
                    setMessage(`---ERROR---
                        Releasing resource out of bound, 
                        expect 0 to ${resource.length}
                    `)
                    return
                }
                if(arg2 <= 0 || arg2 > resource[arg1].total){ // Error error
                    console.log("Releasing invalid amount of resources")
                    setMessage(`---ERROR
                        Releasing amount invalid,
                        expect 1 to ${resource[arg1].total}
                    `)
                    return
                }

                const validRelease = validateRelease({
                    resourceNum: arg1,
                    releaseAmount: arg2,
                    process: currentProcess
                })
                if(!validRelease){
                    console.log("Releasing amount more than holding amount")
                    setMessage(`---ERROR---
                        Release resource amount larger than holding amount
                    `)
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
                const topProcess = topQueue(readyQueue)
                if(topProcess.priority > currentProcess.priority){
                    setMessage(`Success,
                        freed process with higher priority,
                        change current process to ${topProcess.priority}
                    `)
                    setCurrentProcess(topProcess)
                }
                else{
                    setMessage(`Success,
                        freed resources
                    `)
                }
            }
        }
    }


    return (
        <>
        <input onChange={(e) => {setInputCommand(e.target.value)}}/>
        <button onClick={()=>{runCommand()}}> submit </button>
        <p>Message: </p>
        <p>{message} </p>
        </>
    )
}

