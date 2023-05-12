import ReadyQueue from './src/readyQueue/readyQueue.tsx'
import Processes from './src/process/processes.tsx'
import Resource from './src/resource/resource.tsx'
import './processNresource.css'

export default function ProcessNResource(): JSX.Element{
    return (
        <>
        {/* Processes */}
        <h3><br/><br/>In Construction, come back later <br/><br/></h3>
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {<ReadyQueue />}
            {<Processes />}
            {<Resource />}
        </div>
       </>
    );
}