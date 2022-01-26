import React from "react";
import { Form, Input } from 'antd';
import TextArea from "antd/lib/input/TextArea";


const FormModal = () => {
    const [form] = Form.useForm();

    return (
        <Form
            form={form}
        >
            <Form.Item label="Form Title">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Form Description">
                <TextArea placeholder="input placeholder" />
            </Form.Item>

        </Form>
    );
}

export default FormModal;