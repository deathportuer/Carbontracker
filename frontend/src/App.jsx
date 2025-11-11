import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [page, setPage] = useState('calculator');
  return (
    <div className='min-h-screen bg-white p-4'>
      <header className='flex justify-between items-center py-4 border-b'>
        <h1 className='text-2xl font-bold'>🌱 CarbonTrack</h1>
        <nav className='flex gap-3'>
          <button onClick={() => setPage('calculator')}>Calculator</button>
          <button onClick={() => setPage('dashboard')}>Dashboard</button>
          <button onClick={() => setPage('admin')}>Admin</button>
        </nav>
      </header>
      <main className='py-6'>
        {page === 'calculator' && <Calculator />}
        {page === 'dashboard' && <Dashboard />}
        {page === 'admin' && <AdminPanel />}
      </main>
    </div>
  );
}