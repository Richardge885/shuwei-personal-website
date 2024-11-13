import { Link } from 'react-router-dom';

const HomepageTitleBox = () => {
    return (
        <>
            <h1>Shuwei Zuo</h1>
            <p>Violinist</p>
            <Link
                to={'/biography'}
                className='bg-red p-4 rounded-md hover:scale-110 transition-all duration-300 w-52'
            >
                Biography
            </Link>
        </>
    );
};

export default HomepageTitleBox;
