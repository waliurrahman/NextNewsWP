import Head from "next/head";
import Link from "next/link";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import NewsLoop from "./NewsLoop";
import Image from "next/image";

const Header = ({ categories, news, media }) => {
  return (
    <>
      <Head>
        <title> NextNEWS</title>
        <meta name="description" content="Generate new niche ideas for businesses, content creators and social media" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {news ?
        <div className="flex w-full z-100 bg-red-900 text-white">
          <h4 className="font-black w-1/6 bg-red-700 text-white text-center uppercase leading-10 animate-pulse">
            Breaking News
          </h4>
          <marquee>
            <NewsLoop categorySlug='breaking-news' categories={categories} news={news} media={media} items={1} titleClass={'text-sm font-bold leading-10 uppercase shadow-black drop-shadow'} hasDetails={false} hasImage={false} />
          </marquee>
        </div>
        :
        null
      }
      <div className="flex w-full justify-between text-center items-center">
      <div className="">Date</div>  
      <div className="text-center p-7">
        <Link href={`/`}>
          <Image
          src={'https://prothomkotha.com/wp-content/uploads/2023/01/prothomkotha-logo.png'}
          alt={'Daily Prothom Kotha'}
          width={300}
          height={70}
          />
        </Link>
      </div>
      <div className="">English</div>
      </div>

      <Disclosure as="nav" className="bg-zinc-900">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white">
              <div className="relative flex h-12 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-3">
                      <Link href={`/`} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">?????????????????????</Link>
                      {categories ? categories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/${category.slug}`}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          {category.name}
                        </Link>
                      )) : <p>No Categories Found</p>}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                <Link href={`/`} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">?????????????????????</Link>
                {categories ? categories.map((category) => (
                  <Disclosure.Button
                    key={category.id}
                    as="a"
                    href={category.slug}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    {category.name}
                  </Disclosure.Button>
                )) : <p>No Categories Found</p>}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

    </>

  )
}

export default Header