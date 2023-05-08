import { ChangeEvent, useState, useEffect} from "react";
import ResourceItem from "./type"

export default function Resource(): JSX.Element{
    const [size, setSize] = useState<number>(0);
    const [resources, setResources] = useState<ResourceItem[]>([]);

    useEffect(()=>{
        const newResources : ResourceItem[] = [];
        for(let i = 0; i < size; i++){
            newResources.push({
                resourceNum: i,
                total: 3,
                // setTotal: setCurrTotal,
                avaliable: 2,
                // setAvaliable: setCurrAvaliable,
                waitlist: [i, i * 3, i * 5],
                // setWaitlist: setCurrWaitlist,
            })
        }
        setResources(newResources);
    }, [size])

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSize(parseInt(event.target.value))
    }

    return (
        <>
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
                    // TODO: 
                    //  Add a button for value change
                    resources.map((item, index) => (
                        <li className='resource-row' key={'resource_'+index}>
                            <p className='content-center'>{item.resourceNum}</p>
                            <p className='content-center'>{item.total}</p>
                            <p className='content-center'>{item.avaliable}</p>
                            <p className='content-center'>{item.waitlist.join(', ')}</p>
                        </li>
                    ))
                }
                <p>Set Size: &nbsp;
                    <input type='number' onChange={onChange}></input>
                </p>
                
            </ul>
        </div>
        </>
    )
}