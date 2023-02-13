import Image from "next/image"

const NewsImage = ({ media, newsPost, width, height, quality }) => {

  const convertImage = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;


  const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  return (

    newsPost.media[0]
      ? media.filter(img => img._id.includes(newsPost.media[0])).map((img) => (
        <Image
          key={img._id}
          src={img.src}
          alt={img.title}
          width={width ? width : '400'}
          height={height ? height : '300'}
          style={{ color: 'red', height: 'fit-content' }}
          quality={quality ? quality : '40'}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            convertImage(700, 475)
          )}`}
        />
      ))
      : <Image
        className={`w-${width ? `${width}px` : 'auto'} h-${height ? `${height}px` : 'auto'} bg-slate-500 block`}
        src={`/nextnews-placeholder.svg`}
        alt={`No Image Found`}
        width={width ? width : '400'}
        height={height ? height : '300'}
        style={{ color: 'red' }}
        quality={quality ? quality : '40'}
      />
  )
}

export default NewsImage