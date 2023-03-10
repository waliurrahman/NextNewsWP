import Head from 'next/head'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import React from 'react'
import NewsLoop from '@/components/NewsLoop'

const NewsCategory = ({ news, categories, media, categoryId }) => {
    const categorySlug = useRouter().query.category
    
    // let categoryId
    // categories.filter(category => decodeURIComponent(category.slug) == categorySlug).map(category => {
    //     categoryId = category.id
    //     console.log(categoryId)
    // })

    return (
        <>
            <Head>
                <title> NextNEWS</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header categories={categories} news={news} media={media} />

            <main className="container">

                <div className="p-5 gap-5">

                    {/* {
                        categories.map(category => (
                            decodeURIComponent(category.slug) === categorySlug ?
                                <div key={category.id} className="container bg-gray-200 p-4">
                                    <h2 className="text-2xl font-bold">বিষয়ঃ {category.name}</h2>

                                </div>
                                : null
                        ))
                    } */}

                    {
                        categories.filter(category => decodeURIComponent(category.slug) == categorySlug).map(category => {
                            // categoryId = category.id

                            return (
                                <div key={category.id} className="container bg-gray-200 p-4">
                                    <h2 className="text-2xl font-bold">বিষয়ঃ {category.id + category.name}</h2>

                                </div>
                            )
                        })
                    }
                    <div className="grid grid-cols-2 gap-4">
                        {/* Available Props:
                        categories, news, media, categorySlug, items, hasImage, hasDetails, imageWrap, divClass, titleClass, height, width, wordCount, titleCount */}
                        <NewsLoop categorySlug={categorySlug} categories={categories} news={news} media={media} hasImage={true} imageWrap={false} items={20} width={125} height={100} wordCount={22} titleCount={10} />
                    </div>

                </div>
            </main>
        </>

    )
}

export default NewsCategory

export const getServerSideProps = async (context) => {
    const { category: categorySlug } = context.query
    let categoryId
  
    // find the ID of the category with matching slug
    const resCats = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
    const categories = await resCats.json()
    const category = categories.find(cat => decodeURIComponent(cat.slug) === categorySlug)
    if (category) {
      categoryId = category.id
    } else {
      // handle case where category with matching slug is not found
      console.error(`Category with slug "${categorySlug}" not found.`)
    }
  
    // fetch news with the matching category ID
    const resPosts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?categories=${categoryId}`)
    const resMedia = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/media`)
    let news, media
  
    try {
      news = await resPosts.json()
      media = await resMedia.json()
    } catch (error) {
      console.error(error)
      return {
        notFound: true
      }
    }
  
    return {
      props: {
        news,
        categories,
        media,
        categoryId
      }
    }
  }
