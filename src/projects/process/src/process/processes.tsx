
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