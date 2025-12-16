import FeedCard from '../../components/cards/FeedCard'
import { questions } from '../../data'

const Questions = () => {
  return (
    <section className='feed_page'>
      {
        questions.map((item) => (
          <FeedCard item={item} key={item.id} />
        ))
      }
    </section>
  )
}

export default Questions
