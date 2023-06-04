import ProcessesItem from './type.ts'



export function deleteProcess({
    processes, setProcesses,
    processNumber,
}: {
    processes: ProcessesItem[],
    setProcesses: (newP: ProcessesItem[]) => void,
    processNumber: number
}): void{
    for(let i = 0; i < processes.length; i++){
        if(processes[i].processNum == processNumber){
            // TODO: clear holding resources
            const [removedProcess] = processes.splice(i, 1)
            setProcesses([...processes])
            for(let childIdx = 0; childIdx < removedProcess.children.length; childIdx++){
                deleteProcess({
                    processes: processes,
                    setProcesses: setProcesses,
                    processNumber: removedProcess.children[childIdx].processNum
                })
            }
            console.log(processes)
            
            break;
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

