import ProcessesItem from './type.ts'

export const ProcessesSetting = (
    { setProcesses}: 
    {setProcesses: (newP: ProcessesItem[]) => void}
): JSX.Element => {

    let currSize = 2;

    const onChange = ({size}: {size:number}) => {
        currSize = size;
    }

    const changeSize = () => {
        const newProcesses = []
        for(let i = 0; i < currSize; i++){
            newProcesses.push({
                processNum: i,
                children: [],
                resources: []
            })
        }
        setProcesses(newProcesses)
    }

    return (
        <>
        Processes Size: 
        <input type='number' onChange={(e) => onChange({size: parseInt(e.target.value)})} />
        <button onClick={changeSize}>Submit</button>
        </>
    )
}

export const ProcessesDisplay = (
    {processes}: {processes: ProcessesItem[]}
): JSX.Element => {
    return (
        <>
		<div className='table'> 
            <h1 className='table-head'>Processes</h1>
            <ul>
                <li className='processes-row'>
                    <p className='table-head'>#</p>
                    <p className='table-head'>Children</p>
                    <p className='table-head'>Resources<br/>Holding</p>
                </li>

                {
                    processes.map((item, index) => (
                        <>
                            <li className='processes-row' key={'P_' + index}>
                                <p className='content-center'>{
                                    item.processNum
                                }</p>
                                <p className='content-center'>{
                                    item.children.length != 0 &&
                                    item.children.join(', ')
                                    ||
                                    'null'
                                }</p>
                                <p className='content-center'>{
                                    item.resources.length != 0 &&
                                    item.resources.join(', ')
                                    ||
                                    'null'
                                }</p>
                            </li>
                        </>
                    ))
                }

            </ul>
        </div>
        </>
    )
}

export default function Processes(): JSX.Element{
    return (
        <>
		<div className='table'> 
            <h1 className='table-head'>Processes</h1>
            <ul>
                <li className='processes-row'>
                    <p className='table-head'>#</p>
                    <p className='table-head'>Children</p>
                    <p className='table-head'>Resources<br/>Holding</p>
                </li>
                <li className='processes-row'>
                    <p className='content-center'>0</p>
                    <p className='content-center'>1, 2, 3, 4, 5</p>
                    <p className='content-center'>1, 1, 4</p>
                </li>
               <li className='processes-row'>
                    <p className='content-center'>1</p>
                    <p className='content-center'>null</p>
                    <p className='content-center'>3, 2, 2</p>
                </li>
            </ul>

        </div>
        </>
    )
}