import React from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

const elements = [
  { id: '1', type: 'input', data: { label: 'Manual Data Entry' }, position: { x: 250, y: 0 } },
  { id: '2', data: { label: 'Limited Data Processing' }, position: { x: 250, y: 100 } },
  { id: '3', data: { label: 'Customer Service Bottleneck' }, position: { x: 100, y: 200 } },
  { id: '4', data: { label: 'Growth Constraints' }, position: { x: 250, y: 200 } },
  { id: '5', data: { label: 'Delayed Decision Making' }, position: { x: 400, y: 200 } },
  { id: '6', data: { label: 'Lost Business Opportunities' }, position: { x: 100, y: 300 } },
  { id: '7', data: { label: 'Competitive Disadvantage' }, position: { x: 400, y: 300 } },
  { id: 'e1-2', source: '1', target: '2', animated: true, label: 'High Error Rate' },
  { id: 'e2-3', source: '2', target: '3', animated: true, label: 'Slow Response Time' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5', animated: true, label: 'Weekly Reports' },
  { id: 'e3-6', source: '3', target: '6' },
  { id: 'e5-7', source: '5', target: '7', animated: true, label: 'Reactive Approach' },
];

const CurrentSystem: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Current System Analysis</h2>
      <div style={{ height: 500 }}>
        <ReactFlow elements={elements} />
      </div>
    </div>
  );
};

export default CurrentSystem;