// import React from 'react'
import './energy311.css'
import Energy311Form from './energy311Form'

export default function Energy311(): JSX.Element{
    window.scrollTo(0, 0)
    return (
        <div>
            <h1 className='contact-page'>
                Energy311 Form
            </h1>
            <Energy311Form />
        </div>
    )
}
