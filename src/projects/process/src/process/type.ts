
export default interface ProcessesItem{
    processNum: number,
    priority: number,
    children: ProcessesItem[],
    resources: {
        resourceNum: number,
        holding: number
    }[]
}
