import React, { useState } from 'react'

type ContactFormData = {
    'first name': string;
    'last name' : string;
    'email'     : string;
    'message'   : string;
}

const ContactForm: React.FC = () => {

    const [contactFormData, setContactFormData] = 
        useState<ContactFormData>({
            'first name': '',
            'last name' : '',
            'email'     : '',
            'message'   : '',
        });
    
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(loading) return;
        try{
            setLoading(true);
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
        setLoading(false);
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
        <textarea name='message' id='message' placeholder='message* (You can just say "Hi")' required  onChange={handleInputChange}/>

        <input type='hidden' name='_next' value='./'/>

        <button type='submit' id='submit' className={`${loading? 'loading':''}`}> 
            <div className={`loader ${loading? 'loading':''}`}></div>
            Send 
        </button> 
    
    </form>
    )
}

export default ContactForm;
