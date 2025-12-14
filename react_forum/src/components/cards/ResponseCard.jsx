import React from 'react'
import './feedCard.css'
import profil from '../../assets/sharingan.png'

const ResponseCard = () => {
    return (
        <article className='feed'>
            <div className='card_top'>
                <div className='author'>
                    <img src={profil} alt='author profil' />
                    <div className='author_infos'>
                        <span>Benidir Mourad</span>
                        <p>@Benidir</p>
                    </div>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem corrupti praesentium excepturi aliquam. Harum error velit consequuntur consectetur voluptate enim, laborum nihil commodi minus voluptas? Corporis iusto quod minima?</p>
        </article>
    )
}

export default ResponseCard
