import { ArrowRight, Menu, Search } from "lucide-react";
import Image from "next/image";


export function Header() {
    return (
        <header className="h-[72px]">
            <div className="flex md:px-8 z-0 relative h-full">
                <div className="lg:w-1/6 lg:flex lg:items-center lg:justify-start">
                    <button className="flex items-center gap-2 mob-pg2 text-neutral-800 group h-16 w-16 md:h-auto md:w-auto justify-center">
                    <Menu />
                    <span className="hidden md:inline">Menu</span>
                    </button>
                </div>

                <a className="flex-1 flex justify-center py-3 md:py-0 items-center h-full" href="/">
                    <h1 className="sr-only">notícias</h1>
                    <Image alt='noticias' loading="lazy" width={245} height={48} decoding="async" className="h-6 md:h-12 w-auto object-contain" src="/news.png" />
                </a>

                <div className="flex gap-6 items-center lg:w-1/6 lg:justify-end">
                    <button className="flex items-center justify-center h-16 w-16 md:h-auto md:w-auto border-1 border-neutral-300 md:border-0">
                    <Search />
                    </button>

                    <a className="items-center justify-center whitespace-nowrap rounded transition-colors bg-pink-600 text-white font-bold text-sm hover:bg-pink-700 h-10 px-4 gap-2 disabled:bg-neutral-400 disabled:text-neutral-600 md:flex hidden cursor-pointer">inscreva-se <ArrowRight /></a>
                </div>
            </div>
        </header>
    )
}