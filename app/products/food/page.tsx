import React from 'react'
import { ProductMaps } from '../components/ProductsMaps'
import ShopBtn from '@/app/utils/shopNow'
import Image from 'next/image'

const Page = () => {
  // Move the filter operation outside the return statement
  const foodItms = ProductMaps.filter(product => product.category === 'Food')

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {foodItms.map((item) => (
        <div key={item.id} className="group border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="relative aspect-square">
            <Image
              src={item.name}
              alt={item.describ}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            
            {/* Positioned Shop Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
              <ShopBtn />
            </div>
          </div>
          
          <div className="p-4">
            <p className="font-bold text-lg">{item.price}</p>
            <p className="text-gray-600">{item.describ}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Page;