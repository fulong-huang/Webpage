import React, { useState } from 'react'

type ContactFormData = {
    'first name': string;
    'last name' : string;
    'email'     : string;
    'message'   : string;
}

const ContactForm: React.FC = () => {
    // Hook contact form data and setter
    const [contactFormData, setContactFormData] = 
        useState<ContactFormData>({
            'first name': '',
            'last name' : '',
            'email'     : '',
            'message'   : '',            
        });

    // 
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            const response = await fetch(
                'https://formsubmit.co/ajax/fulonghuang05@gmail.com', 
                {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(contactFormData),
                }
            );
            // response.json();
            const data = await response.json();
            console.log(data);
            alert("Message Sent, Thank you!!!")

        }
        catch(error){
            console.error(error);
            alert(`
ERROR, something bad happened \n
You can also send your message directly to:
fulonghuang05@gmail.com
`);
        }
    }

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
        const {name, value} = event.target;
        setContactFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    }


    return(
    // <form action='https://formsubmit.co/cosapagu@mailgolem.com' method='POST'>
    <form onSubmit={handleSubmit} method='POST'>
        <div className='name'>
            <input type='text' name='first name' id='first-name' placeholder='first (optional)' onChange={handleInputChange}/>
            <input type='text' name='last name' id='last-name' placeholder='last (optional)' onChange={handleInputChange}/>
        </div>
        <input type='email' name='email' id='email' placeholder='email (optional)' onChange={handleInputChange}/>
        <textarea name='message' id='message' placeholder='message (You can just say "Hi")' required  onChange={handleInputChange}/>

        <input type='hidden' name='_next' value='./'/>
        {/* <input type="hidden" name="_captcha" value="false" /> */}

        <button type='submit' id='submit'> Send </button>
    </form>
    )
}

export default ContactForm;
