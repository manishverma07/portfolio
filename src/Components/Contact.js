import React, { useState } from 'react';


const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''

    });


    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData({
            ...formData,
            [id]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        alert("Message sent successfully!");

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };




    return (
        <form className='form' onSubmit={handleSubmit}>

            <h2 className='heading form-headline'>Contact me !</h2>


            <div className='form-control'>
                <label htmlFor='name'>Name </label>
                <input
                    type='text'
                    id='name' required
                    placeholder='Name...'
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type='email'
                    id='email' required
                    placeholder='Email...'
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className='form-control'>
                <label htmlFor='message' >Message</label>
                <textarea id='message' required
                    placeholder='Message...'
                    rows={10}
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <div className='btn-container'>
                <button className='btn' type='submit'>Submit</button>
            </div>

        </form>
    )
}

export default Contact
