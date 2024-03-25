import { ArrowRight, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";


export function Footer() {
    return (
        <footer className="bg-pink-600 text-white pt-12 lg:pt-12 pb-12">
            <div className="container">
                <div className="flex lg:items-center lg:justify-between lg:mb-[88px] mb-14 flex-col lg:flex-row">
                    <div className="flex lg:gap-8 lg:items-end flex-col lg:flex-row">
                        <a className="flex-1 flex lg:justify-center py-3 md:py-0 items-center mb-10 lg:mb-0" href='/'>
                            <Image src='/news.png' alt='news' loading="lazy" width={245} height={48} decoding="async" className="h-6 md:h-auto md:w-[200px] w-auto"/>
                        </a>
                        <div className="flex items-center justify-between lg:gap-8 mb-10 lg:mb-0">
                            <span className="block lg:pl-8 mg:ml-4 lg:border-1 lg:border-1-neutral-300 shrink-0 mr-12 lg:mr-0">
                                do not follow,
                                <br/>
                                consume it.
                            </span>
                            <a className="inline-flex items-center justify-center whitespace-nowrap rounded h-10 mob-btn-sm px-4 gap-2 border border-neutral-300 bg-white text-neutral-900 text-sm font-bold shadow-btn-outline hover:shadow-lg hover:text-neutral-black hover:bg-neutral-white transition-all disabled:bg-neutral-400 disabled:text-neutral-600 disabled:border-0 disabled:shadow-none disabled:hover:text-neutral-600 w-full lg:w-max">inscreva-se <ArrowRight /></a>
                        </div>
                    </div>
                    <div className="flex gap-8 lg:items-center flex-col lg:flex-row justify-between lg:justify-normal pt-10 border-t border-neutral-300 lg:pt-0 lg:border-none">
                        <ul className="flex gap-8 lg:items-center justify-between lg:justify-normal">
                            <li>
                                <a className="w-12 lg:w-8 h-12 lg:h-8 flex relative" target="_blank" href='https://www.instagram.com/'>
                                <Instagram />
                                </a>
                            </li>
                            <li>
                                <a className="w-12 lg:w-8 h-12 lg:h-8 flex relative" target="_blank" href='https://www.instagram.com/'>
                                <Twitter />
                                </a>
                            </li>
                            <li>
                                <a className="w-12 lg:w-8 h-12 lg:h-8 flex relative" target="_blank" href='https://www.instagram.com/'>
                                <Youtube />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="hidden lg:grid grid-cols-12 gap-x-12 mb-[60px]">
                    <div className="col-span-4">
                        <span className="mob-h5 text-white font-bold">nossas marcas</span>
                        <span className="divider my-6 md:block bg-waffle-light" />
                        <ul className="justify-between gap-y-6 mob-pg3 grid grid-rows-6 grid-cols-2 grid-flow-col gap-x-12 text-left">
                            <li>
                                <a className="lowercase" href='/'>news</a>
                            </li>
                            <li>
                                <a className="lowercase" href='/'>business</a>
                            </li>
                            <li>
                                <a className="lowercase" href='/'>jobs</a>
                            </li>
                            <li>
                                <a className="lowercase" href='/'>books</a>
                            </li>
                            <li>
                                <a className="lowercase" href='/'>fitness</a>
                            </li>
                            <li>
                                <a className="lowercase" href='/'>food</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2">
                        <span className="mob-h5 text-white font-bold">o portal</span>
                        <span className="divider my-6 md:block bg-waffle-light"/>
                        <ul className="justify-between gap-y-6 mob-pg3 flex flex-col">
                            <li>
                                <a href='/sobre'>sobre</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2">
                        <span className="mob-h5 text-white font-bold">notícias</span>
                        <span className="divider my-6 md:block bg-waffle-light"/>
                        <ul className="justify-between gap-y-6 mob-pg3 flex flex-col">
                            <li>
                                <a href='/sobre'>mundo</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2">
                        <span className="mob-h5 text-white font-bold">negócios e tech</span>
                        <span className="divider my-6 md:block bg-waffle-light"/>
                        <ul className="justify-between gap-y-6 mob-pg3 flex flex-col">
                            <li>
                                <a href='/sobre'>tecnologia</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2">
                        <span className="mob-h5 text-white font-bold">entretenimento</span>
                        <span className="divider my-6 md:block bg-waffle-light"/>
                        <ul className="justify-between gap-y-6 mob-pg3 flex flex-col">
                            <li>
                                <a href='/sobre'>stories</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className="divider my-10 lg:hidden"/>
                <div className="lg:pt-6 flex justify-between items-end lg:items-center">
                    <div className="flex gap-x-6 mob-pg4 flex-col lg:flex-row gap-y-10 lg:gap-y-0">
                        <span>© 2024 Grupo News de Comunicação. Todos os direitos reservados.</span>
                        <a className="underline" href='/politica-de-privacidade'>Política de Direitos e Privacidade</a>
                    </div>
                    <a href="https://mobister.com.br" target="_blank">mobister</a>
                </div>
            </div>
        </footer>
    )
}

