'use client';

import MainBanner from '@/components/home/banner/MainBanner';
import MainVideoList from '@/components/home/videolist/MainVideoList';

const wrap = 'p-24';

const container = '';

const Homepage = () => {
    return (
        <div className={`${wrap}`}>
            <MainBanner />
            <div className={`${container}`}>
                <h2 className='font-bold text-xl'>AI+ 2025</h2>
                <MainVideoList />
            </div>
        </div>
    );
};

export default Homepage;
