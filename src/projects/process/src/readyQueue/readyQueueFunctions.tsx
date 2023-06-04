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

