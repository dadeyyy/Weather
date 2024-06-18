import Link from 'next/link';
import RefreshBtn from './RefreshBtn';

const MoreInfoHome = () => {
  return (
    <div className='w-full flex justify-center items-center gap-5'>
      <Link
        href={'/rain-gauge'}
        className="bg-slate-500 flex-grow-[3] py-3 px-1 rounded-xl text-sm sm:text-base hover:bg-sky-500 text-center"
      >
        More Information
      </Link>

      <RefreshBtn/>
    </div>
  );
};

export default MoreInfoHome;
