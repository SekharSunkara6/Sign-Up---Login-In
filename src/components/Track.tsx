import React from 'react';
import { Table, Badge, Button, Card, Input } from 'antd';
import { LoadingOutlined, ClockCircleOutlined } from '@ant-design/icons';

interface TrackerData {
  month: string;
  status: string;
  completion: number;
  businessUnit: string;
}

const columns = [
  {
    title: 'MONTH',
    dataIndex: 'month',
    key: 'month',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => {
      let color;
      switch (status) {
        case 'PENDING APPROVAL':
          color = 'pink';
          break;
        case 'APPROVED':
          color = 'green';
          break;
        case 'INCOMPLETE':
          color = 'orange';
          break;
        default:
          color = 'black';
      }
      return <Button style={{ backgroundColor: color, color: 'white' }}>{status}</Button>;
    },
  },
  {
    title: 'COMPLETION %',
    dataIndex: 'completion',
    key: 'completion',
    render: (completion: number) => `${completion}%`,
  },
  {
    title: 'BUSINESS UNIT',
    dataIndex: 'businessUnit',
    key: 'businessUnit',
  },
];

const data: TrackerData[] = [
  {
    month: 'Jan 2023',
    status: 'PENDING APPROVAL',
    completion: 20,
    businessUnit: 'Business Unit 1',
  },
  {
    month: 'Feb 2023',
    status: 'APPROVED',
    completion: 30,
    businessUnit: 'Business Unit 1',
  },
  {
    month: 'Mar 2023',
    status: 'INCOMPLETE',
    completion: 50,
    businessUnit: 'Business Unit 1',
  },
];

const Tracker: React.FC = () => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <Card
          style={{
            width: 250,
            height: 100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: '16px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            position: 'relative',
            padding: '10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <span>PENDING TRACKERS</span>
            <LoadingOutlined style={{ fontSize: '16px', color: '#888' }} />
          </div>
          <div style={{ fontSize: '34px', fontWeight: 'bold', marginTop: '10px' }}>45/60</div>
        </Card>
        <Card
          style={{
            width: 250,
            height: 100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            position: 'relative',
            padding: '10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <span>PENDING REVIEWS</span>
            <ClockCircleOutlined style={{ fontSize: '16px', color: '#888' }} />
          </div>
          <div style={{ fontSize: '34px', fontWeight: 'bold', marginTop: '10px' }}>3</div>
        </Card>
      </div>
      <Input.Search placeholder="Search for a business unit" style={{ width: '300px', marginBottom: '16px' }} />
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default Tracker;
