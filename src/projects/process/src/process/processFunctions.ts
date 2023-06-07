import ProcessesItem from './type.ts'

export function findProcess({
    processes, processNumber
}: {
    processes: ProcessesItem[],
    processNumber: number
}): ProcessesItem | null {
    if(processNumber < 0) return null;
    for(let i = 0; i < processes.length; i++){
        if(processes[i].processNum == processNumber){
            return processes[i]
        }
    }
    return null;
}

export function findAllProcessesNumber({
    processes, processNumber
}: {
    processes: ProcessesItem[]
    processNumber: number
}): number[]{
    let result: number[] = []
    for(let i = 0; i < processes.length; i++){
        if(processes[i].processNum == processNumber){
            result.push(processNumber)
            const len = processes[i].children.length;
            for(let childIdx = 0; childIdx < len; childIdx++){
                result = result.concat(findAllProcessesNumber({
                    processes: processes,
                    processNumber: processes[i].children[childIdx].processNum
                }))
            }
            break;
        }
    }
    return result
}

export function hasDescendant({
    ancestor,
    descendantNum,
}: {
    ancestor: ProcessesItem,
    descendantNum: number,
}): boolean {
    if(ancestor.processNum === descendantNum) return true
    const q: ProcessesItem[] = [ancestor]
    while(q.length > 0){
        const currentProcess = q.shift() as ProcessesItem
        for(let i = 0; i < currentProcess.children.length; i++){
            if(currentProcess.children[i].processNum === descendantNum){
                return true;
            }
            q.push(currentProcess.children[i])
        }
    }
    return false;
}

export function deleteProcess({
    processes, setProcesses,
    processNumber,
}: {
    processes: ProcessesItem[],
    setProcesses: (newP: ProcessesItem[]) => void,
    processNumber: number
}): void{
    for(let i = 0; i < processes.length; i++){
        const childLen = processes[i].children.length;
        for(let ci = 0; ci < childLen; ci++){
            if(processes[i].children[ci].processNum == processNumber){
                processes[i].children.splice(ci, 1)
                i += processes.length
                break;
            }
        }
    }
    for(let i = 0; i < processes.length; i++){
        if(processes[i].processNum == processNumber){
            processes.splice(i, 1)
            setProcesses([...processes])
            return;
        }
    }
}

export function createProcess({
    processes, setProcesses,
    priorityVal, processNumber,
}: {
    processes: ProcessesItem[],
    setProcesses: (newP: ProcessesItem[]) => void,
    priorityVal: number,
    processNumber: number,
}): ProcessesItem{
    const newProcess : ProcessesItem = {
        processNum: processNumber, //TODO: add processNumber getter.
        priority: priorityVal,
        children: [],
        resources: [],
    }
    const newProcessItems: ProcessesItem[] = [...processes, newProcess]
    setProcesses(newProcessItems);
    return newProcess
}

export function appendResource({
    processes, setProcesses,
    targetProcess, resourceNum,
    amountRequested
}: {
    processes: ProcessesItem[],
    setProcesses: (newP: ProcessesItem[]) => void,
    targetProcess: ProcessesItem,
    resourceNum: number,
    amountRequested: number
}): void {
    for(let i = 0; i < targetProcess.resources.length; i++){
        if(targetProcess.resources[i].resourceNum === resourceNum){
            targetProcess.resources[i].holding += amountRequested
            setProcesses([...processes])
            return;
        }
    }
    targetProcess.resources.push({
        resourceNum: resourceNum,
        holding: amountRequested
    })
    console.log("AddedProcess")
    setProcesses([...processes])
}

export function releaseResourceFromProcess({
    processes, setProcesses,
    resourceNum, freedAmount,
    targetProcess
}:{
    processes: ProcessesItem[],
    setProcesses: (newP: ProcessesItem[]) => void,
    resourceNum: number,
    freedAmount: number
    targetProcess: ProcessesItem
}): void{
    for(let i = 0; i < targetProcess.resources.length; i++){
        if(targetProcess.resources[i].resourceNum === resourceNum){
            targetProcess.resources[i].holding -= freedAmount
            if(targetProcess.resources[i].holding === 0){
                targetProcess.resources.splice(i, 1)
            }
            setProcesses([...processes])
            break;
        }
    }
}


