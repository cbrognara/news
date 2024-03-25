'use client';
import { usePathname } from 'next/navigation';
import { classNames } from '@/components/classNames'


export function Nav() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="bg-neutral-100 border-t border-neutral-300 sticky top-0 block z-20">
      <ul className="flex sm:justify-evenly overflow-auto sm:overflow-hidden no-scrollbar cursor-pointer font-bold">
        <li className="group w-full">
          <a
            className={classNames('text-noticias border-b lg:h-10 h-12 flex items-center justify-center border-r border-neutral-300 px-5', pathname === '/'
                ? 'bg-neutral-white border-b-noticias'
                : ''
  )}
            href="/"
          >
            notícias
          </a>
        </li>
        <li className="group w-full">
          <a
            className={classNames('text-negocios border-b lg:h-10 h-12 flex items-center justify-center border-r border-neutral-300 px-5', pathname === '/negocios'
            ? 'bg-neutral-white border-b-negocios'
            : ''
)}
            href="/negocios"
          >
            negócios
          </a>
        </li>
        <li className="group w-full">
          <a
             className={classNames('text-pensamento border-b lg:h-10 h-12 flex items-center justify-center border-r border-neutral-300 px-5', pathname === '/pensamento'
             ? 'bg-neutral-white border-b-pensamento'
             : ''
)}
            href="/pensamento"
          >
            pensamento
          </a>
        </li>
        <li className="group w-full">
          <a
             className={classNames('text-entretenimento border-b lg:h-10 h-12 flex items-center justify-center border-r border-neutral-300 px-5', pathname === '/entretenimento'
             ? 'bg-neutral-white border-b-entretenimento'
             : ''
)}
            href="/entretenimento"
          >
            entretenimento
          </a>
        </li>
        <li className="group w-full">
          <a
             className={classNames('text-esportes border-b lg:h-10 h-12 flex items-center justify-center border-r border-neutral-300 px-5', pathname === '/esportes'
             ? 'bg-neutral-white border-b-esportes'
             : ''
)}
            href="/esportes"
          >
            esportes
          </a>
        </li>
      </ul>
    </nav>
  );
}
