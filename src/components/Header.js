import Head from "next/head";
import Link from "next/link";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import NewsLoop from "./NewsLoop";

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
      <div className="text-center p-7">
        <h1 className="logo text-5xl font-bold text-gray-700"><Link href={`/`}>Next<span className="text-red-700">NEWS</span></Link></h1>
        <h3 className="text-sm text-gray-500">Fastest NewsCMS You'd Ever Need!</h3>
      </div>

      <Disclosure as="nav" className="bg-gray-800">
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
                      <Link href={`/`} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                      {categories ? categories.map((category) => (
                        <Link
                          key={category._id}
                          href={`/${category.slug}`}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          {category.title}
                        </Link>
                      )) : <p>No Categories Found</p>}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                <Link href={`/`} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                {categories ? categories.map((category) => (
                  <Disclosure.Button
                    key={category._id}
                    as="a"
                    href={category.slug}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    {category.title}
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