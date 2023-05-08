export default function Resource(): JSX.Element{
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
                <li className='resource-row'>
                    <p className='content-center'>0</p>
                    <p className='content-center'>3</p>
                    <p className='content-center'>0</p>
                    <p className='content-center'>6, 7, 9</p>
                </li>
                <li className='resource-row'>
                    <p className='content-center'>1</p>
                    <p className='content-center'>3</p>
                    <p className='content-center'>3</p>
                    <p className='content-center'>null</p>
                </li>
            </ul>
        </div>
        </>
    )
}