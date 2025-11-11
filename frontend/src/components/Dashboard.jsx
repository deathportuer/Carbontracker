import React, { useState } from 'react';
import { getUserData } from '../api';
export default function Dashboard() {
  const [userId, setUserId] = useState('');
  const [data, setData] = useState([]);
  const fetchData = async () => { const res = await getUserData(userId); setData(res); };
  return (
    <div className='max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow'>
      <h2 className='text-xl font-semibold mb-4'>User Dashboard</h2>
      <input type='text' placeholder='Enter User ID' value={userId} onChange={(e) => setUserId(e.target.value)} className='border p-2 w-full mb-3' />
      <button onClick={fetchData} className='bg-blue-600 text-white p-2 w-full rounded'>View Footprints</button>
      {data.length > 0 && (
        <table className='w-full mt-4 border'>
          <thead><tr className='bg-gray-200'><th className='p-2'>Activity</th><th>Emissions</th><th>Trust Score</th><th>Time</th></tr></thead>
          <tbody>{data.map((f,i)=>(<tr key={i}><td className='p-2'>{f.activity}</td><td>{f.emissions}</td><td>{f.trust_score}</td><td>{new Date(f.timestamp).toLocaleString()}</td></tr>))}</tbody>
        </table>
      )}
    </div>
  );
}