import React from 'react';
import { prodDemoMaps } from './ProductsMaps';
import Image from 'next/image';
import ShopBtn from '@/app/utils/shopNow';
import ProdNav from './proGenNav';

const GenProd = () => {
  return (
    <>
    <ProdNav />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {prodDemoMaps.map((item) => (
          <div key={item.id} className="group border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative aspect-square">
              <Image
                src={item.name}
                alt={item.describ}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ShopBtn />
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <p className="font-bold text-lg">{item.price}</p>
              <p className="text-gray-600">{item.describ}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenProd;