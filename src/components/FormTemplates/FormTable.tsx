import { Table, Tag } from 'antd';
import { ReactChild, ReactFragment, ReactPortal } from 'react';

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
        render: (status: any[]) => (
            <>
                {status.map(stt => {
                    let color;
                    if (stt === 'Active' || 'In use') {
                        color = 'green';
                    }
                    if (stt === 'Archived') {
                        color = 'grey'
                    }
                    return (
                        <Tag color={color} key={stt}>
                            {stt}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'VERSION NO',
        dataIndex: 'version',
        key: 'version',
    },
    {
        title: 'LAST UPDATED',
        dataIndex: 'updated',
        key: 'updated',
    },

];

const data = [
    {
        key: '1',
        name: 'Incident Details',
        status: ['Active'],
        version: '1'

    },
    {
        key: '2',
        name: 'Interview Transcript',
        status: ['Archived'],
        version: '3'

    },
    {
        key: '3',
        name: 'Location Information',
        status: ['In use'],
        version: '1'
    },
    {
        key: '1',
        name: 'Incident Details',
        status: ['Active'],
        version: '1'

    },
    {
        key: '2',
        name: 'Interview Transcript',
        status: ['Archived'],
        version: '3'

    },
    {
        key: '3',
        name: 'Location Information',
        status: ['In use'],
        version: '1'
    },
];


const FormTable = () => {
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default FormTable;