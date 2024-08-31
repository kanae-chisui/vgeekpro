"use client";
import Image from "next/image";
import './fonts.css';
import 'aos/dist/aos.css';
import {Link as Scroll} from 'react-scroll';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import {usePathname} from 'next/navigation';
import Link from 'next/link'

export default function Header() {
  const router = usePathname();
  const is_home = (router === '/');
  return (
    <header>
      <Scroll className="transition left-0 bg-primary text-primary-content absolute p-3 m-3 -translate-y-16 focus:translate-y-0" to="main-contents" smooth={true} offset={-50}>Skip to main contents</Scroll>
      <nav className="z-30 fixed left-0 top-0 flex justify-between items-start p-4 xl:font-bold pointer-events-none w-[100vw]">
        <div className="flex shrink justify-items-start">
          {is_home ? <Scroll to="home" smooth={true} offset={-50} className="cursor-pointer pointer-events-auto"><Image
              src="/others/logo.webp"
              alt="Vgeek Logo"
              width={544}
              height={267}
              className="object-contain w-auto h-auto max-w-[40vw] xl:max-w-full max-h-[30vh] xl:max-h-[15vh]"
              priority
            /></Scroll> :
            <Link href="/" className="cursor-pointer pointer-events-auto"><Image
              src="/others/logo.webp"
              alt="Vgeek Logo"
              width={544}
              height={267}
              className="object-contain w-auto h-auto max-w-[40vw] xl:max-w-full max-h-[30vh] xl:max-h-[15vh]"
              priority
            /></Link>
          }
        </div>
        <div className="flex glow justify-items-end">
          <div className="text-stone-900 hidden xl:flex text-base pointer-events-auto">
            <div className="ps-10 pe-8 py-4 rounded-s-full border-white border-s-2 border-y-2 bg-white bg-opacity-75 cursor-pointer hover:text-white hover:bg-rose-500 hover:bg-opacity-75">{is_home ? <Scroll to="about" smooth={true} offset={-50}>About</Scroll> : <Link href="/#about">About</Link>}</div>
            <div className="px-8 py-4 border-white border-y-2 bg-white bg-opacity-75 cursor-pointer hover:text-white hover:bg-rose-500 hover:bg-opacity-75">{is_home ? <Scroll to="members" smooth={true} offset={-50}>Members</Scroll> : <Link href="/#members">Members</Link>}</div>
            <div className="px-8 py-4 border-white border-y-2 bg-white bg-opacity-75 cursor-pointer hover:text-white hover:bg-rose-500 hover:bg-opacity-75">{is_home ? <Scroll to="groups" smooth={true} offset={-50}>Groups</Scroll> : <Link href="/#groups">Groups</Link>}</div>
            <div className="px-8 py-4 border-white border-y-2 bg-white bg-opacity-75 cursor-pointer hover:text-white hover:bg-rose-500 hover:bg-opacity-75">{is_home ? <Scroll to="link" smooth={true} offset={-50}>Link</Scroll> : <Link href="/#link">Link</Link>}</div>
            <div className="ps-8 pe-10 py-4 rounded-e-full border-white border-e-2 border-y-2 bg-white bg-opacity-75 cursor-pointer hover:text-white hover:bg-rose-500 hover:bg-opacity-75">{is_home ? <Scroll to="guideline" smooth={true} offset={-50}>Guideline</Scroll> : <Link href="/#guideline">Guideline</Link>}</div>
          </div>
          <div className="xl:ms-6 flex-auto shrink text-stone-900 text-xs xl:text-base">
            <button type="button" className="ps-3 pe-2 py-1 xl:ps-5 xl:pe-3 xl:py-4 rounded-s-full border-white border-s-2 border-y-2 cursor-pointer text-white bg-rose-500 bg-opacity-75">JP</button>
            <button type="button" className="ps-2 pe-3 py-1 xl:ps-3 xl:pe-5 xl:py-4 rounded-e-full border-white border-e-2 border-y-2 bg-white bg-opacity-75 cursor-pointer hover:text-white hover:bg-rose-500 hover:bg-opacity-75">EN</button>
          </div>
        </div>
      </nav>
    </header>
  )
}
