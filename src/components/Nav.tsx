'use client';
import { usePathname } from 'next/navigation';

export function Nav() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="bg-neutral-100 border-t border-neutral-300 sticky top-0 block z-20">
      <ul className="flex sm:justify-evenly overflow-auto sm:overflow-hidden no-scrollbar cursor-pointer font-bold">
        <li className="group w-full">
          <a
            className={
              pathname === ''
                ? 'bg-neutral-white border-b-noticias'
                : ' text-noticias border-b lg:h-10 h-12 flex items-center justify-center border-r border-neutral-300 px-5'
            }
            href="/"
          >
            notícias
          </a>
        </li>
        <li className="group w-full">
          <a
            className={
              pathname === '/negocios'
                ? 'bg-neutral-white border-b-negocios'
                : ' text-negocios border-b lg:h-10 h-12 flex items-center justify-center border-r border-neutral-300 px-5'
            }
            href="/negocios"
          >
            negócios
          </a>
        </li>
        <li className="group w-full">
          <a
            className={
              pathname === '/pensamento'
                ? 'bg-neutral-white border-b-pensamento'
                : ' text-pensamento border-b lg:h-10 h-12 flex items-center justify-center border-r border-neutral-300 px-5'
            }
            href="/pensamento"
          >
            pensamento
          </a>
        </li>
        <li className="group w-full">
          <a
            className={
              pathname === '/entretenimento'
                ? 'bg-neutral-white border-b-entretenimento'
                : ' text-entretenimento border-b lg:h-10 h-12 flex items-center justify-center border-r border-neutral-300 px-5'
            }
            href="/entretenimento"
          >
            entretenimento
          </a>
        </li>
        <li className="group w-full">
          <a
            className={
              pathname === '/esportes'
                ? 'bg-neutral-white border-b-esportes'
                : ' text-esportes border-b lg:h-10 h-12 flex items-center justify-center border-r border-neutral-300 px-5'
            }
            href="/esportes"
          >
            esportes
          </a>
        </li>
      </ul>
    </nav>
  );
}
