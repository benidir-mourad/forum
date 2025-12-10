import profil from '../../assets/sharingan.png'
import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'

const FeedCard = () => {
    return (
        <article className='feed'>
            <div className='card_top'>
                <h2>Titre de la question</h2>
                <div className='author'>
                    <img src={profil} alt='author profil' />
                    <div className='author_infos'>
                        <span>Benidir Mourad</span>
                        <p>@Benidir</p>
                    </div>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem corrupti praesentium excepturi aliquam. Harum error velit consequuntur consectetur voluptate enim, laborum nihil commodi minus voluptas? Corporis iusto quod minima?</p>
            <div className='card_bottom'></div>
            <Button type='link' className='card_bottom_btn'>
                <EditOutlined />
                <span>Répondre</span>
            </Button>

            <Button type='link'>
                12 personnes ont répondu
            </Button>
        </article>
    )
}

export default FeedCard
