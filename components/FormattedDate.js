import { format } from 'date-fns'
//import { Date as PrismicDate } from 'prismic-reactjs'

export default function FormattedDate({ dateString }) {
  //const date = PrismicDate(dateString)
  const date = new Date(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}
