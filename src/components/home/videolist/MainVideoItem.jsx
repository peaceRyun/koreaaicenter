import Image from 'next/image';
import { IoDocumentTextOutline } from 'react-icons/io5';

const MainVideoItem = ({ item }) => {
    const { imgUrl, url, title } = item;
    return (
        <article className='w-full h-full'>
            <a
                href={url}
                className='block relative w-full h-full transition-colors duration-150 ease-in cursor-pointer overflow-hidden bg-[#1a1a1a] rounded-[20px] shadow-sm hover:bg-[#333333]'
            >
                <Image src={imgUrl} alt={title} width='400' height='400' />
                <div className='p-4 '>
                    <div className='flex items-start'>
                        <IoDocumentTextOutline className='text-4xl mr-3' />
                        <h4>{title}</h4>
                    </div>
                    <ul className='flex items-center'>
                        <li>
                            <span className='inline-block px-2 bg-[#815104] rounded-[3px] whitespace-nowrap my-[3px]'>
                                Youtube
                            </span>
                        </li>
                    </ul>
                    <ul className='flex items-center whitespace-pre flex-wrap text-sm'>
                        <li>keyword1,</li>
                        <li> keyword2,</li>
                        <li> keyword3,</li>
                        <li> keyword4,</li>
                        <li>keyword5,</li>
                        <li> keyword6,</li>
                    </ul>
                </div>
            </a>
        </article>
    );
};

export default MainVideoItem;
