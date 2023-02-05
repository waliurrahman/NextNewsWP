const GetNews = (news, media, leadNews, sliceNum) => {
  return (
    news
      .filter(post => post.categories.includes(leadNews))
      .reverse()
      .slice(0, sliceNum)
      .map(newsPost => (
        <>
          <h3 className="text-xl font-bold" key={newsPost._id}>
            {newsPost.title}
          </h3>
          {/* <Image
            src={
              media.filter(img => img._id.includes(newsPost.media[0]))
                .map(img => img.src)[0]
            }
            alt={
              media.filter(img => img._id.includes(newsPost.media[0]))
                .map(img => img.src)[0]
            }
            width={400}
            height={300}
          /> */}
          <p>{newsPost.content}</p>
        </>
      ))
  )
}

export default GetNews