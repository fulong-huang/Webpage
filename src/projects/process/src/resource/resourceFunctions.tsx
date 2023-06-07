import ProcessesItem from "../process/type";
import ResourceItem from "./type";

export function validateRequest({
    resource, resourceNum,
    process,
    requestingAmount
}: {
    resource: ResourceItem[],
    resourceNum: number,
    process: ProcessesItem,
    requestingAmount: number,
}): boolean {
    let totalRequestedAmount = requestingAmount
    for(let i = 0; i < process.resources.length; i++){
        if(process.resources[i].resourceNum == resourceNum){
            totalRequestedAmount += process.resources[i].holding
            break;
        }
    }
    for(let i = 0; i < resource[resourceNum].waitlist.length; i++){
        if(resource[resourceNum].waitlist[i].processNum == process.processNum){
            totalRequestedAmount += resource[resourceNum].waitlist[i].amount
            break;
        }
    }
    if(totalRequestedAmount > resource[resourceNum].total){
        return false;
    }

    return true;
}

export function validateRelease({
    resourceNum,
    process,
    releaseAmount
}: {
    resourceNum: number,
    process: ProcessesItem,
    releaseAmount: number
}): boolean{
    for(let i = 0; i < process.resources.length; i++){
        if(process.resources[i].resourceNum == resourceNum){
            if(process.resources[i].holding < releaseAmount){
                return false;
            }
            return true;
        }
    }
    return false;
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
}) : boolean{
    let enoughResource = true;
    if(resource[resourceNum].avaliable < amountRequesting){
//        if statement should never be true
//        for(let i = 0; i < resource[resourceNum].waitlist.length; i++){
//            if(resource[resourceNum].waitlist[i].processNum === processNum){
//                resource[resourceNum].waitlist[i].amount += processNum
//                setResource([...resource])
//                return false;
//            }
//        }
        resource[resourceNum].waitlist.push({
            processNum: processNum,
            amount: amountRequesting
        })
        enoughResource = false;
    }
    else{
        resource[resourceNum].avaliable -= amountRequesting
    }
    setResource([...resource])
    return enoughResource
}

function freeResource({
    resource, setResource,
    resourceNum, processNum, holding
}: {
    resource: ResourceItem[],
    setResource: (newR: ResourceItem[]) => void,
    resourceNum: number,
    processNum: number,
    holding: number
}): void {
    resource[resourceNum].avaliable += holding
    console.log("Waitlist" , resource[resourceNum].waitlist)
    for(let i = 0; i < resource[resourceNum].waitlist.length; i++){
        if(resource[resourceNum].waitlist[i].processNum == processNum){
            resource[resourceNum].waitlist.splice(i, 1)
            setResource([...resource])
            return;
        }
    }
}

export function removeFromWaitlist({
    resource, setResource,
    process
}: {
    resource: ResourceItem[], 
    setResource: (newR: ResourceItem[]) => void,
    process: ProcessesItem
}): void {
    for(let i = 0; i < process.resources.length; i++){
        freeResource({
            resource:resource,
            setResource: setResource,
            resourceNum: process.resources[i].resourceNum,
            processNum: process.processNum,
            holding: process.resources[i].holding
        })
    }
    for(let p = 0; p < resource.length; p++){
        for(let i = 0; i < resource[p].waitlist.length; i++){
            if(resource[p].waitlist[i].processNum == process.processNum){
                resource[p].waitlist.splice(i, 1)
                setResource([...resource])
                return;
            }
        }
    }
}

export function releaseResource({
    resources, setResources,
    resourceNum, amount
}: {
    resources: ResourceItem[],
    setResources: (newR: ResourceItem[]) => void,
    resourceNum: number,
    amount: number
}): number[][]{
    const result: number[][] = [] 
    const currentResource = resources[resourceNum]
    currentResource.avaliable += amount;
    while(currentResource.waitlist.length != 0){
        const requested = currentResource.waitlist[0].amount
        const avaliable = currentResource.avaliable
        if(requested <= avaliable){
            result.push([currentResource.waitlist[0].processNum, 
                        currentResource.waitlist[0].amount])
            currentResource.waitlist.shift()
            currentResource.avaliable -= requested
        }
        else{
            break;
        }
    }
    setResources([...resources])
    return result
}

