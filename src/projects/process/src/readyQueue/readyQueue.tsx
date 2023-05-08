import ReadyQueueItem from './type.ts'

export default function ReadyQueue(): JSX.Element{

	return (
		<>
		<div className='table'> 
            <h1 className='table-head'>Ready Queue</h1>
            <ul>
                <li className='table-row'>
                    <p className='table-head'>Priority</p>
                    <p className='table-head'>Queue</p>
                </li>
                <li className='table-row'>
                    <p className='content-center'>2</p>
                    <p className='content-left'>process one </p>
                </li>
            </ul>

        </div>
 
		</>
    )
}
