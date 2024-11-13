import { motion } from 'framer-motion';
import image from '../assets/BioImage.jpg';

export default function BiographyPage() {
    return (
        <div className='flex flex-col justify-center items-center bg-[url("./src/assets/Biography-page-img.png")] bg-no-repeat bg-center bg-contain bg-fixed md:px-10'>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className='text-white text-lg p-8 bg-opacity-90'
            >
                <img
                    src={image}
                    className='hidden md:block w-[18rem] rounded-xl float-right m-4'
                />
                Shuwei Zuo is a Chinese violinist, currently working at
                Southbank Sinfonia. She embarked on her musical journey at the
                age of 5 and attended a music specialist school. She took part
                in a tour in Taiwan with the China Youth Symphony Orchestra in
                2012. In 2014, she successfully gained a place at the Central
                Conservatory of Music, studying with Jia Zhang, Liwei Tan, and
                Wei Xue. In the same year, she participated in the New York
                Summit Festival, where she was highly commended by legendary
                violinist Aaron Rosand, with whom she had lessons.
                <br />
                <br />
                She moved to the UK to undertake her Master's degree at the
                Royal Academy of Music in 2018. These performances received many
                excellent reviews. She also won first prize in the Hummingbird
                Music Competition with her trio and was invited to hold chamber
                concerts in Peking University, Yantai, Wuxi, and many other
                cities.
                <br />
                <br />
                Aftercoming to the UK, she has continued her solo and ensemble
                career, performing in trios and quartets, and enjoys her life as
                an orchestral player. She has offered numerous solo, trio, and
                quartet concerts and recordings in York, Leeds, Haslemere,
                London, Manchester, and other cities, receiving high praise such
                as, “This was spirited but finely judged and stunning playing
                from a rising star,” “Virtuoso performance,” and “Finely spun
                violin sound rising shoulder-high.”
                <br />
                <br />
                Shuwei has worked with some of the world's top conductors and
                orchestras, such as St Martin in the Fields, Royal Opera House,
                Britten Sinfonia, Manchester Camerata, Manchester Collective,
                and others. She also gained a place at the Royal Birmingham
                Conservatoire for the Artist Diploma with a scholarship soon
                after she received distinction graduation from RNCM.
            </motion.p>
        </div>
    );
}
