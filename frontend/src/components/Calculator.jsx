import React, { useState } from 'react';
import { submitFootprint } from '../api';
export default function Calculator() {
  const [userId, setUserId] = useState('');
  const [activity, setActivity] = useState('');
  const [emissions, setEmissions] = useState('');
  const [trustScore, setTrustScore] = useState(null);
  const handleSubmit = async () => {
    const res = await submitFootprint(userId, activity, parseFloat(emissions));
    setTrustScore(res.trust_score);
  };
  return (
    <div className='max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow'>
      <h2 className='text-xl font-semibold mb-4'>Add Your Activity</h2>
      <input type='text' placeholder='User ID' value={userId} onChange={(e) => setUserId(e.target.value)} className='border p-2 w-full mb-2' />
      <input type='text' placeholder='Activity' value={activity} onChange={(e) => setActivity(e.target.value)} className='border p-2 w-full mb-2' />
      <input type='number' placeholder='Emissions (kg CO₂)' value={emissions} onChange={(e) => setEmissions(e.target.value)} className='border p-2 w-full mb-4' />
      <button onClick={handleSubmit} className='bg-green-600 text-white p-2 w-full rounded'>Submit</button>
      {trustScore !== null && <div className='mt-4 text-center'><p>Your Trust Score: <b>{trustScore}</b> / 100</p></div>}
    </div>
  );
}