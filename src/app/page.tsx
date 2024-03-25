import { Article } from '@/components/Article';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="mt-10 md:mt-20">
      <div className="grid grid-cols-12 container">
        <div className="col-span-12 lg:col-span-6 lg:pr-12 lg:border-r lg:border-neutral-300">
          <a
            aria-label="Estado Islâmico assume autoria do atentado em Moscou"
            href="/"
          >
            <article
              title="Estado Islâmico assume autoria do atentado em Moscou"
              className="group cursor-pointer"
            >
              <header className="mb-10">
                <span className="flex text-noticias font-bold mb-6 gap-2 items-center uppercase">
                  MUNDO
                </span>
                <strong className="mob-h1 group-hover:underline text-[40px] leading-8">
                  Estado Islâmico assume autoria do atentado em Moscou
                </strong>
              </header>
              <div className="thumb sm:aspect-[2.2] aspect-video relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1569225034143-754335938607?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="imagem da noticia"
                  width={400}
                  height={200}
                />
              </div>
            </article>
          </a>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 col-span-12 lg:pl-12 lg:gap-12 mt-10 lg:mt-0">
          <Article />
          <Article />
        </div>
        </div>

        <div className="container hidden lg:block">
          <hr className="h-px bg-neutral-300 my-10 sm:my-20" />
        </div>

        <div className="hidden lg:grid grid-cols-4 container gap-12">
          <Article />
          <Article />
          <Article />
          <Article />
        </div>

        <div className="container hidden lg:block">
          <hr className="h-px bg-neutral-300 my-10 sm:my-20" />
        </div>

    </main>
  );
}
