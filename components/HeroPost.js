import Link from 'next/link'
import Author from './Author'
import CoverImage from './CoverImage'
import PostType from './PostType'
import Tag from './Tag'

export default function HeroPost({ title, coverImage, date, excerpt, authors, slug, tags }) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        {coverImage && <CoverImage title={title} slug={slug} url={coverImage.url} />}
      </div>
      <div className="mb-2 md:mb-4">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
      <div className="md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28 md:grid md:grid-cols-2">
        <div className="mr-8">
          <h3 className="mb-8 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <p className="text-md mb-4 font-light leading-relaxed">{excerpt}</p>
        </div>
        <div>{authors && <Author date={date} author={authors[0]} />}</div>
      </div>
    </section>
  )
}
