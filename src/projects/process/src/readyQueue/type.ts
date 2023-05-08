export default interface ReadyQueueItem{
    priority: number,
    queue: [
        queueItem: number[],
        setQueueItem: {(numList: number[]) : void}
    ]
}