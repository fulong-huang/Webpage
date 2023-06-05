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

