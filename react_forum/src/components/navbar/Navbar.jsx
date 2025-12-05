import React from 'react'
import { EditOutlined, FileOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons'
import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className='widescreen-nav'>
                <ul>
                    <li className='add_question_btn'>
                        <PlusOutlined />
                        Poser une question
                    </li>

                    <li className='menu_item'>
                        <div className='menu_icon'><QuestionOutlined /></div>
                        <div className='menu_title'>Toutes les questions</div>
                    </li>

                    <li className='menu_item'>
                        <div className='menu_icon'><FileOutlined /></div>
                        <div className='menu_title'>Mes questions</div>
                    </li>

                    <li className='menu_item'>
                        <div className='menu_icon'><EditOutlined /></div>
                        <div className='menu_title'>Mes réponses</div>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
