import Date from './FormattedDate'
import Image from 'next/image'

export default function Author({ date, author }) {
  return (
    <div className="mb-4 text-sm">
      <div className="mb-4">
        <div className="flex items-center">
          <div className="relative mr-4 h-12 w-12">
            <Image
              src={author.avatar}
              layout="fill"
              className="rounded-full"
              alt={author.name[0].text}
            />
          </div>
          <div className="flex-col">
            <div className="font-bold">{author.name}</div>
            <div>
              <Date dateString={date} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
