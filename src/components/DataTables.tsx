import React from 'react';
import { Table, Tag, Checkbox } from 'antd';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';

interface DataTableProps {
}

const columns = [
  {
    title: '',
    dataIndex: 'checkbox',
    key: 'checkbox',
    render: () => <Checkbox />,
  },
  {
    title: 'ASSESSMENT TITLE',
    dataIndex: 'assessmentTitle',
    key: 'assessmentTitle',
  },
  {
    title: 'TYPE',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'NO. OF SUPPLIERS',
    dataIndex: 'numberOfSuppliers',
    key: 'numberOfSuppliers',
  },
  {
    title: 'SCORE',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: 'RISK CLASSIFICATION',
    dataIndex: 'riskClassification',
    key: 'riskClassification',
    render: (text: string) => (
      <>
        <span
          style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            marginRight: '8px',
            background: getRiskColor(text),
          }}
        />
        {text}
      </>
    ),
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    render: (text: string) => (
      <span style={{ color: getStatusColor(text) }}>{text}</span>
    ),
  },
  {
    title: 'RESULT',
    dataIndex: 'result',
    key: 'result',
    render: (text: string) => (
      <span style={{ color: text === 'View' ? 'green' : 'inherit' }}>{text}</span>
    ),
  },
  {
    title: 'ACTIONS',
    key: 'actions',
    render: () => (
      <div style={{ display: 'flex', gap: '8px' }}>
        <EyeOutlined />
        <EditOutlined />
      </div>
    ),
  },
];

const data = [
  {
    key: '1',
    checkbox: true,
    assessmentTitle: 'Assessment 1',
    type: 'BRSR',
    numberOfSuppliers: 20,
    riskClassification: 'Medium',
    status: 'PENDING',
  },
  {
    key: '2',
    checkbox: false,
    assessmentTitle: 'Assessment 2',
    type: 'BRSR',
    numberOfSuppliers: 25,
    score: 98,
    riskClassification: 'Low',
    status: 'COMPLETE',
    result: 'View',
  },
  {
    key: '3',
    checkbox: false,
    assessmentTitle: 'Assessment 3',
    type: 'BRSR',
    numberOfSuppliers: 35,
    score: 22,
    riskClassification: 'High',
    status: 'COMPLETE',
    result: 'View',
  },
  {
    key: '4',
    checkbox: false,
    assessmentTitle: 'Assessment 3',
    type: 'Custom',
    numberOfSuppliers: 49,
    score: 23,
    riskClassification: 'Medium',
    status: 'COMPLETE',
    result: 'View',
  },
  {
    key: '5',
    checkbox: false,
    assessmentTitle: 'Assessment 3',
    type: 'Custom',
    numberOfSuppliers: 100,
    score: 42,
    riskClassification: 'Medium',
    status: 'COMPLETE',
    result: 'View',
  },
];

const getRiskColor = (risk: string) => {
  switch (risk) {
    case 'Low':
      return 'green';
    case 'Medium':
      return 'orange';
    case 'High':
      return 'red';
    default:
      return 'gray';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'PENDING':
      return 'orange';
    case 'COMPLETE':
      return 'green';
    default:
      return 'inherit';
  }
};

const DataTable: React.FC<DataTableProps> = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default DataTable;