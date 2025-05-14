import React from 'react';
import ProdNav from './components/prodNav';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ProdNav />
    <main className='  p-4'>
        
        {children}
      </main>
    </div>
  );
}
