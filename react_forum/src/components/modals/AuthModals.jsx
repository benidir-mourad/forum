import { Button, Modal } from 'antd';
import React, { useState } from "react";

const AuthModals = ({open, setOpen}) => {
        const [confirmLoading, setConfirmLoading] = useState(false);
        
        const handleOk = () => {
            setConfirmLoading(true);
            setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            }, 2000);
        };

        const handleCancel = () => {
            console.log('Clicked cancel button');
            setOpen(false);
        };
      return (
        <Modal
            title="Authentification"
            centered
            width={1000}
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            <p>Je suis le modal</p>
        </Modal>
  )
}

export default AuthModals
