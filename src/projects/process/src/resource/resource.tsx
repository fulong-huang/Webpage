import ResourceItem from "./type"

export const ResourceDisplay = ({resources}: {resources: ResourceItem[]}): JSX.Element => {
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
                    <li className='resource-row' key={'resource_-1'}>
                    <p className='content-center'>-1</p>
                    <p className='content-center'>-1</p>
                    <p className='content-center'>-1</p>
                    <p className='content-center'>place holder</p>
                </li>                   
                   {
                    resources.map((item, index) => (
                        <li className='resource-row' key={'resource_'+index}>
                            <p className='content-center'>{item.resourceNum}</p>
                            <p className='content-center'>{item.total}</p>
                            <p className='content-center'>{item.avaliable}</p>
                            <p className='content-center'>{
                                item.waitlist.length != 0 && item.waitlist.join(', ')
                                || 'null'
                            }</p>
                        </li>
                    ))
                    }
                </ul>
            </div>

        }
        </>
    )
}

