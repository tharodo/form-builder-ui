import { PageHeader} from 'antd';
import './Header.css'
import { Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

const routes = [
    {
        path: '',
        breadcrumbName: 'Form Configuration',
    },
    {
        path: 'form',
        breadcrumbName: 'Forms',
    }
];
const Header = () => {
    return (
        <div>
            <div className='menu'>
                <PageHeader>
                    <Avatar icon={<UserOutlined />}/>
                </PageHeader>                     
            </div>
            <Divider/>
            <PageHeader
                className="site-page-header"
                breadcrumb={{ routes }}
            />
            <Divider/>
        </div>
    )
}

export default Header;