import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Nav(): JSX.Element{
        
    const [visible, setVisible] = useState(true);

    const [activePage, setActivePage] = useState('/');

    useEffect(() => {
        setActivePage(window.location.pathname);

        let prevPosition = window.scrollY;
        
        const handleScroll = () => {
            let currPosition = window.scrollY;
            if(Math.abs(currPosition - prevPosition) > 80){
                setVisible(currPosition < prevPosition);
                prevPosition = currPosition;
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <>
        <nav className={`visible ${visible? 'visible': 'not-visible'}`}>
        {/* <div className='nav-icon-container'>  */}
            <input type='checkbox' id='nav-toggle'></input>
            <label htmlFor='nav-toggle' className='check-btn'>
            <img src='/navigation-bar.png' className='nav-icon'></img>
            </label>

        <ul>
            <li>
            <Link to='/' className={`nav-link ${activePage === '/'? 'active' : ''}`} 
                            onClick={()=>{setActivePage('/')}}> Home </Link>
            </li>
            <li>
            <Link to='/projects' className={`nav-link ${activePage === '/projects'? 'active' : ''}`}
                            onClick={()=>{setActivePage('/projects')}}> Projects </Link>
            </li>
            <li>
            <Link to='/contact' className={`nav-link ${activePage === '/contact'? 'active' : ''}`}
                            onClick={()=>{setActivePage('/contact')}}> Contact </Link>
            </li>
            <li>
            <Link to='/misc' className={`nav-link ${activePage === '/misc'? 'active' : ''}`}
                            onClick={()=>{setActivePage('/misc')}}> MISC </Link>
            </li>
        </ul>
        </nav>
        <div className='space'></div>
        </>
    )
}

