import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Response Time (hrs)', current: 24, proposed: 1 },
  { name: 'Processing Speed (k records/hr)', current: 1, proposed: 10 },
  { name: 'Error Rate (%)', current: 5, proposed: 1 },
];

const Insights: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Efficiency Improvements</h2>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="current" fill="#8884d8" name="Current System" />
            <Bar dataKey="proposed" fill="#82ca9d" name="Proposed System" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Insights;