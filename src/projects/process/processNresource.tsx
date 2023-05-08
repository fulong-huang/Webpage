import ReadyQueue from './src/readyQueue/readyQueue.tsx'
import './processNresource.css'

export default function ProcessNResource(): JSX.Element{
    return (
        <>
        {/* Processes */}
        <div style={{display:'flex'}}>
            {<ReadyQueue />}
        </div>
       </>
    );
}