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
            for(let childIdx = 0; childIdx < processes[i].children.length; childIdx++){
                deleteProcess({
                    processes: processes,
                    setProcesses: setProcesses,
                    processNumber: processes[i].children[childIdx],
                })
            }
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
}): void{
    const newProcessItems: ProcessesItem[] = [...processes]
    newProcessItems.push({
        processNum: processNumber, //TODO: add processNumber getter.
        priority: priorityVal,
        children: [],
        resources: [],
    })
    setProcesses(newProcessItems);
}

