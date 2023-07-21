import Image from 'next/image';
import classNames from 'classnames';

interface LogoProps {
  isLoading?: boolean;
}

export default function Logo({ isLoading = false }: LogoProps) {
  return (
    <div className='flex items-center'>
      <span className='text-white text-3xl mr-2 font-roboto'>
        TubeSummarizerAI
      </span>
      <Image
        src='/logo.svg'
        alt='TubeSummarizerAI'
        width={80}
        height={28}
        className={classNames({
          'animate-pulse': isLoading,
        })}
      />
    </div>
  );
}
