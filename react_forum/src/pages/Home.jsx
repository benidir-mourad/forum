import React from 'react'
import './home.css'
import FeedCard from '../components/cards/FeedCard'
import { questions } from '../data'

const Home = () => {
    return (
        <section className='feed_page'>
            {
                questions.map((item) => (
                    <FeedCard item={item} key={item.id}/>
                ))
            }
        </section>

    )
}

export default Home
