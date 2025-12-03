import React, { useState } from "react";
import { Button, Modal, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons'

const AuthModals = ({ open, setOpen }) => {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();
    const [switchForm, setSwitchForm] = useState(1);

    const loginForm = () => {
        setSwitchForm(1);
    }

    const registerForm = () => {
        setSwitchForm(2);
    }

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
                {switchForm == 1 &&
                    <>
                        {/* Login form */}
                        <Form.Item
                            label="Email"
                            name='email'
                            rules={[
                                {
                                    required: true,
                                    message: 'Entrez votre e-mail'
                                }
                            ]}>
                            <Input />
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
                            <Input.Password />
                        </Form.Item>

                        <p> Pas de compte ?
                            <Button type='link' onClick={registerForm}> S'enregistrer</Button>
                        </p>

                    </>

                }

                {switchForm == 2 &&
                    <>
                        {/* Register form */}
                        <Form.Item
                            label="Nom et prénom"
                            name='name'
                            rules={[
                                {
                                    required: true,
                                    message: 'Entrez votre nom et prénom'
                                }
                            ]}>
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Image de profil"
                            name='image'>
                            <Upload listType='picture'>
                                <Button icon={<UploadOutlined />}>Télécharger une image de profil</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name='email'
                            rules={[
                                {
                                    required: true,
                                    message: 'Entrez votre e-mail'
                                }
                            ]}>
                            <Input />
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
                            <Input.Password />
                        </Form.Item>

                        <p> Vous avez déjà un compte ?
                            <Button type='link' onClick={loginForm}> Se connecter</Button>
                        </p>
                    </>
                }
            </Form>
        </Modal>
    )
}

export default AuthModals
