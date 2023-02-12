import Link from 'next/link';
import React from 'react'
import NewsImage from './NewsImage';


const NewsLoop = ({ categories, news, media, categorySlug, items, hasImage, hasDetails, imageWrap, divClass, titleClass, height, width, wordCount, titleCount, newsSlug }) => {
    let categoryId;
    categories.filter(category => category.slug === categorySlug).map(category => {
        categoryId = category._id
    })
    console.log(newsSlug)
    return (
        news
            .filter(post =>
                (categoryId && post.categories.includes(categoryId))
                || (newsSlug && post.slug.includes(newsSlug))
                || (!categoryId && !newsSlug)
            )
            .reverse()
            .slice(0, items || 5)
            .map((newsPost) => (
                newsSlug ? 
                <>
                    {imageWrap === true ?
                        <div className={divClass ? divClass : 'w-full'} key={newsPost._id}>
                            {hasDetails === false ? null :
                                <h3 className={titleClass ? titleClass : 'font-bold text-xl'}>
                                    {newsPost.title.split(" ").slice(0, titleCount ? titleCount : 10).join(" ")}
                                </h3>
                            }
                            <div className="flex items-center gap-3">
                                {/* Available Props:
                                media, newsPost, width, height, quality */}
                                <NewsImage media={media} newsPost={newsPost} width={width} height={height} />
                                {
                                    hasDetails === false
                                        ?
                                        <h3 className={titleClass ? titleClass : 'font-bold text-xl'}>
                                            {newsPost.title.split(" ").slice(0, titleCount ? titleCount : 10).join(" ")}
                                        </h3>
                                        :
                                        <p>
                                            {newsPost.content.split(" ").slice(0, wordCount ? wordCount : 20).join(" ")}
                                        </p>
                                }
                            </div>
                        </div>

                        :
                        <div className={divClass ? divClass : 'w-full'} key={newsPost._id}>
                            <h3 className={titleClass ? titleClass : 'font-bold text-xl'}>
                                {newsPost.title.split(" ").slice(0, titleCount ? titleCount : 6).join(" ")}
                            </h3>
                            {/* Available Props:
                            media, newsPost, width, height, quality */}

                            {hasImage === false ? null : <NewsImage media={media} newsPost={newsPost} width={width} height={width} />}
                            {hasDetails === false ? null : <p>{newsPost.content.split(" ").slice(0, wordCount ? wordCount : 20).join(" ")}</p>}
                        </div>
                    }
                </>
                
                :
                <Link href={`/news/${newsPost.slug}`}>
                    {imageWrap === true ?
                        <div className={divClass ? divClass : 'w-full'} key={newsPost._id}>
                            {hasDetails === false ? null :
                                <h3 className={titleClass ? titleClass : 'font-bold text-xl'}>
                                    {newsPost.title.split(" ").slice(0, titleCount ? titleCount : 10).join(" ")}
                                </h3>
                            }
                            <div className="flex items-center gap-3">
                                {/* Available Props:
                                media, newsPost, width, height, quality */}
                                <NewsImage media={media} newsPost={newsPost} width={width} height={height} />
                                {
                                    hasDetails === false
                                        ?
                                        <h3 className={titleClass ? titleClass : 'font-bold text-xl'}>
                                            {newsPost.title.split(" ").slice(0, titleCount ? titleCount : 10).join(" ")}
                                        </h3>
                                        :
                                        <p>
                                            {newsPost.content.split(" ").slice(0, wordCount ? wordCount : 20).join(" ")}
                                        </p>
                                }
                            </div>
                        </div>

                        :
                        <div className={divClass ? divClass : 'w-full'} key={newsPost._id}>
                            <h3 className={titleClass ? titleClass : 'font-bold text-xl'}>
                                {newsPost.title.split(" ").slice(0, titleCount ? titleCount : 6).join(" ")}
                            </h3>
                            {/* Available Props:
                            media, newsPost, width, height, quality */}

                            {hasImage === false ? null : <NewsImage media={media} newsPost={newsPost} width={width} height={width} />}
                            {hasDetails === false ? null : <p>{newsPost.content.split(" ").slice(0, wordCount ? wordCount : 20).join(" ")}</p>}
                        </div>
                    }
                </Link>
            ))
    )
}

export default NewsLoop