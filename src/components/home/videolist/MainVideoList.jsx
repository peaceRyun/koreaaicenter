'use client';

import { useState } from 'react';
import MainVideoItem from './MainVideoItem';
import { IoMdArrowDropdown } from 'react-icons/io';
import { videoData } from '@/app/api/data';

const MainVideoList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <section className='border-t-1 border-white '>
            <button className='relative py-[15px] px-[8px] cursor-pointer w-full text-left' onClick={handleToggle}>
                <div className='absolute top-1/2 left-[-24px] transform -translate-y-1/2'>
                    <IoMdArrowDropdown
                        className={`text-2xl transition-all duration-200 ${isOpen ? '-rotate-90' : ''} `}
                    />
                </div>
                <span className='inline-block bg-[#815104] px-1 rounded-[3px]'>🙇‍♂️ ListTitle</span>
            </button>
            <ul
                className={`border-t-1 border-[#1f1f1f] grid grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] pt-4 gap-2.5 ${
                    isOpen ? 'hidden' : ''
                }`}
            >
                {videoData.map((item) => (
                    <li key={item.id}>
                        <MainVideoItem item={item} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default MainVideoList;
