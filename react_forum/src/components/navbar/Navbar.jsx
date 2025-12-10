import React, { useState, useEffect } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import './navbar.css'
import { menuItem } from '../../data'
import AddQuestionModal from '../modals/AddQuestionModal'

const Navbar = () => {

    const [isItemClicked, setItemClicked] = useState(null);
    const [openAddQuestionModal, setOpenAddQuestionModal] = useState(false);
    const [isMobile, setIsMobile] = useState(false);


    const handleMenuItemClicked = (item) => {
        setItemClicked(item.id);
        console.log(item.id);
    }

    const handleOpenModal = () => {
        setOpenAddQuestionModal(true);
    }

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions)

        return () => {
            window.removeEventListener('resize', updateDimensions)
        }
    }, [])

    const updateDimensions = () => {
        setIsMobile(window.innerWidth <= 620)
    }


    return (
        <nav className={isMobile ? 'mobile_nav' : 'widescreen_nav' }>
            <ul>
                <li className='add_question_btn' onClick={handleOpenModal}>
                    <PlusOutlined />
                    Poser une question
                </li>

                {
                    menuItem.map((item) => (
                        <li className={isItemClicked == item.id ? 'menu_item active' : 'menu_item'}
                            key={item.id}
                            onClick={() => handleMenuItemClicked(item)
                            }>
                            <div className='menu_icon'>{item.icon}</div>
                            <div className='menu_title'>{item.title}</div>
                        </li>
                    ))
                }
            </ul>
            <AddQuestionModal open={openAddQuestionModal} setOpen={setOpenAddQuestionModal} />
        </nav>
    )
}

export default Navbar
