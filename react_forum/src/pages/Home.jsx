import React from 'react'
import './home.css'
import FeedCard from '../components/cards/FeedCard'

const Home = () => {
    return (
        <section className='feed_page'>
            <FeedCard />
            <FeedCard />
            <FeedCard />
        </section>

    )
}

export default Home
