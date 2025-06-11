import MainVideoItem from './MainVideoItem';

const MainVideoList = () => {
    return (
        <section className='border-t-1 border-white'>
            <h3 className='py-[15px] px-[8px]'>
                <span className='inline-block bg-[#815104] px-1 rounded-[3px]'>🙇‍♂️ ListTitle</span>
            </h3>
            <ul className='border-t-1 border-[#1f1f1f] grid grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] pt-4 gap-2.5'>
                <li>
                    <MainVideoItem />
                </li>
                <li>
                    <MainVideoItem />
                </li>
                <li>
                    <MainVideoItem />
                </li>
                <li>
                    <MainVideoItem />
                </li>
                <li>
                    <MainVideoItem />
                </li>
            </ul>
        </section>
    );
};

export default MainVideoList;
