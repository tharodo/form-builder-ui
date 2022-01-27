import { Table, Tag } from 'antd';
import axios from 'axios';
import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react';

const columns = [
    {
        title: 'FORM NAME',
        dataIndex: 'name',
        key: 'name',
        render: (text: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined) => <a>{text}</a>,
    },
    {
        title: 'STATUS',
        key: 'status',
        dataIndex: 'status',
    },
    {
        title: 'DESCRIPTION',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'LAST UPDATED',
        dataIndex: 'updatedAt',
        key: 'updated',
    },

];

const FormTable = () => {
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        axios
            .post("http://localhost:8000/api/forms/list", {
                search: "",
                status: ["Active"],
                page: 1,
                pageSize: 10,
            })
            .then(function (response: any) {
                console.log(response.data);
                setData(response.data.forms);
            })
            .catch(function (error: any) {
                console.log(error);
            });

    }, []);

    useEffect(() => {
        console.log("data;", data);
    }, [data]);

    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default FormTable;