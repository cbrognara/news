import Image from "next/image";


export function Article() {
    return (
        <div className="flex flex-col">
        <a aria-label='Rede social de Trump vai fazer IPO bilionário' href=''>
        <article title="Rede social de Trump vai fazer IPO bilionário" className="group cursor-pointer mr-1 lg:mr-0" id=''>
            <div className="thumb sm:aspect-[2.2] aspect-video relative overflow-hidden rounded-lg">
                <Image src='https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' width={260} height={150} className="object-cover group-hover:-translate-y-2 -translate-y-1 transition-all" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"/>
            </div>
            <header className="mb-10">
                <span className="flex mob-hat mb-3 gap-2 items-center text-noticias font-bold uppercase">tecnologia</span>
                    <strong className="group-hover:underline line-clamp-2 lg:h-[57.2px] text-xl"
                    title="Rede social de Trump vai fazer IPO bilionário"
                    aria-label="Título do post"
                    >Rede social de Trump vai fazer IPO bilionário</strong>
            </header>
        </article>
        </a>

        <div className="my-[22px] h-px w-full bg-neutral-300 pointer-events-none select-none" />

           <a aria-label='Os assuntos que mais repercutiram nas redes no fim de semana' href='/'>
            <article title='Os assuntos que mais repercutiram nas redes no fim de semana'>
              <header>
                <span className="flex gap-2 items-baseline group-hover:underline">
                  <span className='w-2 h-2 rounded-full block shrink-0 bg-noticias' />
                  <span className="line-clamp-2 h-12">Os assuntos que mais repercutiram nas redes no fim de semana</span>
                </span>
              </header>
            </article>
           </a>

           <div className="my-[22px] h-px w-full bg-neutral-300 pointer-events-none select-none" />

           <a aria-label='Quase metade do Brasil não tem acesso à coleta de esgoto' href='/'>
            <article title='Quase metade do Brasil não tem acesso à coleta de esgoto'>
              <header>
                <span className="flex mob-pg3 gap-2 items-baseline group-hover:underline">
                  <span className='w-2 h-2 rounded-full block shrink-0 bg-noticias'/> 
                 <span className="line-clamp-2 h-12">Quase metade do Brasil não tem acesso à coleta de esgoto</span>
                </span>
              </header>
            </article>
           </a>
        </div>
    )
}