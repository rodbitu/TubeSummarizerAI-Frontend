'use client';

import Logo from '@/app/components/Logo';
import YoutubeVideo from '@/app/components/YoutubeVideo';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi';

interface SummaryData {
  summary: string;
  topics: string[];
}

const Summary = ({ params }: { params: { url: string } }) => {
  const [data, setData] = useState<SummaryData>({
    summary:
      'O Next.js é uma escolha poderosa para desenvolvedores que desejam criar aplicativos web modernos, proporcionando uma experiência de desenvolvimento fluída e flexível, além de oferecer desempenho otimizado para os usuários. Com a sua abordagem abrangente para o desenvolvimento web React, o Next.js se tornou uma ferramenta valiosa para projetos de diferentes tamanhos e complexidades.',
    topics: ['Cursos de programação', 'Projetos', 'Mentoria'],
  });
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5001/summarize?url=${params.url}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data: SummaryData) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [params.url]);

  if (isLoading)
    return (
      <main
        className={`flex min-h-screen flex-col items-center justify-center text-white`}
      >
        <Logo isLoading={isLoading} />
        <p className='mt-10'>Resumindo o conteúdo, por favor aguarde...</p>
      </main>
    );

  return (
    <main className='flex min-h-screen flex-col items-center p-4 md:p-24'>
      <Link href='/' className='pb-8 md:pb-14'>
        <Logo />
      </Link>

      <div className='flex w-full flex-col gap-4 md:flex-row text-white'>
        <div className='basis-1/2'>
          <YoutubeVideo videoUrl={params.url as string} />
        </div>
        <div className='basis-1/2'>
          <h1 className='text-lg font-semibold text-dim-gray'>
            Resumo do vídeo
          </h1>

          <div className='my-2 text-quick-silver'>{data.summary}</div>

          <ul className='text-white'>
            {data.topics.map((topic, index) => (
              <li key={`topic-${index}`} className='flex items-start gap-2'>
                <span>
                  <HiOutlineCheckCircle className='h-6 w-6 stroke-medium-purple' />
                </span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Summary;
