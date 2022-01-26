import React, { useState } from "react";
import './NewForm.css'
import { Card, Empty, Modal } from 'antd';
import { EditOutlined } from "@ant-design/icons";
import FormModal from './FormModal';

const NewForm = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <div className="form-content">
                <div className="site-card-border-less-wrapper">
                    <div className="form-header">
                        <div className="form-title">
                            <h2>Form Title</h2>
                        </div>
                        <div className="form-edit">
                            <EditOutlined
                                style={{ color: '#1990ff' }}
                                onClick={showModal}
                            />
                        </div>
                    </div>
                    <div className="form-content">
                        <Card title="Form Description">
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        </Card>
                    </div>
                    <Modal title="Form Title and Description" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <FormModal/>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default NewForm;