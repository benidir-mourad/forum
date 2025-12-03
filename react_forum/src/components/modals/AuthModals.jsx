import { Button, Modal, Form, Input} from 'antd';
import React, { useState } from "react";

const AuthModals = ({ open, setOpen }) => {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const onFinish = (values) => {
        console.log(values);
    }
    return (
        <Modal
            title="Authentification"
            centered
            width={1000}
            open={open}
            onOk={() => form.submit()}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            <Form
                name='basic'
                form={form}
                layout='vertical'
                autoComplete='off'
                onFinish={onFinish}
            >
                <Form.Item
                    label="Email"
                    name='email'
                    rules={[
                        {
                            required: true,
                            message: 'Entrez votre e-mail'
                        }
                    ]}>
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Mot de passe"
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Entrez votre mot de passe'
                        }
                    ]}>
                    <Input.Password/>
                </Form.Item>

                <p> Pas de compte ?
                    <Button type='link'> Créer</Button>
                </p>



            </Form>
        </Modal>
    )
}

export default AuthModals
