import ReadyQueue from './src/readyQueue/readyQueue.tsx'
import Processes from './src/process/processes.tsx'
import Resource from './src/resource/resource.tsx'
import Inputs from './src/input/input.tsx'
import './src/input/input.css'
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
            {<Inputs />}
        </div>
       </>
    );
}