import React from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

const elements = [
  { id: '1', type: 'input', data: { label: 'AI-Powered Data Entry' }, position: { x: 250, y: 0 } },
  { id: '2', data: { label: 'Advanced Data Processing' }, position: { x: 250, y: 100 } },
  { id: '3', data: { label: 'Automated Customer Service' }, position: { x: 100, y: 200 } },
  { id: '4', data: { label: 'Scalable Cloud Infrastructure' }, position: { x: 250, y: 200 } },
  { id: '5', data: { label: 'Real-time Decision Making' }, position: { x: 400, y: 200 } },
  { id: '6', data: { label: 'Increased Business Opportunities' }, position: { x: 100, y: 300 } },
  { id: '7', data: { label: 'Competitive Advantage' }, position: { x: 400, y: 300 } },
  { id: 'e1-2', source: '1', target: '2', animated: true, label: 'Low Error Rate' },
  { id: 'e2-3', source: '2', target: '3', animated: true, label: 'Fast Response Time' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5', animated: true, label: 'Real-time Reports' },
  { id: 'e3-6', source: '3', target: '6' },
  { id: 'e5-7', source: '5', target: '7', animated: true, label: 'Proactive Approach' },
];

const FutureSystem: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Future System Analysis</h2>
      <p className="mb-4">Based on the implementation of AI solutions and addressing the challenges of "Slow response times, Limited scalability", the future system will offer significant improvements:</p>
      <div style={{ height: 500 }}>
        <ReactFlow elements={elements} />
      </div>
    </div>
  );
};

export default FutureSystem;