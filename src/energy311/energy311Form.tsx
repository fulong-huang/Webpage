import React, { useState } from 'react'

type Energy311Data = {
    //name: string,
    address: string,
    zip: string
    phone: string,
    email: string,
    building_name: string,
}

const Energy311Form: React.FC = () => {

    const [contactFormData, setContactFormData] = 
        useState<Energy311Data>({
            //name: '',
            address: '',
            zip: '',
            phone: '',
            email: '',
            building_name: "someBuildingName",
        });
    
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(contactFormData)
        if(loading) return;
        try{
            setLoading(true);
            const response = await fetch(
                'https://energy311dev.appspot.com/a/building', 
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
            alert("Form Submited!")

        }
        catch(error){
            console.error(error);
            alert(`
ERROR, something bad happened \n
Form failed to send.
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
            [name]: value.toUpperCase(),
        }));
    }


    return(
    <form onSubmit={handleSubmit} method='POST'>
        <label className='formLabel' htmlFor='name'>*Building Name:  </label>
        <input type='text' name='building_name' id='name' required onChange={handleInputChange}/>

        <label className='formLabel' htmlFor='address'>*Company Address:  </label>
        <input type='text' name='address' id='address'  required onChange={handleInputChange}/>

        <label  className='formLabel' htmlFor='name'>*Company Zipcode:  </label>
        <input type='number' name='zip' id='zip'  required onChange={handleInputChange}/>

        <label className='formLabel'  htmlFor='name'>*Phone: (###) ###-#### </label>
        <input type='tel' name='phone' id='phone' pattern='^\(\d{3}\)\s\d{3}-\d{4}' required onChange={handleInputChange}/>

        <label className='formLabel'  htmlFor='name'>*Email:  </label>
        <input type='email' name='email' id='email' required onChange={handleInputChange}/>

        <input type='hidden' name='_next' value='./'/>

        <button type='submit' id='submit' className={`${loading? 'loading':''}`}> 
            <div className={`loader ${loading? 'loading':''}`}></div>
            Send 
        </button> 
    
    </form>
    )
}

export default Energy311Form;
