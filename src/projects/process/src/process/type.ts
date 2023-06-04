import ResourceItem from "../resource/type";

export default interface ProcessesItem{
    processNum: number,
    priority: number,
    children: ProcessesItem[],
    resources: ResourceItem[],
}
