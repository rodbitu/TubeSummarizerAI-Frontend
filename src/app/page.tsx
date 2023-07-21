'use client';

import { HiArrowNarrowRight } from 'react-icons/hi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import Logo from './components/Logo';

import { youtubeRegex } from './utils/youtubeRegex';

interface Inputs {
  url: string;
}

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const url = encodeURIComponent(data.url);
    router.push(`/summary/${url}`);
  };

  return (
    <main className='m-auto flex min-h-screen w-max flex-col items-center p-24'>
      <div className='pb-24 flex'>
        <Logo />
      </div>

      <form className='mb-10 w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex w-full rounded-full bg-dark-gun-metal'>
          <input
            type='text'
            id='url'
            className='h-20 w-full rounded-full bg-dark-gun-metal px-6 text-2xl placeholder-sm text-white focus:outline-none'
            placeholder='Cole o endereço do vídeo aqui...'
            {...register('url', {
              required: 'Um endereço de vídeo do YouTube é obrigatório.',
              pattern: {
                value: youtubeRegex,
                message: 'O endereço de vídeo do YouTube é inválido.',
              },
            })}
          />

          <button
            type='submit'
            role='button'
            className='flex h-20 w-20 shrink-0 grow-0 items-center justify-center rounded-full bg-green-yellow'
          >
            <HiArrowNarrowRight className='h-10 w-10 fill-black' />
          </button>
        </div>

        {errors.url && (
          <p className='mt-2 text-center text-white'>{errors.url.message}</p>
        )}
      </form>
    </main>
  );
}
