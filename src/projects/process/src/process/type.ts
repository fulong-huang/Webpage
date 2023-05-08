
export default interface ProcessesItem{
    processNum: number,
    children: number[],
    setChildren: {(newChildren: number[]): void}
    resources: number[],
    setResources: {(newResources: number[]): void}
}
