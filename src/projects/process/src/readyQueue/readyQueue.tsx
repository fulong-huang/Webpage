export const ReadyQueueDisplay = ({queue}: {queue: number[][]}): JSX.Element => {

    return (
        <>
		<div className='table'> 
            <h1 className='table-head'>Ready Queue</h1>
            <ul>
                <li className='ready-queue-row'>
                    <p className='table-head'>Priority</p>
                    <p className='table-head'>Queue</p>
                </li>
                {
                    queue.map((_, index, queue) => (
                        <li className='ready-queue-row' key={'RQ_'+index}>
                            <p className='content-center'>{
                                queue.length - index - 1
                            }</p>
                            <p className='content-left'>{
                                queue[queue.length - index - 1].length != 0 &&
                                queue[queue.length - index - 1].join(', ')
                                ||
                                'null'
                            }</p>
                        </li>
                    ))
                }
           </ul>
        </div>
        
        </>
    )
}


