import React from 'react'
import NewsImage from './NewsImage';


const NewsLoop = ({ categories, news, media, categorySlug, items, hasImage, hasDetails, imageWrap, titleStyle, height, width, wordCount, titleCount }) => {
    let categoryId;
    categories.filter(category => category.slug === categorySlug).map(category => {
        categoryId = category._id
    })
    return (
        news
            .filter(
                categoryId
                    ? post => post.categories.includes(categoryId)
                    : () => true
            )
            .reverse()
            .slice(0, items || 5)
            .map((newsPost) => (
                imageWrap === true ?
                    <div className="w-full" key={newsPost._id}>
                        {hasDetails === false ? null :
                            <h3 className={titleStyle ? titleStyle : 'font-bold text-xl'}>
                                {newsPost.title.split(" ").slice(0, titleCount ? titleCount : 6).join(" ")}...
                                </h3>
                        }
                        <div className="flex">
                            {/* Available Props:
                                media, newsPost, width, height, quality */}
                            <NewsImage media={media} newsPost={newsPost} width={width} height={height} />
                            {
                                hasDetails === false
                                    ?
                                    <h3 className={titleStyle ? titleStyle : 'font-bold text-xl'}>
                                        {newsPost.title.split(" ").slice(0, titleCount ? titleCount : 6).join(" ")}...
                                    </h3>
                                    :
                                    <p className="ml-2">
                                        {newsPost.content.split(" ").slice(0, wordCount ? wordCount : 20).join(" ")}...
                                    </p>
                            }
                        </div>
                    </div>
                    :
                    <div className="w-full" key={newsPost._id}>
                        <h3 className={titleStyle ? titleStyle : 'font-bold text-xl'}>
                        {newsPost.title.split(" ").slice(0, titleCount ? titleCount : 6).join(" ")}...
                        </h3>
                        {/* Available Props:
                            media, newsPost, width, height, quality */}

                        {hasImage === false ? null : <NewsImage media={media} newsPost={newsPost} width={width} height={width} />}
                        {hasDetails === false ? null : <p>{newsPost.content.split(" ").slice(0, wordCount ? wordCount : 20).join(" ")}...</p>}
                    </div>
            ))
    )
}

export default NewsLoop