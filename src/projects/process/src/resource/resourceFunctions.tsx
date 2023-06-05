import ProcessesItem from "../process/type";
import ResourceItem from "./type";

export function addToWaitlist({
    resource, setResource,
    resourceNum,
    process
}: {
    resource: ResourceItem[],
    setResource: (newR: ResourceItem[]) => void,
    resourceNum: number,
    process: ProcessesItem
}): void{
    resource[resourceNum].waitlist.push(process)
    setResource([...resource])
}

export function requestResource({
    resource, setResource,
    resourceNum, amountRequesting,
    processNum, 
}:{
    resource: ResourceItem[],
    setResource: (newR: ResourceItem[]) => void,
    resourceNum: number
    processNum: number
    amountRequesting: number
}) : number{
    let result = -1;
    if(resource[resourceNum].avaliable < amountRequesting){
        result = processNum
    }
    else{
        resource[resourceNum].avaliable -= amountRequesting
    }
    setResource([...resource])
    return result
}


