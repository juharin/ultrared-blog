import Link from 'next/link'
import Author from './Author'
import CoverImage from './CoverImage'
import PostType from './PostType'

export default function PostPreview({ title, coverImage, date, excerpt, authors, slug, type }) {
  return (
    <div className="mr-4 mb-4">
      <div className="mb-5">
        {coverImage && <CoverImage title={title} slug={slug} url={coverImage.url} />}
      </div>
      <div>
        <PostType>{type}</PostType>
      </div>
      <h3 className="mb-6 text-3xl leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <Author date={date} author={authors[0]} />
    </div>
  )
}
