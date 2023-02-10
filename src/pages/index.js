import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import GetNews from '@/components/GetNews'
import { useState } from 'react'
import NewsImage from '@/components/NewsImage'
import NewsLoop from '@/components/NewsLoop'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ news, categories, media }) {

  return (
    <>
      <Head>
        <title>Home Page | NextNEWS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header categories={categories} />

      <main className="container flex">
        <div className="w-3/4 p-5 flex gap-5">
          <div className="lead-news w-1/2 p-2 border-2">
            <NewsLoop categorySlug='lead-news' categories={categories} news={news} media={media} items={1} />
          </div>
          <div className="w-1/2 p-2 border-2">
            sdfad
          </div>
        </div>
        <div className="sidebar w-1/4 p-5">
          <h2 className="font-black text-lg border-dashed border-b-[1px] border-gray-600">Latest News</h2>

          {
            news.map((newsPost) => (
              <ul>
                <li className="border-dashed border-b-[1px] border-gray-600" key={newsPost._id}>{newsPost.title}</li>
              </ul>
            ))
          }
        </div>
      </main>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const [resPosts, resCats, resMedia] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/media`)
  ])

  let news, categories, media;

  try {
    news = await resPosts.json();
    categories = await resCats.json();
    media = await resMedia.json();
  } catch (error) {
    console.error(error);
    <p>Error Fetching API</p>
  }

  // console.log("News:", news);
  // console.log("Categories:", categories);

  return {
    props: {
      news,
      categories,
      media
    },
  };
};
