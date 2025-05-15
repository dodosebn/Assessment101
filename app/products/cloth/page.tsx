import React from 'react'
import { ProductMaps } from '../components/ProductsMaps'
import ShopBtn from '@/app/utils/AddBtn'
import Image from 'next/image'
import UseCloth from '@/app/utils/useCloth'

const Page = () => {
  const clothingProducts = ProductMaps.filter(product => product.category === 'cloth')

  return (
   <UseCloth whereWeAreImportingFrom={clothingProducts}/>
  )
}

export default Page;