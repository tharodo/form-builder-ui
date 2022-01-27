import React from "react";
import { Form, Input } from 'antd';
import TextArea from "antd/lib/input/TextArea";

type Props = {
    data: {
        title: string;
        description: string;
    }
    setData: React.Dispatch<React.SetStateAction<{
        title: string;
        description: string;
    }>>;
}

const FormModal: React.FunctionComponent<Props> = (props) => {
    const [form] = Form.useForm();
    const {data, setData} = props;

    return (
        <Form
            form={form}
        >
            <Form.Item label="Form Title" rules={[{ required: true }]}>
                <Input placeholder="input placeholder" value={data.title} onChange={(event) => {
                    setData((prevData) => ({
                        ...prevData,
                        title: event.target.value,
                    }))
                }} />
            </Form.Item>
            <Form.Item label="Form Description">
                <TextArea placeholder="input placeholder" value={data.description} onChange={(event) => {
                    setData((prevData) => ({
                        ...prevData,
                        description: event.target.value,
                    }))
                }} />
            </Form.Item>

        </Form>
    );
}

export default FormModal;