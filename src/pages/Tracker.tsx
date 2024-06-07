import React, { useState } from 'react';
import { Layout, Menu, Dropdown, Select, Button, Tabs } from 'antd';
import {
    DashboardOutlined,
    EditOutlined,
    DatabaseOutlined,
    BarChartOutlined,
    FileTextOutlined,
    ShopOutlined,
    AreaChartOutlined,
    BulbOutlined,
    LogoutOutlined,
    UserOutlined,
} from '@ant-design/icons';
import logo from '../assets/Logo_horizontal 1.png';
import './Tracker.css';
import DataTable from '../components/DataTables';
import Track from '../components/Track';
import LogoutButton from '../components/LogoutButton';

const { Header, Sider, Content } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="https://www.antgroup.com">Profile</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="https://www.aliyun.com">Settings</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
            <LogoutButton />
        </Menu.Item>
    </Menu>
);

const Tracker: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState('data-entry');

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const handleTabChange = (key: string) => {
        setActiveTab(key);
    };

    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
            <Sider
                theme="dark"
                collapsible
                collapsed={collapsed}
                onCollapse={toggleCollapsed}
                style={{ backgroundColor: 'black' }}
            >
                <div className="logo">
                    <img src={logo} alt="Breathe ESG" style={{ height: '32px' }} />
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ backgroundColor: 'black' }}>
                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="2" icon={<EditOutlined />}>
                        Entity Manager
                    </Menu.Item>
                    <Menu.Item key="3" icon={<DatabaseOutlined />}>
                        Data Manager
                    </Menu.Item>
                    <Menu.Item key="4" icon={<BarChartOutlined />}>
                        Reporting
                    </Menu.Item>
                    <Menu.Item key="5" icon={<FileTextOutlined />}>
                        Materiality
                    </Menu.Item>
                    <Menu.Item key="6" icon={<ShopOutlined />}>
                        Suppliers
                    </Menu.Item>
                    <Menu.Item key="7" icon={<AreaChartOutlined />}>
                        Analytics
                    </Menu.Item>
                    <Menu.Item key="8" icon={<BulbOutlined />}>
                        Targets
                    </Menu.Item>
                    <Menu.Item key="9" icon={<LogoutOutlined />}>
                        <LogoutButton />
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        margin: '50px 0px 0px 0px',
                        background: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={logo}
                                alt="Breathe ESG"
                                style={{ height: '40px', marginRight: '16px' }}
                            />
                            <Dropdown overlay={menu}>
                                <a
                                    className="ant-dropdown-link"
                                    onClick={(e) => e.preventDefault()}
                                    style={{ color: 'black' }}
                                >
                                    View Name
                                </a>
                            </Dropdown>
                            <Select
                                defaultValue="North India Region"
                                style={{ width: 200, marginLeft: '16px' }}
                            >
                                <Option value="North India Region">
                                    North India Region
                                </Option>
                                
                            </Select>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Dropdown overlay={menu}>
                                <a
                                    className="ant-dropdown-link"
                                    onClick={(e) => e.preventDefault()}
                                    style={{ color: 'black' }}
                                >
                                    <UserOutlined style={{ marginRight: '8px' }} />
                                    John Doe
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid #ccc', margin: '10px 0' }} />
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                        <div className="header-tabs" style={{ marginRight: 'auto' }}>
                            <Tabs
                                activeKey={activeTab}
                                onChange={handleTabChange}
                                style={{ marginRight: '16px' }}
                                tabBarStyle={{ color: 'grey' }}
                            >
                                <TabPane
                                    tab={
                                        <span style={activeTab === 'data-entry' ? { color: 'green' } : { color: 'grey' }}>
                                            <BarChartOutlined /> DATA ENTRY
                                        </span>
                                    }
                                    key="data-entry"
                                />
                                <TabPane
                                    tab={
                                        <span style={activeTab === 'tracker' ? { color: 'green' } : { color: 'grey' }}>
                                            <AreaChartOutlined /> TRACKER
                                        </span>
                                    }
                                    key="tracker"
                                />
                            </Tabs>
                        </div>
                        <Select
                            defaultValue="FY 2023-24"
                            style={{ width: 150, marginRight: '16px' }}
                        >
                            <Option value="FY 2023-24">FY 2023-24</Option>
                        </Select>
                        <Button type="primary">Submit for Approval</Button>
                    </div>
                </Header>
                <div style={{ borderTop: '1px solid #ccc', margin: '50px 0' }} />

                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: '#fff',
                    }}
                >
                    {activeTab === 'data-entry' ? (
                        <DataTable />
                    ) : (
                        <Track />
                    )}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Tracker;
