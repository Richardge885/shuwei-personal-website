import { motion } from 'framer-motion';

const HomeScreenCard = ({ text, author = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
            viewport={{ amount: 0.99 }}
            className='font-sans p-8 text-2xl'
        >
            <p>
                "{text}"
                <br />
                {author.length !== 0 && (
                    <span className='text-right italic'>—{author}</span>
                )}
            </p>
        </motion.div>
    );
};

export default HomeScreenCard;
