import Head from 'next/head'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import React from 'react'
import NewsLoop from '@/components/NewsLoop'

const newsCategory = ({ news, categories, media }) => {
    const categorySlug = useRouter().query.category

    let categoryId
    return (
        <>
            <Head>
                <title> NextNEWS</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header categories={categories} />

            <main className="container">

                <div className="p-5 gap-5">

                    {
                        categories.filter(category => category.slug === categorySlug).map(category => {
                            categoryId = category._id
                            return (
                                <div className="container bg-gray-200 p-4">
                                    <h2 className="text-2xl font-bold">Category: {category.title}</h2>
                                </div>
                            )
                        })
                    }
                    <div className="grid grid-cols-2 gap-4">
                        {/* Available Props:
                        categories, news, media, categorySlug, items, hasImage, hasDetails, imageWrap, style, height, width, wordCount  */}
                        <NewsLoop categorySlug={categorySlug} categories={categories} news={news} media={media} imageWrap={true} items={20} width={125} height={100} wordCount={22} titleCount={10} />
                    </div>

                </div>
            </main>
        </>

    )
}

export default newsCategory

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
