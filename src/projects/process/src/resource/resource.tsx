import { useState} from "react";
import {ResourceItem } from "./type"

const ResourceInput = ({resources, setResources} : 
    {
        resources: ResourceItem[],
        setResources: (newValue: ResourceItem[]) => void,
    }): JSX.Element => {

    const [size, setSize] = useState<number>(0);
    const [inputData, setInputData] = useState<number[]>([]);

    const changeInputSize = () =>{
        if(size <= resources.length){
            setResources(resources.slice(0, size))
            setInputData(inputData.slice(0, size))
            return;
        }

        const newInputData = [... inputData]
        const newResources = [... resources]

        for(let i = resources.length; i < size; i++){
            const item: ResourceItem = {
                resourceNum: i + 1,
                total: 3,
                avaliable: 3,
                waitlist: [],
            }
            newResources.push(item)
            newInputData.push(3)
        }
        setInputData(newInputData)
        setResources(newResources);
    }
    
    const inputOnChange = (
        idx: number, newTotal: number,
        ) => {

        const newReosurces = [... resources]
        newReosurces[idx].avaliable = newTotal
        newReosurces[idx].total = newTotal
        setResources(newReosurces)
    }

    // Needs to prevent it from reloading.
    // Plan A: make it into it's own function
    // Plan B: create a button to trigger instead of setting them individually.
    const ShowInputField = (): JSX.Element => {
        return (
            <>
            <div>
                <p>Start</p>
                {
                inputData.map((_, index) => (
                    <div key={'resource_' + index}>
                        <p>#{index}</p>
                        <input 
                            key={'resource_' + index} 
                            type='number' 
                            onChange={(e) => inputOnChange(index, parseInt(e.target.value))} />
                    </div>
                ))
                }
                <p>End</p>
            </div>
            </>
        )
    }

    return (
        <>
            <div>Set Size: &nbsp;
                <input type='number' 
                    onChange={(e) => {setSize(parseInt(e.target.value))}}>

                </input>
                <button onClick={changeInputSize}>Submit</button>
            </div>
            <div>
                <ShowInputField />
            </div>
        </>
    )
}

const ResourceDisplay = ({resources}: {resources: ResourceItem[]}): JSX.Element => {
    return (
        <>
        {
            <div className='table'> 
                <h1 className='table-head'>Resoruces</h1>
                <ul>
                    <li className='resource-row'>
                        <p className='table-head'>#</p>
                        <p className='table-head'>Total</p>
                        <p className='table-head'>Avaliable</p>
                        <p className='table-head'>Waitlist</p>
                    </li>
                    
                   {
                    resources.map((item, index) => (
                        <li className='resource-row' key={'resource_'+index}>
                            <p className='content-center'>{item.resourceNum}</p>
                            <p className='content-center'>{item.total}</p>
                            <p className='content-center'>{item.avaliable}</p>
                            <p className='content-center'>{item.waitlist.join(', ')}</p>
                        </li>
                    ))
                    }
                </ul>
            </div>

        }
        </>
    )
}


// this function should later move to upper layer
//  import input and display and use it there instead
export default function Resource(): JSX.Element{
    const [resources, setResources] = useState<ResourceItem[]>([]);
    return (
        <>
            {<ResourceDisplay resources={resources} />}
            {<ResourceInput resources={resources} setResources={setResources}/>}
        </>
    )
}