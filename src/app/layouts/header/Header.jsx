'use client';

import Link from 'next/link';

const Header = () => {
    return (
        <div className='fixed top-0 left-0 z-50 flex justify-between items-center w-full h-[52px] px-2 bg-[#111111] text-white'>
            <h1 className='font-bold text-2xl px-4'>
                <Link href='/'>KoreaAIEduCenter</Link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href=''></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
