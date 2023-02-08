import React from 'react'
import NewsImage from './NewsImage';


const NewsLoop = ({ categories, news, media, categorySlug, items, hasImage, hasDetails }) => {
    let categoryId;
    categories.filter(category => category.slug === categorySlug).map(category => {
        categoryId = category._id
    })
    return (
        news.filter(post => post.categories.includes(categoryId)).reverse().slice(0, 1).map((newsPost) => (
            <>
                <h3 className="text-xl font-bold" key={newsPost._id}>{newsPost.title}</h3>
                <NewsImage media={media} newsPost={newsPost} width={400} />
                <p>{newsPost.content}</p>
            </>
        ))
    )
}

export default NewsLoop