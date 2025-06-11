import Image from 'next/image';

const MainBanner = () => {
    return (
        <section>
            <h2 className='sr-only'>메인인트로영상</h2>
            <div className='h-[400px] relative'>
                <Image className='object-contain' src='/home/banner/AI_PLUS_LOGO.gif' alt='메인인트로' fill />
            </div>
        </section>
    );
};

export default MainBanner;
