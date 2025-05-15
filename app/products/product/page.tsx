import React from 'react'
import { ProductMaps } from '../components/ProductsMaps'
import ShopBtn from '@/app/utils/AddBtn'
import Image from 'next/image'
import UseCloth from '@/app/utils/useCloth'

const Page = () => {
  const productItms = ProductMaps.filter(product => product.category === 'Product')

  return (
<UseCloth whereWeAreImportingFrom={productItms}/>
  )
}

export default Page;