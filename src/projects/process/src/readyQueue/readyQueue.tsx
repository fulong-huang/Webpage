// import ReadyQueueItem from './type.ts'

export default function ReadyQueue(): JSX.Element{

	return (
		<>
		<div className='table'> 
            <h1 className='table-head'>Ready Queue</h1>
            <ul>
                <li className='ready-queue-row'>
                    <p className='table-head'>Priority</p>
                    <p className='table-head'>Queue</p>
                </li>
                <li className='ready-queue-row'>
                    <p className='content-center'>2</p>
                    <p className='content-left'>process_one process_two process_three process_four process_five </p>
                    
                </li>
                <li className='ready-queue-row'>
                    <p className='content-center'>1</p>
                    <p className='content-left'>p1 p2 p3 p4 p5 </p>
                    
                </li>
                <li className='ready-queue-row'>
                    <p className='content-center'>0</p>
                    <p className='content-left'>p0</p>
                    
                </li>
            </ul>

        </div>
 
		</>
    )
}
