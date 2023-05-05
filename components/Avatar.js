import Image from 'next/image'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <Image src={picture.url} layout="fill" className="rounded-full" alt={name[0].text} />
      </div>
      <div className="font-bold">{name}</div>
    </div>
  )
}
