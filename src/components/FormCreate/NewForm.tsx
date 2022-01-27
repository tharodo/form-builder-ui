import React, { useEffect, useState } from "react";
import './NewForm.css'
import { Card, Empty, Modal } from 'antd';
import { EditOutlined } from "@ant-design/icons";
import FormModal from './FormModal';
import axios from "axios";

const NewForm = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [data, setData] = useState({
        title: "Form Title",
        description: "Form Description"
    });
    const [saveData, setSaveData] = useState({
        title: "Form Title",
        description: "Form Description"
    })

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        axios
            .post("http://localhost:8000/api/forms", {
                "name": data.title,
                "description": data.description,
                "formElements": {
                    "a": true,
                    "b": false
                }
            })
            .then(function (response: any) {
                console.log(response.data);
            })
            .catch(function (error: any) {
                console.log(error);
            });

        setIsModalVisible(false);
        setSaveData(data);

        // post du lieu cho BE
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setData({
            title: "",
            description: ""
        });
    };

    useEffect(() => {
        console.log("change:", data.title, data.description);

    }, [data]);


    return (
        <div>
            <div className="form-content">
                <div className="site-card-border-less-wrapper">
                    <div className="form-header">
                        <div className="form-title">
                            <h2>{saveData.title}</h2>
                        </div>
                        <div className="form-edit">
                            <EditOutlined
                                style={{ color: '#1990ff' }}
                                onClick={showModal}
                            />
                        </div>
                    </div>
                    <div className="form-content">
                        <Card title={saveData.description}>
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        </Card>
                    </div>
                    <Modal title="Form Title and Description" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <FormModal data={data} setData={setData} />
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default NewForm;