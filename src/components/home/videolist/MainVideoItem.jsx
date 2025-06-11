import Image from 'next/image';
import { IoDocumentTextOutline } from 'react-icons/io5';

const MainVideoItem = () => {
    return (
        <article>
            <a
                href='https://www.youtube.com/watch?v=0b91fL3yD2Q'
                className='block relative w-full h-full transition-background duration-1200 ease-in cursor-pointer overflow-hidden bg-[#1a1a1a] rounded-[20px] shadow-sm'
            >
                <Image
                    src='/home/videoThumb/TestThumb1.avif'
                    alt='block-ai-챗gpt-독주-종료-구글-발표-충격적-반격-veo2-신기능과-크레딧-사용-주의사항'
                    width='400'
                    height='400'
                />
                <div className='p-4'>
                    <div className='flex items-start'>
                        <IoDocumentTextOutline className='text-4xl mr-3' />
                        <h4>챗GPT 독주 종료 구글 발표 충격적 반격 Veo2 신기능과 크레딧 사용 주의사항</h4>
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
