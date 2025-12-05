import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import './navbar.css'
import { menuItem } from '../../data'

const Navbar = () => {

    const [isItemClicked, setItemClicked] = useState(null);

    const handleMenuItemClicked = (item) => {
        setItemClicked(item.id);
        console.log(item.id);
    }

    return (
        <div>
            <nav className='widescreen-nav'>
                <ul>
                    <li className='add_question_btn'>
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
            </nav>
        </div >
    )
}

export default Navbar
