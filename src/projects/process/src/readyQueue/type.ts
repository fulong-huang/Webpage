export default interface ReadyQueueItem{
    priority: number,
    queueItem: number[],
    setQueueItem: {(numList: number[]) : void}
}