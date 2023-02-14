import Image from "next/image"

const NewsImage = ({ media, newsPost, width, height, quality }) => {
// console.log(newsPost.featured_media)

  return (

    newsPost.featured_media ? 
      media.filter(img => img.id == newsPost.featured_media).map((img) => (
        <Image
          key={img.id}
          src={img.guid.rendered}
          alt={newsPost.title.rendered}
          width={width ? width : '400'}
          height={height ? height : '300'}
          style={{ color: 'red', height: 'fit-content' }}
          quality={quality ? quality : '40'}
          placeholder="blur"
          blurDataURL="L6J[b+g4x]xGt8bHbHf6.TnhR5S#"
        />
      ))
      : 
      <Image
        className={`w-${width ? `${width}px` : 'auto'} h-${height ? `${height}px` : 'auto'} bg-slate-500 block`}
        src={`/nextnews-placeholder.svg`}
        alt={'Image Not Found'}
        width={width ? width : '400'}
        height={height ? height : '300'}
        style={{ color: 'red' }}
        quality={quality ? quality : '40'}
      />
  )
}

export default NewsImage