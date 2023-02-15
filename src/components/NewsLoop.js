import Link from 'next/link';
import React from 'react'
import NewsImage from './NewsImage';

const NewsLoop = ({ categories, news, media, categorySlug, items, offset, hasImage, hasDetails, imageWrap, divClass, titleClass, height, width, wordCount, titleCount, newsSlug, imageFirst }) => {

    let categoryId;
    // categories.map(category => (
    //     decodeURIComponent(category.slug) === categorySlug ?
    //         categoryId = category.id
    //         : null
    // ))

    categories.filter(category => decodeURIComponent(category.slug) === categorySlug).map(category => {
        categoryId = category.id
    })

    return (
        news
            .filter(post =>
                (categoryId && post.categories.includes(categoryId))
                || (newsSlug && post.slug.includes(newsSlug))
                || (!categoryId && !newsSlug)
            )
            // .reverse()
            .slice(offset || 0, items || 5)
            .map((newsPost) => (

                newsSlug ?
                    <>
                        {imageWrap === true ?
                            <div className={divClass ? divClass : 'w-full'} key={newsPost.id}>
                                {hasDetails === false || imageFirst === true ? null :
                                    <h3 className={titleClass ? titleClass : 'font-bold text-xl'}>
                                        {newsPost.title.rendered.split(" ").slice(0, titleCount ? titleCount : 20).join(" ")}
                                    </h3>
                                }
                                <div className="flex items-center gap-3">
                                    {/* Available Props:
                                media, newsPost, width, height, quality */}
                                    <NewsImage media={media} newsPost={newsPost} width={width} height={height} />
                                    {hasDetails === false || imageFirst === true ?
                                        <h3 className={titleClass ? titleClass : 'font-bold text-xl'}>
                                            {newsPost.title.rendered.split(" ").slice(0, titleCount ? titleCount : 20).join(" ")}
                                        </h3>
                                        :
                                        <p>
                                            {newsPost.content.rendered.split(" ").slice(0, wordCount ? wordCount : 20).join(" ")}
                                        </p>
                                    }
                                </div>
                            </div>

                            :
                            <div className={divClass ? divClass : 'w-full'} key={newsPost.id}>
                                {imageFirst === true ? null :
                                    <h3 className={titleClass ? titleClass : 'font-bold text-xl'}>
                                        {newsPost.title.rendered.split(" ").slice(0, titleCount ? titleCount : 20).join(" ")}
                                    </h3>
                                }

                                {hasImage === false ? null :
                                    <NewsImage media={media} newsPost={newsPost} width={width} height={width} />}

                                {imageFirst === true ?
                                    <h3 className={titleClass ? titleClass : 'font-bold text-xl'}>
                                        {newsPost.title.rendered.split(" ").slice(0, titleCount ? titleCount : 20).join(" ")}
                                    </h3>
                                    : null
                                }
                                {hasDetails === false ? null : <p>{newsPost.content.rendered.split(" ").slice(0, wordCount ? wordCount : 20).join(" ")}</p>}

                            </div>
                        }
                    </>
                    :
                    <Link key={newsPost.id} href={`/news/${newsPost.slug}`}>
                        {imageWrap === true ?
                            <div className={divClass ? divClass : 'w-full'} key={newsPost.id}>
                                {hasDetails === false || imageFirst === true ? null :
                                    <h3 className={titleClass ? titleClass : 'font-bold text-xl'}>
                                        {newsPost.title.rendered.split(" ").slice(0, titleCount ? titleCount : 20).join(" ")}
                                    </h3>
                                }
                                <div className="flex items-center gap-3">
                                    {/* Available Props:
                            media, newsPost, width, height, quality */}

                                    <NewsImage media={media} newsPost={newsPost} width={width} height={height} />

                                    {hasDetails === false || imageFirst === true ?
                                        <h3 className={titleClass ? titleClass : 'font-bold text-xl'}>

                                            {newsPost.title.rendered.split(" ").slice(0, titleCount ? titleCount : 20).join(" ")}

                                        </h3>
                                        :
                                        <p>
                                            {newsPost.content.rendered.split(" ").slice(0, wordCount ? wordCount : 20).join(" ")}
                                        </p>
                                    }
                                </div>
                            </div>

                            :
                            <div className={divClass ? divClass : 'w-full'} key={newsPost.id}>
                                {imageFirst === true ? null :
                                    <h3 className={titleClass ? titleClass : 'font-bold text-xl'}>

                                        {newsPost.title.rendered.split(" ").slice(0, titleCount ? titleCount : 20).join(" ")}

                                    </h3>
                                }

                                {hasImage === false ? null :

                                    <NewsImage media={media} newsPost={newsPost} width={width} height={width} />

                                }

                                {imageFirst === true ?
                                    <h3 className={titleClass ? titleClass : 'font-bold text-xl'}>

                                        {newsPost.title.rendered.split(" ").slice(0, titleCount ? titleCount : 20).join(" ")}

                                    </h3>
                                    : null
                                }
                                {hasDetails === false ? null : <p>{newsPost.content.rendered.split(" ").slice(0, wordCount ? wordCount : 20).join(" ")}</p>}

                            </div>
                        }
                    </Link>
            ))
    )
}

export default NewsLoop