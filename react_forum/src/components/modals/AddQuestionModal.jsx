import React from 'react'
import { Modal, Form, Input } from 'antd'

const AddQuestionModal = ({open, setOpen}) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    }



    return (
        <Modal
            title='Ajouter une question'
            centered
            open={open}
            width={1000}
            onCancel={() => setOpen(false)}
            onOk={() => form.submit()}
        >

            <Form
                name='basic'
                form={form}
                onFinish={onFinish}
                layout='vertical'>
                <Form.Item
                    label="Titre"
                    name='title'
                    rules={[
                        {
                            required: true,
                            message: 'Entrez le titre de la question'
                        }
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name='description'
                    rules={[
                        {
                            required: true,
                            message: 'Entrez la description de la question'
                        }
                    ]}>
                    <Input.TextArea placeholder='Donner la description de votre question' />
                </Form.Item>

            </Form>

        </Modal >
    )
}

export default AddQuestionModal
