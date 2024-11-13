import { motion } from 'framer-motion';
import homepageImage from '../assets/Homepage.png';
import HomepageTitleBox from './Components/HomepageTitleBox';
import HomeScreenCard from './Components/HomeScreenCard';

const HomePage = () => {
    return (
        <motion.div className='flex flex-col justify-center items-center text-white gap-10'>
            <div className='flex flex-col justify-center items-center bg-dark'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className='text-center font-serif text-3xl flex flex-col gap-6 py-20 justify-center items-center'
                >
                    <HomepageTitleBox />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className='relative z-0'
                >
                    <img
                        src={homepageImage}
                        alt='Homepage image'
                        className='z-0'
                    />
                    <span className='absolute block bg-gradient-to-t from-dark to-transparent h-8 w-full bottom-0'></span>
                </motion.div>
                <div className='block bg-gradient-to-b from-dark to-white h-8 w-screen bottom-0 translate-y-10'></div>
            </div>
            <motion.div className='bg-white'>
                <div className='md:px-20 w-screen text-dark font-sans px-4 text-2xl flex flex-col items-center'>
                    <div className='container'>
                        <HomeScreenCard text={'Virtuoso performance.'} />
                        <HomeScreenCard
                            text={
                                'This was spirited but finely judged and stunning playing from a rising star.'
                            }
                            author={'Dr Joe Dawson'}
                        />
                        <HomeScreenCard
                            text={
                                'Finely spun violin sound rising shoulder-high.'
                            }
                            author={'Seen and Heard International'}
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default HomePage;
