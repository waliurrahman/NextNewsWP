import Head from 'next/head'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import React from 'react'
import NewsLoop from '@/components/NewsLoop'

const singleNews = ({ news, categories, media }) => {
    const newsSlug = useRouter().query.news
    let newsId
    return (
        <>
            <Head>
                <title> NextNEWS</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header categories={categories} news={news} media={media} />

            <main className="single-news container flex">

                <div className="content w-3/4 p-5 gap-5">

                    <div className="grid grid-cols-1">
                        <NewsLoop newsSlug={newsSlug} categories={categories} news={news} media={media} imageWrap={false} items={1} width={400} height={300} titleClass={'text-3xl py-3 font-bold'} divClass={'float-left'} titleCount={200} wordCount={9999} />
                    </div>

                </div>
                <div className="sidebar w-1/4 p-5">
                    <h2 className="font-black text-xl border-dashed border-b-[1px] border-gray-600">From This Category</h2>
                    <NewsLoop categories={categories} news={news} media={media} imageWrap={true} hasDetails={false} items={4} width={100} height={40} titleClass={'text-md py-3 font-bold'} divClass={'float-left'} titleCount={10} wordCount={50} />
                </div>
            </main>
        </>

    )
}

export default singleNews

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