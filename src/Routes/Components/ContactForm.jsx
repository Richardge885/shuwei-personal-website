import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_57x2jju', 'template_omlrv98', form.current, {
                publicKey: 'vupDYMGIIlgzPcmLA',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col text-white py-20 justify-center gap-4 text-xl w-[80%] md:w-[60%]'
        >
            <label>Name</label>
            <input type='text' name='from_name' className='text-dark rounded-lg p-2' />
            <label>Email</label>
            <input type='email' name='from_email' className='text-dark rounded-lg p-2' />
            <label>Message</label>
            <textarea name='message' className='text-dark rounded-lg p-2' />
            <input type='submit' value='Send' className='bg-red rounded-lg text-xl py-4 w-1/3 hover:scale-110 transition-all duration-300' />
        </form>
    );
};

export default ContactForm;
