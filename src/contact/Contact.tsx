import React from 'react'
import './Contact.css'
import ContactForm from './contactForm'

export default function Contact(): JSX.Element{
    return (
        <div>
            <h1 className='contact-page'>
                Drop me a Message
            </h1>
            <ContactForm />
        </div>
    )
}