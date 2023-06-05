import ProcessesItem from "../process/type";
import ReadyQueueItem from "./type";


export function addToReadyList({
    readyQueue, setReadyQueue,
    processToAdd,
}: {
    readyQueue: ReadyQueueItem[],
    setReadyQueue: (newRQ: ReadyQueueItem[]) => void,
    processToAdd: ProcessesItem,
    //processIdx: number,
}) : void {
    const priority = processToAdd.priority
    const newReadyQueue = [...readyQueue]
    newReadyQueue[priority].queueItem.push(processToAdd)
    setReadyQueue(newReadyQueue)
}

export function removeFromReadyList({
    readyQueue, setReadyQueue,
    processNumToRemove,
}: {
    readyQueue: ReadyQueueItem[],
    setReadyQueue: (newRQ: ReadyQueueItem[]) => void,
    processNumToRemove: number,
}): void{
    const newReadyQueue = [...readyQueue]
    for(let p= 0; p< readyQueue.length; p++){
        const len = newReadyQueue[p].queueItem.length
        for(let i = 0; i < len; i++){
            const thisProcessNum = newReadyQueue[p].queueItem[i].processNum
            if(thisProcessNum == processNumToRemove){
                newReadyQueue[p].queueItem.splice(i, 1)
                setReadyQueue(newReadyQueue)
                return;
            }
        }
    }
}

export function timeout({
    readyQueue, setReadyQueue
}: {
    readyQueue: ReadyQueueItem[],
    setReadyQueue: (newRQ: ReadyQueueItem[]) => void
}): void{
    for(let p = readyQueue.length - 1; p >= 0 ; p--){
        const queueLen = readyQueue[p].queueItem.length
        if(queueLen == 0){
            continue
        }
        if(queueLen == 1){
            return;
        }
        else{
            const process = readyQueue[p].queueItem.shift() as ProcessesItem
            readyQueue[p].queueItem.push(process)
            setReadyQueue([...readyQueue])
            break;
        }
    }
}

