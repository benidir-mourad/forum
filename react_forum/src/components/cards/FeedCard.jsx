import { useState } from 'react'
import profil from '../../assets/sharingan.png'
import { Button, Form, Input } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import './feedCard.css'

const FeedCard = ({item}) => {

    const [form] = Form.useForm();
    const [clickResponse, setClickResponse] = useState(false);
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);

    const onFinish = (values) => {
        console.log(values);
    }

    const showResponseForm = (id) => {
        setSelectedQuestionId(id);
        setClickResponse(!clickResponse);
    }

    return (
        <>
            <article className='feed'>
                <div className='card_top'>
                    <h2>{item.title}</h2>
                    <div className='author'>
                        <img src={profil} alt='author profil' />
                        <div className='author_infos'>
                            <span>Benidir Mourad</span>
                            <p>@Benidir</p>
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem corrupti praesentium excepturi aliquam. Harum error velit consequuntur consectetur voluptate enim, laborum nihil commodi minus voluptas? Corporis iusto quod minima?</p>
                <div className='card_bottom'>
                    <Button type='link' className='card_bottom_btn' onClick={() => showResponseForm(item.id)}>
                        <EditOutlined />
                        <span>Répondre</span>
                    </Button>

                    <Button type='link'>
                        12 personnes ont répondu
                    </Button>
                </div>
            </article>
            {
                selectedQuestionId == item.id && clickResponse == true && (
                    <div className='response_form'>
                        <Form
                            layout='vertical'
                            form={form}
                            onFinish={onFinish}
                            autoComplete='off'>
                            <Form.Item
                                label="Votre réponse"
                                name='description'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Entrez votre réponse'
                                    }
                                ]}>
                                <Input.TextArea placeholder='Laissez votre réponse' />
                            </Form.Item>
                            <Button onClick={() => form.submit()}>Répondre</Button>
                        </Form>
                    </div>
                )
            }
        </>
    )
}

export default FeedCard
