import { useState} from "react";
import ResourceItem from "./type"

const ResourceInput = ({resources, setResources} : 
    {
        resources: ResourceItem[],
        setResources: (newValue: ResourceItem[]) => void,
    }): JSX.Element => {

    const [size, setSize] = useState<number>(0);
    
    const changeInputSize = () =>{
        if(size <= resources.length){
            setResources(resources.slice(0, size))
            return;
        }
        const newResources = [... resources]
        for(let i = resources.length; i < size; i++){
            const item: ResourceItem = {
                resourceNum: i + 1,
                total: 3,
                avaliable: 2,
                waitlist: [1, 2, 3 * i],
            }
            newResources.push(item)
        }
        setResources(newResources);
    }
    return (
        <>
            <p>Set Size: &nbsp;
                <input type='number' 
                    onChange={(e) => {setSize(parseInt(e.target.value))}}>

                </input>
                <button onClick={changeInputSize}>Submit</button>
            </p>
            <p>
                more Item
            </p>
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