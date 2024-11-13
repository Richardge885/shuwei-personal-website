import { motion } from 'framer-motion';
import ContactForm from './Components/ContactForm';
const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='flex flex-col justify-center items-center text-white'
        >
            <h1 className='text-white p-10 font-serif text-4xl text-center'>
                Contact Me
            </h1>
            <ContactForm />
        </motion.div>
    );
};

export default Contact;
